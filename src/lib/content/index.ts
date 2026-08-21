import { en } from "./en";
import { hi } from "./hi";

/**
 * Locale plumbing. No i18n library for two locales: one dictionary shape, with
 * `Content` derived from the English file, so a missing key in another locale
 * is a build error rather than a silent English fallback at runtime.
 *
 * English is the default and lives at `/`, not `/en` — the site's canonical
 * URLs, sitemap and existing search rankings were built against `/`, and a
 * redirect to `/en` would throw that away for no reader benefit.
 */

export const DEFAULT_LOCALE = "en" as const;

/** Every locale, default first. */
export const LOCALES = ["en", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

/** The shape every locale must supply. */
export type Content = typeof en;

const dictionaries: Record<Locale, Content> = { en, hi };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Resolve the `[[...lang]]` route segment to a locale.
 *
 * `undefined` (the bare `/` route) and `[]` both mean the default locale.
 * Anything else that is not a known locale returns null, which the page turns
 * into a 404 — without this, `/anything` would render the English homepage at
 * a junk URL and hand crawlers unlimited duplicate content.
 */
export function localeFromSegments(segments?: string[]): Locale | null {
  if (!segments || segments.length === 0) return DEFAULT_LOCALE;
  if (segments.length > 1) return null;
  const [first] = segments;
  // `/en` is not a second home for the default locale; only `/` is.
  if (first === DEFAULT_LOCALE) return null;
  return isLocale(first) ? first : null;
}

/**
 * Path prefix for a locale: "" for the default (so `/` keeps its URL) and
 * "/hi" for the rest. Always safe to concatenate.
 */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/**
 * Absolute-path href within a locale. `path` is the default-locale path, so
 * `localeHref("hi", "/")` is "/hi" and `localeHref("hi", "/#pricing")` is
 * "/hi#pricing".
 */
export function localeHref(locale: Locale, path = "/"): string {
  const prefix = localePrefix(locale);
  if (path === "/") return prefix || "/";
  if (path.startsWith("/#")) return `${prefix || ""}/${path.slice(1)}`;
  return `${prefix}${path}`;
}
