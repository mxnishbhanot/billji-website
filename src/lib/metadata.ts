import type { Metadata } from "next";
import { SITE_URL } from "./site";
import { LOCALES, getContent, localeHref, type Locale } from "./content";

/**
 * Homepage metadata for one locale.
 *
 * Shared by every locale's root layout so the canonical URL, the `hreflang`
 * set and the Open Graph locale can never drift apart between them. Adding a
 * locale to `LOCALES` extends the `alternates.languages` map automatically.
 */
export function homeMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  const path = localeHref(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    keywords:
      locale === "hi"
        ? [
            "GST बिलिंग ऐप",
            "इनवॉइस ऐप",
            "GST इनवॉइस",
            "बिलिंग सॉफ़्टवेयर",
            "WhatsApp इनवॉइस",
            "GSTR-1 एक्सपोर्ट",
            "ऑफ़लाइन बिलिंग ऐप",
            "डिलीवरी चालान ऐप",
          ]
        : [
            "GST billing app",
            "invoice app India",
            "GST invoice",
            "billing software",
            "WhatsApp invoice",
            "GSTR-1 export",
            "offline billing app",
            "delivery challan app",
          ],
    alternates: {
      // Keeps campaign parameters (?utm_source, ?gclid, ?fbclid) from becoming
      // the canonical URL.
      canonical: path,
      // Every locale points at every locale, itself included — that is what
      // Google requires for the set to be trusted. `x-default` sends an
      // unmatched language to English.
      languages: {
        ...Object.fromEntries(
          LOCALES.map((l) => [`${getContent(l).htmlLang}-IN`, localeHref(l)]),
        ),
        "x-default": localeHref("en"),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      type: "website",
      url: path,
      siteName: "BillJi",
      locale: c.ogLocale,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: c.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: ["/og-image.png"],
    },
  };
}
