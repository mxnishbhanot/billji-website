import { faqs } from "@/lib/faqs";
import { plans } from "@/lib/plans";
import { SALES_EMAIL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

/**
 * JSON-LD for the homepage. Every value below is taken from content that is
 * actually rendered on the page — no ratings, reviews, social profiles,
 * addresses or phone numbers are invented.
 */

// Only plans with a real published price become offers. Enterprise is
// quote-based and therefore has no Offer.
const offers = plans
  .filter((p) => !p.custom && p.monthly !== null)
  .flatMap((p) => {
    const monthly = {
      "@type": "Offer",
      name: `${p.name} (monthly)`,
      price: String(p.monthly),
      priceCurrency: "INR",
      category: "monthly",
    };
    if (p.yearly === null || p.yearly === p.monthly) return [monthly];
    return [
      monthly,
      {
        "@type": "Offer",
        name: `${p.name} (yearly)`,
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
      "@id": `${SITE_URL}/#website`,
      name: "BillJi",
      url: SITE_URL,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "BillJi",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS",
      url: SITE_URL,
      description:
        "Create GST-compliant invoices, quotations, challans and credit notes in seconds. Share on WhatsApp, track payments and stock, and export GSTR-1 and GSTR-3B — offline-first, from your phone.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
