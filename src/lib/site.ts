/**
 * Production origin and outbound CTA destinations.
 *
 * The BillJi web app and app-store listings do not exist anywhere in this
 * repository, so their URLs are read from environment variables instead of
 * being hardcoded. See `.env.example` for the full list.
 *
 * Until `NEXT_PUBLIC_APP_URL` / `NEXT_PUBLIC_SIGNUP_URL` are set:
 *   - conversion CTAs fall back to the on-page pricing section
 *   - the "Sign in" link is not rendered at all, rather than pointing somewhere
 *     misleading
 */

/** Production origin, never with a trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://billji.app"
).replace(/\/$/, "");

/** BillJi application origin (sign in). Empty when not configured. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

/** Sign-up / get-started destination. Falls back to the app origin. */
export const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL ?? "";

/** Destination for every "Get BillJi Free" / plan CTA. */
export const CTA_HREF = SIGNUP_URL || APP_URL || "#pricing";

/** Destination for "Sign in". Empty string means "not configured — hide it". */
export const SIGN_IN_HREF = APP_URL;

export const SALES_EMAIL = "sales@billji.app";
export const SUPPORT_EMAIL = "support@billji.app";
