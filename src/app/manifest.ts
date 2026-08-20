import type { MetadataRoute } from "next";

/**
 * Web app manifest — what a browser reads when someone adds the site to their
 * home screen, and what Android uses for the install prompt and task-switcher
 * label.
 *
 * `display: "browser"` on purpose: this is a marketing site, not the app. A
 * standalone window would strip the URL bar and imply the visitor had installed
 * BillJi itself, which they haven't.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BillJi — GST Billing & Invoicing",
    short_name: "BillJi",
    description:
      "GST-compliant invoices, WhatsApp sharing, payments, inventory and GSTR exports for Indian businesses.",
    start_url: "/",
    display: "browser",
    lang: "en-IN",
    // Matches --color-surface / themeColor in layout.tsx.
    background_color: "#FFF8F5",
    theme_color: "#FFF8F5",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
