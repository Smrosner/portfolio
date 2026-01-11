/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState, type FormEvent, type JSX } from "react";

import { theme as themeStyles } from "@/styles/theme";

type LinkStatus = "loading" | "ready" | "error";

type LinkItem = {
  id: string;
  url: string;
  createdAt: number;
  status: LinkStatus;
  title?: string;
  siteName?: string;
  imageUrl?: string;
  faviconUrl?: string;
  errorMessage?: string;
};

type LinkPreviewResponse = {
  url: string;
  title?: string;
  siteName?: string;
  imageUrl?: string;
  faviconUrl?: string;
};

const STORAGE_KEY = "linksync.links.v1";

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeUserUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;

  try {
    // If user enters a full URL, accept it as-is.
    return new URL(raw).toString();
  } catch {
    // If user enters a domain without protocol, assume https.
    try {
      return new URL(`https://${raw}`).toString();
    } catch {
      return null;
    }
  }
}

function getHostname(urlString: string): string {
  try {
    return new URL(urlString).hostname;
  } catch {
    return urlString;
  }
}

function loadStoredLinks(): LinkItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(Boolean) as LinkItem[];
  } catch {
    return [];
  }
}

function storeLinks(links: LinkItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

async function fetchPreview(url: string): Promise<LinkPreviewResponse> {
  const res = await fetch("/api/link-preview", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(body?.error || `Preview failed (${res.status})`);
  }

  const data = (await res.json()) as LinkPreviewResponse;
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn("[linksync] /api/link-preview response:", data);
  }
  return data;
}

export default function LinkSyncPage(): JSX.Element {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [formError, setFormError] = useState<string | null>(null);

  const sortedLinks = useMemo(() => {
    return [...links].sort((a, b) => b.createdAt - a.createdAt);
  }, [links]);

  useEffect(() => {
    setLinks(loadStoredLinks());
  }, []);

  useEffect(() => {
    storeLinks(links);
  }, [links]);

  const upsertLink = (id: string, patch: Partial<LinkItem>): void => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const handleAdd = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setFormError(null);

    const normalized = normalizeUserUrl(input);
    if (!normalized) {
      setFormError("Please enter a valid URL.");
      return;
    }

    // Dedupe by normalized URL.
    const already = links.find((l) => l.url === normalized);
    if (already) {
      setFormError("That link is already in your list.");
      return;
    }

    const id = createId();
    const pending: LinkItem = {
      id,
      url: normalized,
      createdAt: Date.now(),
      status: "loading",
    };

    setLinks((prev) => [pending, ...prev]);
    setInput("");

    try {
      const preview = await fetchPreview(normalized);
      upsertLink(id, {
        url: preview.url || normalized,
        title: preview.title,
        siteName: preview.siteName,
        imageUrl: preview.imageUrl,
        faviconUrl: preview.faviconUrl,
        status: "ready",
        errorMessage: undefined,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Preview failed.";
      upsertLink(id, { status: "error", errorMessage: message });
    }
  };

  const handleRetry = async (link: LinkItem): Promise<void> => {
    upsertLink(link.id, { status: "loading", errorMessage: undefined });
    try {
      const preview = await fetchPreview(link.url);
      upsertLink(link.id, {
        url: preview.url || link.url,
        title: preview.title,
        siteName: preview.siteName,
        imageUrl: preview.imageUrl,
        faviconUrl: preview.faviconUrl,
        status: "ready",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Preview failed.";
      upsertLink(link.id, { status: "error", errorMessage: message });
    }
  };

  const handleRemove = (id: string): void => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div
      className={`min-h-screen ${themeStyles.gradients.primary} pt-28 pb-16`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight ${themeStyles.colors.text.primary}`}
          >
            LinkSync
          </h1>
          <p className={`mt-3 ${themeStyles.colors.text.secondary}`}>
            Paste a link to auto-generate a thumbnail preview, then browse your
            list.
          </p>

          <form onSubmit={handleAdd} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste a link (e.g. https://example.com)"
                className={`w-full ${themeStyles.components.input} ${themeStyles.colors.text.primary}`}
                aria-label="Link URL"
              />
              <button type="submit" className={themeStyles.components.button}>
                Add
              </button>
            </div>
            {formError && (
              <p className="mt-2 text-sm text-red-400" role="alert">
                {formError}
              </p>
            )}
          </form>
        </div>

        <div className="mt-10">
          {sortedLinks.length === 0 ? (
            <div
              className={`${themeStyles.components.card} ${themeStyles.gradients.card}`}
            >
              <p className={themeStyles.colors.text.secondary}>
                No links yet. Add one above to get started.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedLinks.map((link) => {
                const host = getHostname(link.url);
                const subtitle = link.siteName || host;

                return (
                  <div
                    key={link.id}
                    className={`${themeStyles.components.card} ${themeStyles.gradients.card} border ${themeStyles.colors.border} overflow-hidden p-0`}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <div className="p-4">
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
                          {link.imageUrl ? (
                            <img
                              src={link.imageUrl}
                              alt={link.title || subtitle}
                              className="w-full h-full object-contain bg-white/5"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                              <span className="text-sm text-white/70 px-4 text-center">
                                {host}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </a>

                    <div className="p-5 md:p-6 space-y-4">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`block text-sm font-semibold leading-snug ${themeStyles.colors.text.primary} hover:text-blue-300 transition-colors line-clamp-2`}
                        title={link.title || host}
                      >
                        {link.title || host}
                      </a>

                      <div className="flex items-start gap-3">
                        {link.faviconUrl ? (
                          <img
                            src={link.faviconUrl}
                            alt=""
                            className="w-5 h-5 rounded-sm mt-0.5"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-5 h-5 rounded-sm bg-white/10 mt-0.5" />
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className={`text-sm truncate ${themeStyles.colors.text.secondary} hover:text-blue-300 transition-colors`}
                              title={link.url}
                            >
                              {subtitle}
                            </a>
                            <button
                              type="button"
                              onClick={() => handleRemove(link.id)}
                              className="text-sm text-white/60 hover:text-white transition-colors"
                              aria-label="Remove link"
                            >
                              Remove
                            </button>
                          </div>

                          <p
                            className={`text-xs truncate ${themeStyles.colors.text.muted}`}
                          >
                            {host}
                          </p>

                          {link.status === "loading" && (
                            <p className="mt-2 text-sm text-white/70">
                              Fetching preview…
                            </p>
                          )}

                          {link.status === "error" && (
                            <div className="mt-2 flex items-center justify-between gap-3">
                              <p
                                className="text-sm text-red-400 truncate"
                                title={link.errorMessage}
                              >
                                {link.errorMessage || "Preview failed."}
                              </p>
                              <button
                                type="button"
                                onClick={() => handleRetry(link)}
                                className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
                              >
                                Retry
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
