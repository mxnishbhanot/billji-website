import type { NextConfig } from "next";

/**
 * Response headers for every route.
 *
 * On `script-src 'unsafe-inline'`: the App Router streams its RSC payload as a
 * series of inline `<script>self.__next_f.push(...)</script>` tags whose content
 * differs per render, so they can be neither hashed nor removed. Nonces are the
 * only alternative, and a nonce must be minted per request — which forces this
 * statically prerendered page to render dynamically on every hit. That trade is
 * a product decision, not a config detail, so it stays unmade here.
 *
 * What the rest of the policy still buys, with `unsafe-inline` present:
 *   - `object-src 'none'`      no Flash/PDF plugin embedding
 *   - `base-uri 'self'`        an injected <base> cannot re-point every relative URL
 *   - `form-action 'self'`     an injected form cannot post credentials off-site
 *   - `frame-ancestors 'none'` no clickjacking (also X-Frame-Options, for older UAs)
 *   - `default-src 'self'`     no loading scripts, styles or frames from other origins
 * So it is meaningfully narrower than no policy, while being honest that it does
 * not stop inline injection.
 */
const isDev = process.env.NODE_ENV === "development";

/**
 * Origin of the cookieless analytics script, if one is configured. Derived from
 * the same env var the layout renders, so the policy can never drift out of
 * step with the script tag it has to allow.
 */
const analyticsOrigin = (() => {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SRC;
  if (!src) return "";
  try {
    return new URL(src).origin;
  } catch {
    // A relative/self-hosted path needs no allowance beyond 'self'.
    return "";
  }
})();

const allow = (...values: string[]) => values.filter(Boolean).join(" ");

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  // 'unsafe-eval' is dev-only: Turbopack and React Refresh evaluate modules.
  allow("script-src 'self' 'unsafe-inline'", isDev ? "'unsafe-eval'" : "", analyticsOrigin),
  // Tailwind emits real stylesheets, but React still writes inline `style`
  // attributes (the mockup palettes, the sparkline widths).
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  // ws: is the dev HMR socket; it is absent from the production policy.
  // Analytics scripts POST their events back to their own origin.
  allow("connect-src 'self'", isDev ? "ws: wss:" : "", analyticsOrigin),
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "frame-src 'none'",
  "media-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Stop browsers guessing a different content type than the one we sent.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Never let this site be framed — there is no legitimate embedder.
  { key: "X-Frame-Options", value: "DENY" },
  // Send the origin to other sites, the full URL to our own: keeps campaign
  // parameters out of third-party referrer logs.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site asks for none of these, so deny them up front.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // HTTPS only, including subdomains. Harmless in dev (browsers ignore it on
  // http://localhost) and required for the HSTS preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Trailing slashes create a second URL for every page; the canonical tag
  // already points at the non-slash form, so redirect rather than serve both.
  trailingSlash: false,
  // Drops the `X-Powered-By: Next.js` version fingerprint.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
