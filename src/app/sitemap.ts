import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
  ];
}
