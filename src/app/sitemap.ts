import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LEGAL_READY } from "@/lib/legal";

// The marketing site currently has exactly one public route. Add real pages
// here as they ship — do not list URLs that do not exist.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // The legal pages are noindex until their placeholders are filled, and a
    // sitemap must never advertise a page that tells crawlers to go away.
    ...(LEGAL_READY
      ? (["/privacy", "/terms"] as const).map((path) => ({
          url: `${SITE_URL}${path}`,
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.3,
        }))
      : []),
  ];
}
