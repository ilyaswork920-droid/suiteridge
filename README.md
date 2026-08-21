# SuiteRidge

Independent software research platform for small business owners. Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Fully static — every page is prerendered at build time.

## Stack & why

- **Next.js App Router, static generation** — every route uses `generateStaticParams`, so the whole site ships as static HTML/CSS with no server runtime cost, and Core Web Vitals start from a clean baseline.
- **Tailwind v4** (CSS-based `@theme`, no `tailwind.config.js`) — the full design system (colors, fonts) lives in `src/app/globals.css`.
- **next/font** for Fraunces (display), Public Sans (body), IBM Plex Mono (data/labels/tags) — self-hosted, no render-blocking Google Fonts request.
- **No CMS, no database.** Content is typed TypeScript data in `src/lib/content/*.ts`. This is deliberate: every product claim needs a `source: "vendor" | "editorial" | "user"` tag (see Methodology below), which a generic CMS field doesn't enforce — the type system does.

## Content model

```
src/lib/content/
  products.ts      Product/pricing/review data — the source of truth for every review
  best.ts          "Best X for Y" shortlist pages (includes the 3 category pillars)
  comparisons.ts    "A vs B" pages
  alternatives.ts   "X alternatives" pages
  guides.ts         Informational / FAQ guide pages
  briefs.ts         The full first-50 content plan — published + not-yet-written, with status
```

### Adding a new review
1. Research the product's real, current pricing and features — do not estimate.
2. Add an entry to `products.ts` matching the `Product` type. Every claim in `keyFeatures` needs a `source` tag: `"vendor"` (from the vendor's own pricing/docs), `"editorial"` (SuiteRidge's analysis), or `"user"` (cited third-party review data). Never fabricate hands-on testing.
3. Set `pricingLastVerified` to today's date. Re-verify and bump it on the cadence in `/methodology` (pricing quarterly, features semi-annually).
4. The page at `/reviews/[slug]` and the sitemap pick it up automatically — no routing code to touch.

### Adding a comparison / alternatives / best-for / guide
Same pattern: add a typed entry to the matching file in `src/lib/content/`, referencing product slugs that already exist in `products.ts`. Pages and sitemap entries generate automatically.

### The remaining ~40 articles
`briefs.ts` holds the full first-50 content plan from the SuiteRidge Playbook, each marked `"published"` or `"briefed"`. `"briefed"` entries have a title, primary keyword, category, and priority — they're ready for a writer to research and turn into a `products.ts` / `comparisons.ts` entry using the same standard as the published set. They intentionally aren't rendered as thin placeholder pages.

## Design system

Palette, type, and layout tokens live in `src/app/globals.css`. Both light and dark mode are defined (dark via `prefers-color-scheme`); there's no manual toggle yet. Brand colors: warm stone background, deep pine-green accent (`--accent`), Fraunces for headings, Public Sans for body text, IBM Plex Mono for scores/tags/dates.

## Architecture

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/categories/[slug]` | Topical hub — links to every best/review/compare/alternatives/guide page in that category |
| `/best/[slug]` | Ranked shortlist for a specific situation (includes the 3 category pillars) |
| `/reviews/[slug]` | Single-product review |
| `/compare/[slug]` | Head-to-head comparison |
| `/alternatives/[slug]` | "X alternatives" page |
| `/guides/[slug]` | Informational guide + FAQ |
| `/about`, `/methodology`, `/affiliate-disclosure`, `/privacy-policy`, `/terms`, `/contact` | Trust & legal pages |

`sitemap.xml` and `robots.txt` are generated from the same content data (`src/app/sitemap.ts`, `src/app/robots.ts`) — adding content updates them automatically.

## SEO implementation

- Every page has a unique, `generateMetadata`-driven title/description and self-referencing canonical.
- JSON-LD: `Organization` + `WebSite` sitewide, `BreadcrumbList` on every page, `Article` on reviews/comparisons/alternatives/guides, `ItemList` on best-for pages, `FAQPage` on guides. No `AggregateRating`/review-star schema is emitted anywhere — that requires a real, disclosed rating dataset, and using it without one is exactly the "fake schema" this project rules out.
- Affiliate links use `rel="sponsored noopener noreferrer" target="_blank"` via the single `AffiliateCTA` component — this is the only place an outbound product link is rendered, so the policy can't drift page-to-page.
- `not-found.tsx` returns a real 404 and surfaces the three category hubs, never a soft-redirect to the homepage.

## Search Console & Analytics setup

Not something that can be done from code — both require your own Google account. Steps:

1. **Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console) → Add property → Domain property for `suiteridge.com` (verify via DNS TXT record with your registrar) → once verified, submit `https://suiteridge.com/sitemap.xml` under Sitemaps.
2. **Google Analytics 4**: [analytics.google.com](https://analytics.google.com) → Admin → Create property → Web data stream for `https://suiteridge.com` → copy the Measurement ID (`G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_ID` in `.env.local` (copy from `.env.example`) to that ID and redeploy. `src/components/Analytics.tsx` only loads GA4 when this variable is present — no tracking code ships until you've actually created the property.
4. Link GSC and GA4 together in GA4's Admin → Search Console Links, so query data and on-site behavior show up in one place.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — every route is statically generated
npm run start    # serve the production build
npm run lint
```

## What's deliberately not here yet

- A manual light/dark theme toggle (system preference only, for now).
- Product logos/images (no product has vendor-supplied imagery yet — adding one only requires dropping an image into `public/` and referencing it from `products.ts`).
- The ~40 "briefed" articles in `briefs.ts` — see above.
- CRM, Accounting, and other Phase-2 categories from the Playbook (Months 7–9 per the roadmap).
