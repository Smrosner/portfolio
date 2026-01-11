# LinkSync MVP – Implementation Doc

## Overview

**LinkSync** is a lightweight “paste a link → get a thumbnail → render a clickable grid/list” experience.

The current route `src/app/linksync/page.tsx` is empty, so we’ll implement the MVP from scratch within this Next.js (App Router) repo.

---

## Goals (MVP)

- **Paste links**: user can paste/enter a URL and add it to a list.
- **Auto-populate thumbnail**: app fetches preview metadata and selects the best available image for the URL.
- **Display list/grid**: render thumbnails with a hyperlink to the original URL.

---

## Non-goals (for MVP)

- User accounts, multi-user sharing, public profiles
- Database persistence / syncing across devices
- Rich editing (tags, collections, notes), drag/drop reorder
- High-scale crawling, background jobs, queues

---

## UX / UI Spec

### Primary screen (`/linksync`)

- **Input**: single URL input field + “Add” button.
- **List/grid**: cards showing:
  - Thumbnail image (or fallback)
  - Title (optional but recommended)
  - Click opens URL in new tab (`target="_blank"` + `rel="noreferrer"`).
- **States**:
  - Loading indicator per added link (while preview is fetched)
  - Error state (invalid URL / preview failed) with retry + fallback thumbnail

### Fallbacks

- If no usable image is found:
  - show a neutral placeholder (local image or simple gradient block)
  - optionally show site hostname + favicon (if available)

---

## Technical Approach

### Why we need a server route for previews

Fetching a target page’s HTML from the browser is often blocked by **CORS**, and many sites require a reasonable **User-Agent** header. So thumbnail extraction should happen **server-side** in a Next.js Route Handler.

### High-level architecture

- **Client** (`/linksync` page):
  - manages list state (added URLs + preview metadata)
  - calls preview API when a URL is added
  - persists list locally (MVP: `localStorage`)
- **Server** (`/api/link-preview`):
  - validates URL
  - fetches HTML
  - extracts OpenGraph/Twitter metadata (title + image + favicon)
  - returns normalized JSON for the client

---

## Data Model (client-side)

Minimal shape:

- `id`: string (uuid or timestamp-based)
- `url`: string
- `createdAt`: number (ms)
- `status`: `"loading" | "ready" | "error"`
- `title?`: string
- `imageUrl?`: string
- `faviconUrl?`: string
- `siteName?`: string
- `errorMessage?`: string

Persistence (MVP): store an array of these records in `localStorage` under a single key (e.g. `linksync.links.v1`).

---

## API Design

### `POST /api/link-preview`

Request:

- JSON `{ "url": "https://example.com" }`

Response `200`:

- JSON `{ "url": "...", "title": "...", "imageUrl": "...", "faviconUrl": "...", "siteName": "..." }`

Error responses:

- `400`: invalid URL
- `422`: unsupported protocol (non-http/https)
- `429`: rate limited (optional for MVP)
- `500`: preview fetch/parse failed

Notes:

- Keep payload small; no need to return raw HTML.
- Set cache headers (short TTL) if desired, but MVP can skip.

---

## Metadata Extraction (Thumbnail Logic)

Priority order for images:

1. `<meta property="og:image" content="...">`
2. `<meta name="twitter:image" content="...">` (or `twitter:image:src`)
3. `<link rel="image_src" href="...">` (rare, but helpful)
4. Heuristic fallback: first large `<img>` (optional; can be skipped in MVP to keep it simple)

Title selection order:

1. `<meta property="og:title">`
2. `<meta name="twitter:title">`
3. `<title>`

Favicon selection:

1. `<link rel="icon" href="...">` / `<link rel="shortcut icon" ...>`
2. Default to `${origin}/favicon.ico`

Normalization rules:

- Resolve **relative URLs** against the fetched page’s final URL (handle redirects).
- Reject `data:` URLs for images (size/security).
- Optionally reject obviously tiny icons as “thumbnail” (e.g. 16×16) if we implement heuristics later.

Implementation detail:

- For HTML parsing, **recommended**: add `cheerio` (small, reliable for meta tags).
- Alternative (no deps): regex-based extraction (faster to ship, less reliable).

---

## Validation & Security Considerations (important)

Because the server will fetch user-provided URLs, we must reduce SSRF risk:

- **Protocol allowlist**: only `http:` and `https:`.
- **Host validation** (recommended):
  - reject `localhost`, `127.0.0.1`, `::1`
  - reject private IP ranges (10/8, 172.16/12, 192.168/16, link-local, etc.)
  - (best practice) resolve DNS and block private IPs even if hostname looks public
- **Timeouts**: short fetch timeout (e.g. 5–10s) and small max response size.
- **Redirect limits**: rely on fetch defaults or enforce max redirects.
- **Rate limiting**: optional for MVP; consider per-IP basic throttling if deployed publicly.

For MVP inside a personal portfolio, we can start with protocol + obvious-host blocking and document the stronger SSRF protections as “next”.

---

## Performance Considerations

- **Cache previews**:
  - Client-side: cache by URL in memory + localStorage.
  - Server-side (later): in-memory LRU or external KV (Upstash/Redis).
- **Avoid refetching**: if URL already exists in list, don’t fetch again (or allow “refresh”).
- **Images**: use Next `<Image>` if desired; for MVP, plain `<img>` is fine.

---

## Implementation Plan (step-by-step)

### Phase 1 — UI + local state

- Build `src/app/linksync/page.tsx` as a client page (or a server page that renders a client component).
- Add URL input, “Add” button, list rendering, loading/error states.
- Add local persistence via `localStorage`.

### Phase 2 — Preview API

- Create `src/app/api/link-preview/route.ts`:
  - validate URL
  - fetch HTML (with UA header + timeout)
  - parse metadata
  - return JSON

### Phase 3 — Integrate preview fetching

- On “Add”:
  - create a list item immediately with `status="loading"`
  - call `/api/link-preview`
  - update item to `ready` with `imageUrl/title/faviconUrl` or `error`

### Phase 4 — Polish + guardrails

- Dedupe URLs (exact match + normalized trailing slash optional).
- Add retry button for failed previews.
- Add placeholder thumbnail and optionally show hostname when no image.

---

## Current Implementation Status (checked off)

### API (`/api/link-preview`)

- [x] Route handler implemented at `src/app/api/link-preview/route.ts`
- [x] Validates URL + restricts protocol to http/https
- [x] Blocks obvious localhost / private IP literals
- [x] Fetches HTML server-side with UA header + timeout + max response size
- [x] Extracts OG/Twitter metadata + resolves relative URLs
- [x] Extracts favicon from `<link rel="icon">` (fallback to `/favicon.ico`)
- [x] **Amazon support**:
  - [x] If `og:image` is generic (Amazon logo), select best product image from `<img>` candidates (supports `data-a-dynamic-image` / `data-old-hires` / `srcset`)
  - [x] Prefer a non-generic title (falls back to `<meta name="title">` / `<meta name="description">` when `og:title` is `Amazon.com`)
- [x] Dev-only logging for debugging (meta tags, image candidates, selection)

### UI (`/linksync`)

- [x] Page implemented at `src/app/linksync/page.tsx`
- [x] URL input + Add button
- [x] Immediately adds an item in `loading` state, then updates with preview results
- [x] Displays a responsive grid of link cards with clickable thumbnail + title
- [x] Loading / error states + Retry
- [x] Remove link
- [x] Dedupe links by normalized URL
- [x] Local persistence via `localStorage` (`linksync.links.v1`)
- [x] Thumbnail fit: uses `object-contain` so product images don’t crop awkwardly
- [x] Card spacing/padding improvements + margin around image frame

### Styling utilities

- [x] Added `line-clamp-2` utility in `src/app/globals.css` (with `line-clamp` + `-webkit-line-clamp`)

---

## Testing Checklist (MVP)

- [ ] Add a normal OpenGraph site (should show thumbnail).
- [ ] Add a site without OG image (should show placeholder, not crash).
- [ ] Add an invalid URL (should show validation error).
- [ ] Add a `http://localhost:...` URL (should be blocked).
- [ ] Refresh the page (links should persist via `localStorage`).
- [ ] Multiple adds quickly (loading states shouldn’t clobber each other).

---

## “Next” After MVP

- Collections/folders, tags, search
- Cloud persistence (DB + auth)
- Shareable public page (read-only)
- Better thumbnail heuristics (largest image, aspect ratio filtering)
- Strong SSRF protection (DNS resolution + private IP blocking)
- Server-side caching / rate limiting
