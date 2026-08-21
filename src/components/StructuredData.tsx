import { plans } from "@/lib/plans";
import { SALES_EMAIL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { localeHref, type Content, type Locale } from "@/lib/content";

/**
 * JSON-LD for the homepage. Every value below is taken from content that is
 * actually rendered on the page — no ratings, reviews, social profiles,
 * addresses or phone numbers are invented.
 *
 * Per-locale: the FAQ answers, the app description and `inLanguage` all come
 * from the dictionary being rendered, and the page-level `@id`s are scoped to
 * the locale's URL so `/` and `/hi` describe two pages rather than colliding on
 * one. The Organization and the app itself are single entities across locales,
 * so those keep a locale-free `@id`.
 */
export default function StructuredData({
  c,
  locale,
}: {
  c: Content;
  locale: Locale;
}) {
  const pageUrl = `${SITE_URL}${localeHref(locale)}`;

  // Only plans with a real published price become offers. Enterprise is
  // quote-based and therefore has no Offer.
  const offers = plans
    .filter((p) => !p.custom && p.monthly !== null)
    .flatMap((p) => {
      const name = c.pricing.plans[p.key].name;
      const monthly = {
        "@type": "Offer",
        name: `${name} (monthly)`,
        price: String(p.monthly),
        priceCurrency: "INR",
        category: "monthly",
      };
      if (p.yearly === null || p.yearly === p.monthly) return [monthly];
      return [
        monthly,
        {
          "@type": "Offer",
          name: `${name} (yearly)`,
          price: String(p.yearly),
          priceCurrency: "INR",
          category: "annual",
        },
      ];
    });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "BillJi",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SALES_EMAIL,
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SUPPORT_EMAIL,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        name: "BillJi",
        url: pageUrl,
        inLanguage: `${c.htmlLang}-IN`,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "BillJi",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, Web",
        url: pageUrl,
        inLanguage: `${c.htmlLang}-IN`,
        description: c.meta.description,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: `${c.htmlLang}-IN`,
        mainEntity: c.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
