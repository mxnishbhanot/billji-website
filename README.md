# BillJi marketing site

The public marketing site for BillJi, a GST billing app for Indian businesses.
Next.js App Router, Tailwind CSS v4, statically prerendered.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Do not run `next build` while `next dev` is running. They share `.next`, and a
production build mid-session corrupts the dev server's artifacts, which shows up
as the browser reloading in a loop. Stop dev, `rm -rf .next`, then build.

## Where the content comes from

The site describes a real product, so the copy is not free-form. Plans, limits
and feature claims are derived from the backend, not written from memory:

- `src/lib/plans.ts` mirrors `PLAN_SEEDS` in `backend/src/constants/entitlements.js`.
  `legacy_pro` is intentionally absent; it is platform-assigned, not purchasable.
- `src/lib/content/en.ts` holds every string on the page — features, FAQ, plan
  bullets, alt text — and describes shipped modules only. Referrals exist in the
  mobile app but have no backend routes yet, so they are deliberately not
  advertised.
- Colour tokens in `src/app/globals.css` are copied verbatim from the app's
  `mobile/src/design-system/colors.ts`. The app is the source of truth for
  brand; do not invent values here.

When a plan limit or feature changes in the backend, update these files rather
than editing the surrounding prose.

### One colour gotcha

In dark mode the brand colour is a light peach, so `bg-brand` with white text is
unreadable. Primary buttons use the `.btn-cta` class instead, which applies the
app's CTA gradient — identical in both themes.

## Languages

English lives at `/` and Hindi at `/hi`. English keeps the bare path on purpose:
the canonical URLs, sitemap and existing rankings were all built against `/`, and
moving it to `/en` would throw that away.

- Every string is in `src/lib/content/<locale>.ts`. `Content` is derived from
  `en.ts`, so a missing or misspelled key in another locale is a build error, not
  a silent English fallback at runtime.
- `en.ts` is the source of truth for the shape. Add a string there first, then in
  every other locale.
- What is *not* translated, deliberately: plan prices and flags
  (`src/lib/plans.ts`), the legal pages (English-only while `LEGAL_READY` is
  false), the fake business data inside the phone mockups (that is the app's own
  UI, which is English), and the trust-strip figures and quotes
  (`src/lib/trust.ts` — a customer said what they said, and a rating is a number).
- GST vocabulary (GST, GSTIN, CGST, IGST, HSN, GSTR-1) and platform names
  (WhatsApp, Google Play, PDF, CSV, UPI) stay in Latin script in every locale,
  because that is how they appear on the portal and in the app.
- `hi.ts` has **not** been reviewed by a native speaker. Every factual claim
  matches `en.ts`, but get the phrasing read before advertising the locale.

Each locale needs its own `<html lang>`, and only a root layout may render
`<html>`, so each one is a route group with its own root layout —
`src/app/(en)/layout.tsx` and `src/app/(hi)/hi/layout.tsx`. Both are three-line
calls into `src/components/RootHtml.tsx`, and both pages are three-line calls
into `src/components/HomePage.tsx`, so the markup exists exactly once. Navigating
between locales is a full page load; that is inherent to multiple root layouts
and fine for a language switch.

To add a locale: add it to `LOCALES` in `src/lib/content/index.ts`, write its
dictionary, add a route group with a root layout and a page. The `hreflang` set,
the sitemap and the language switcher all read `LOCALES` and pick it up.

## Legal pages

`/privacy` and `/terms` are gated behind `LEGAL_READY` in `src/lib/legal.ts`,
which is currently `false`. While it is false both pages are `noindex, nofollow`,
absent from the sitemap, unlinked from the footer, and show a draft banner.

Before flipping it to `true`:

1. Replace the seven `{{PLACEHOLDER}}` values in `src/lib/legal.ts`.
2. Have a lawyer review both pages.

Flipping the flag enables indexing, the sitemap entries and the footer links
together.

Known gap: there is no account-deletion endpoint in the backend, so the privacy
policy says deletion is handled on request by email. This also blocks Play Store
compliance, which requires in-app account deletion.

## Environment

All variables are optional and documented in `.env.example`. Notable ones:

- `NEXT_PUBLIC_SITE_URL` — origin used for canonical URLs, Open Graph, robots
  and the sitemap. Defaults to `https://billji.app`.
- `NEXT_PUBLIC_APP_URL` / `NEXT_PUBLIC_SIGNUP_URL` — CTA destinations. While
  unset, conversion CTAs fall back to the on-page pricing section and the
  "Sign in" link is not rendered at all.
- `NEXT_PUBLIC_ANALYTICS_DOMAIN` / `NEXT_PUBLIC_ANALYTICS_SRC` — cookieless
  analytics (Plausible or Umami shape). Both must be set or no script is
  rendered and nothing is tracked. No consent banner is required, since neither
  sets a cookie or a cross-site identifier. `next.config.ts` derives the CSP
  `script-src` origin from `_SRC`, so the policy cannot drift from the tag.

## Security headers

`next.config.ts` sets a Content-Security-Policy plus HSTS, `X-Frame-Options`,
`X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`.

`script-src` keeps `'unsafe-inline'` on purpose: the App Router streams its RSC
payload as per-render inline `<script>` tags that cannot be hashed, and a nonce
would force every route to render dynamically. The rest of the policy still
closes off `object-src`, `base-uri`, `form-action` and `frame-ancestors`.

## Deploying

Vercel project `billji-web` (team Billji), connected to this repository with
`main` as the production branch, so merging to `main` deploys. To deploy by hand:

```bash
npx vercel --prod
```
