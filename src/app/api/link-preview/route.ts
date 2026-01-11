import net from "node:net";

import { NextResponse } from "next/server";

const MAX_HTML_BYTES = 1_000_000; // 1MB
const FETCH_TIMEOUT_MS = 8_000;

function isHttpUrl(url: URL): boolean {
  return url.protocol === "http:" || url.protocol === "https:";
}

function isProbablyBlockedHostname(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return (
    h === "localhost" ||
    h === "0.0.0.0" ||
    h === "127.0.0.1" ||
    h === "::1" ||
    h.endsWith(".localhost") ||
    h.endsWith(".local")
  );
}

function isPrivateIp(ip: string): boolean {
  const family = net.isIP(ip);
  if (family === 4) {
    const [a, b] = ip.split(".").map((x) => Number(x));
    if ([a, b].some((n) => Number.isNaN(n))) return true;
    // 10.0.0.0/8
    if (a === 10) return true;
    // 127.0.0.0/8 loopback
    if (a === 127) return true;
    // 169.254.0.0/16 link-local
    if (a === 169 && b === 254) return true;
    // 172.16.0.0/12
    if (a === 172 && b >= 16 && b <= 31) return true;
    // 192.168.0.0/16
    if (a === 192 && b === 168) return true;
    return false;
  }

  if (family === 6) {
    const normalized = ip.toLowerCase();
    // loopback
    if (normalized === "::1") return true;
    // fc00::/7 unique local address (ULA), fe80::/10 link-local
    if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
    if (normalized.startsWith("fe8") || normalized.startsWith("fe9"))
      return true;
    if (normalized.startsWith("fea") || normalized.startsWith("feb"))
      return true;
    return false;
  }

  return true;
}

function parseTagAttributes(tag: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRe =
    /([A-Za-z_:-][A-Za-z0-9_:-]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let match: RegExpExecArray | null = null;
  while ((match = attrRe.exec(tag))) {
    const key = match[1].toLowerCase();
    const value = (match[3] ?? match[4] ?? match[5] ?? "").trim();
    attrs[key] = value;
  }
  return attrs;
}

function extractMetadata(html: string): {
  og: Record<string, string>;
  twitter: Record<string, string>;
  named: Record<string, string>;
  icons: Array<{ rel?: string; href?: string; sizes?: string; type?: string }>;
  jsonLdImages: string[];
  jsonLdTitles: string[];
  imageCandidates: string[];
  titleTag?: string;
} {
  const og: Record<string, string> = {};
  const twitter: Record<string, string> = {};
  const named: Record<string, string> = {};
  const icons: Array<{
    rel?: string;
    href?: string;
    sizes?: string;
    type?: string;
  }> = [];
  const jsonLdImages: string[] = [];
  const jsonLdTitles: string[] = [];
  const imageCandidates: string[] = [];

  const metaTagRe = /<meta\s+[^>]*>/gi;
  let metaMatch: RegExpExecArray | null = null;
  let metaIndex = 0;
  while ((metaMatch = metaTagRe.exec(html))) {
    const attrs = parseTagAttributes(metaMatch[0]);
    const content = attrs.content;
    if (!content) continue;

    const property = attrs.property?.toLowerCase();
    const name = attrs.name?.toLowerCase();

    if (process.env.NODE_ENV !== "production") {
      // Log meta tags in a scan-friendly format while debugging previews.
      // eslint-disable-next-line no-console
      console.warn(`[linksync][meta #${metaIndex}]`, {
        property,
        name,
        content: content,
      });
      metaIndex += 1;
    }

    if (property?.startsWith("og:")) {
      og[property] = content;
    } else if (name?.startsWith("twitter:")) {
      twitter[name] = content;
    } else if (name) {
      // Keep named meta tags as a fallback (e.g. Amazon uses <meta name="title"> for full product titles).
      named[name] = content;
    }
  }

  const linkTagRe = /<link\s+[^>]*>/gi;
  let linkMatch: RegExpExecArray | null = null;
  while ((linkMatch = linkTagRe.exec(html))) {
    const attrs = parseTagAttributes(linkMatch[0]);
    const rel = attrs.rel?.toLowerCase();
    if (!rel) continue;
    if (rel.includes("icon")) {
      icons.push({
        rel: attrs.rel,
        href: attrs.href,
        sizes: attrs.sizes,
        type: attrs.type,
      });
    }
  }

  // JSON-LD structured data often contains reliable product images/titles (e.g. Etsy listings).
  const jsonLdRe =
    /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonLdMatch: RegExpExecArray | null = null;
  while ((jsonLdMatch = jsonLdRe.exec(html))) {
    const raw = jsonLdMatch[1]?.trim();
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as unknown;

      const visit = (node: unknown): void => {
        if (Array.isArray(node)) {
          for (const item of node) visit(item);
          return;
        }
        if (!node || typeof node !== "object") return;

        const obj = node as Record<string, unknown>;
        const type = obj["@type"];
        const types = Array.isArray(type)
          ? type.map((t) => String(t).toLowerCase())
          : type
          ? [String(type).toLowerCase()]
          : [];
        const isProduct = types.includes("product");

        const name = obj.name;
        if (isProduct && typeof name === "string" && name.trim()) {
          jsonLdTitles.push(name.trim());
        }

        const image = obj.image;
        const pushImage = (v: unknown): void => {
          if (typeof v === "string" && v.trim()) jsonLdImages.push(v.trim());
          if (v && typeof v === "object") {
            const u = (v as Record<string, unknown>).url;
            if (typeof u === "string" && u.trim()) jsonLdImages.push(u.trim());
          }
        };
        if (isProduct && image) {
          if (Array.isArray(image)) image.forEach(pushImage);
          else pushImage(image);
        }

        for (const value of Object.values(obj)) visit(value);
      };

      visit(parsed);
    } catch {
      // ignore invalid JSON-LD blocks
    }
  }

  // Collect candidate images from <img> tags as a fallback when og/twitter images are missing or generic.
  const imgTagRe = /<img\s+[^>]*>/gi;
  let imgMatch: RegExpExecArray | null = null;
  while ((imgMatch = imgTagRe.exec(html))) {
    const attrs = parseTagAttributes(imgMatch[0]);

    // Amazon (and some others) embed a JSON map of image URLs to dimensions.
    // Example: data-a-dynamic-image='{"https://...jpg":[500,500],"...":[1000,1000]}'
    const dynamic = attrs["data-a-dynamic-image"];
    if (dynamic) {
      try {
        const parsed = JSON.parse(dynamic) as Record<string, unknown>;
        for (const key of Object.keys(parsed)) {
          imageCandidates.push(key);
        }
      } catch {
        // ignore
      }
    }

    const oldHires = attrs["data-old-hires"];
    if (oldHires) imageCandidates.push(oldHires);

    const src = attrs.src;
    if (src) imageCandidates.push(src);

    const srcset = attrs.srcset;
    if (srcset) {
      // Pick the largest width candidate from srcset.
      const parts = srcset
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean);
      let best: { url: string; w: number } | null = null;
      for (const p of parts) {
        const [u, size] = p.split(/\s+/);
        const w = size?.endsWith("w") ? Number(size.slice(0, -1)) : NaN;
        if (!u) continue;
        if (!Number.isFinite(w)) continue;
        if (!best || w > best.w) best = { url: u, w };
      }
      if (best) imageCandidates.push(best.url);
    }
  }

  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  const titleTag = titleMatch?.[1]?.replace(/\s+/g, " ").trim();

  return {
    og,
    twitter,
    named,
    icons,
    jsonLdImages,
    jsonLdTitles,
    imageCandidates,
    titleTag,
  };
}

function resolveUrlMaybe(
  value: string | undefined,
  baseUrl: string
): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (/^data:/i.test(trimmed)) return undefined;
  try {
    return new URL(trimmed, baseUrl).toString();
  } catch {
    return undefined;
  }
}

function scoreImageUrl(urlString: string): number {
  // Heuristics: prefer "product-ish" images and larger known patterns.
  // - Penalize obvious logos/sprites
  // - Boost Amazon media product image host patterns
  const u = urlString.toLowerCase();
  let score = 0;

  if (u.includes("sprite") || u.includes("logo")) score -= 50;
  if (u.includes("m.media-amazon.com/images/i/")) score += 40;

  // Amazon often encodes sizes like _SX679_ or _SY879_ in filenames.
  const sx = /_sx(\d+)_/.exec(u);
  const sy = /_sy(\d+)_/.exec(u);
  if (sx) score += Math.min(Number(sx[1]) / 10, 100);
  if (sy) score += Math.min(Number(sy[1]) / 10, 100);

  // Generic: larger dimensions in query params (common patterns).
  const w = /[?&](w|width)=(\d+)/.exec(u);
  const h = /[?&](h|height)=(\d+)/.exec(u);
  if (w) score += Math.min(Number(w[2]) / 20, 50);
  if (h) score += Math.min(Number(h[2]) / 20, 50);

  return score;
}

function pickBestImageFromCandidates(
  candidates: string[],
  baseUrl: string
): string | undefined {
  const seen = new Set<string>();
  const normalized = candidates
    .map((c) => resolveUrlMaybe(c, baseUrl))
    .filter(Boolean) as string[];

  const unique = normalized.filter((u) => {
    if (seen.has(u)) return false;
    seen.add(u);
    return true;
  });

  if (unique.length === 0) return undefined;

  unique.sort((a, b) => scoreImageUrl(b) - scoreImageUrl(a));

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(
      "[linksync] image candidates (top 10):",
      unique.slice(0, 10).map((u) => ({ score: scoreImageUrl(u), url: u }))
    );
  }

  return unique[0];
}

function isLikelyGenericMetaImage(urlString: string): boolean {
  const u = urlString.toLowerCase();
  // Amazon frequently uses this as og:image for share previews (not the product).
  if (u.includes("/share-icons/") && u.endsWith("/amazon.png")) return true;
  // Generic fallbacks.
  if (u.includes("logo")) return true;
  return false;
}

function isLikelyGenericTitle(title: string): boolean {
  const t = title.trim().toLowerCase();
  // Amazon often sets og:title / <title> to this generic value.
  if (t === "amazon.com") return true;
  return false;
}

function pickBestIconHref(
  icons: Array<{ rel?: string; href?: string; sizes?: string; type?: string }>,
  baseUrl: string
): string | undefined {
  // Prefer svg/png if available, otherwise first icon.
  const withHref = icons
    .map((i) => ({ ...i, resolved: resolveUrlMaybe(i.href, baseUrl) }))
    .filter((i) => Boolean(i.resolved)) as Array<{
    rel?: string;
    href?: string;
    sizes?: string;
    type?: string;
    resolved: string;
  }>;

  const preferred =
    withHref.find((i) => (i.type ?? "").includes("svg")) ??
    withHref.find((i) => (i.type ?? "").includes("png")) ??
    withHref[0];

  return preferred?.resolved;
}

async function fetchHtml(
  url: string
): Promise<{ finalUrl: string; html: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        // Many sites block unknown clients; this is a reasonable default UA.
        "user-agent":
          "LinkSyncPreviewBot/0.1 (+https://example.invalid; Next.js Route Handler)",
        accept: "text/html,application/xhtml+xml",
      },
    });

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("text/html")) {
      throw new Error("URL did not return HTML");
    }

    const contentLength = res.headers.get("content-length");
    if (contentLength && Number(contentLength) > MAX_HTML_BYTES) {
      throw new Error("HTML response too large");
    }

    const text = await res.text();
    const html =
      text.length > MAX_HTML_BYTES ? text.slice(0, MAX_HTML_BYTES) : text;
    return { finalUrl: res.url || url, html };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const urlString = (body as { url?: unknown })?.url;
  if (typeof urlString !== "string" || !urlString.trim()) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let url: URL;
  try {
    url = new URL(urlString.trim());
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (!isHttpUrl(url)) {
    return NextResponse.json(
      { error: "Only http/https URLs are supported" },
      { status: 422 }
    );
  }

  if (isProbablyBlockedHostname(url.hostname)) {
    return NextResponse.json({ error: "Blocked hostname" }, { status: 400 });
  }

  // If hostname is an IP literal, block private ranges.
  if (net.isIP(url.hostname) && isPrivateIp(url.hostname)) {
    return NextResponse.json({ error: "Blocked IP" }, { status: 400 });
  }

  try {
    const { finalUrl, html } = await fetchHtml(url.toString());
    const {
      og,
      twitter,
      named,
      icons,
      jsonLdImages,
      jsonLdTitles,
      imageCandidates,
      titleTag,
    } = extractMetadata(html);

    const candidates = [
      ...jsonLdTitles,
      og["og:title"],
      twitter["twitter:title"],
      named["title"],
      named["description"],
      titleTag,
    ].filter(Boolean) as string[];

    const title =
      candidates.find((t) => !isLikelyGenericTitle(t)) ?? candidates[0];

    const siteName = og["og:site_name"] ?? undefined;

    const metaImageUrl =
      resolveUrlMaybe(og["og:image"], finalUrl) ??
      resolveUrlMaybe(twitter["twitter:image"], finalUrl) ??
      resolveUrlMaybe(twitter["twitter:image:src"], finalUrl);

    const jsonLdBest = pickBestImageFromCandidates(jsonLdImages, finalUrl);

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      // console.warn("[linksync] meta image options:", {
      //   "og:image": og["og:image"],
      //   "twitter:image": twitter["twitter:image"],
      //   "twitter:image:src": twitter["twitter:image:src"],
      //   resolvedMetaImageUrl: metaImageUrl,
      // });
      // eslint-disable-next-line no-console
      console.warn(
        "[linksync] <img>-derived candidate count:",
        imageCandidates.length
      );
      // eslint-disable-next-line no-console
      console.warn("[linksync] json-ld:", {
        titles: jsonLdTitles.length,
        images: jsonLdImages.length,
        bestImage: jsonLdBest,
      });
    }

    const bestCandidate = pickBestImageFromCandidates(
      imageCandidates,
      finalUrl
    );
    const metaScore = metaImageUrl ? scoreImageUrl(metaImageUrl) : -Infinity;
    const jsonLdScore = jsonLdBest ? scoreImageUrl(jsonLdBest) : -Infinity;
    const candidateScore = bestCandidate
      ? scoreImageUrl(bestCandidate)
      : -Infinity;

    const bestNonMeta =
      jsonLdBest && jsonLdScore >= candidateScore ? jsonLdBest : bestCandidate;
    const bestNonMetaScore = Math.max(jsonLdScore, candidateScore);

    // Prefer non-generic product images when we have better <img> candidates.
    // This handles sites (notably Amazon) that set og:image to a generic brand image.
    const shouldPreferCandidate =
      Boolean(bestNonMeta) &&
      (!metaImageUrl ||
        isLikelyGenericMetaImage(metaImageUrl) ||
        bestNonMetaScore > metaScore + 20);

    const imageUrl = shouldPreferCandidate ? bestNonMeta : metaImageUrl;

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("[linksync] image selection:", {
        metaImageUrl,
        metaScore,
        jsonLdBest,
        jsonLdScore,
        bestCandidate,
        candidateScore,
        chosen: imageUrl,
      });
    }

    const faviconUrl =
      pickBestIconHref(icons, finalUrl) ??
      resolveUrlMaybe("/favicon.ico", finalUrl);

    return NextResponse.json(
      {
        url: finalUrl,
        title,
        siteName,
        imageUrl,
        faviconUrl,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : "Preview failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
