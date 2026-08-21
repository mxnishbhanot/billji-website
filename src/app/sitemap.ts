import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LEGAL_READY } from "@/lib/legal";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getContent,
  localeHref,
} from "@/lib/content";

// One entry per locale homepage, plus the legal pages once they are real.
// Do not list URLs that do not exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}${localeHref(locale)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      // The default locale is the primary entry point; the translations are
      // equal in content but not in traffic.
      priority: locale === DEFAULT_LOCALE ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [
            getContent(l).htmlLang,
            `${SITE_URL}${localeHref(l)}`,
          ]),
        ),
      },
    })),
    // The legal pages are noindex until their placeholders are filled, and a
    // sitemap must never advertise a page that tells crawlers to go away.
    // English-only, so they are not locale-prefixed.
    ...(LEGAL_READY
      ? (["/privacy", "/terms"] as const).map((path) => ({
          url: `${SITE_URL}${path}`,
          lastModified,
          changeFrequency: "yearly" as const,
          priority: 0.3,
        }))
      : []),
  ];
}
