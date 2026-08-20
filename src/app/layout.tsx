import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ANALYTICS_DOMAIN, ANALYTICS_ENABLED, ANALYTICS_SRC, SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "BillJi — GST Billing & Invoicing App for Indian Businesses";
const description =
  "Create GST-compliant invoices, quotations, challans and credit notes in seconds. Share on WhatsApp, track payments and stock, and export GSTR-1 and GSTR-3B — offline-first, from your phone. Free to start.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
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
    canonical: "/",
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
    title: "BillJi — GST Billing & Invoicing App",
    description:
      "GST invoices, WhatsApp sharing, payment tracking, inventory, reports and GSTR exports — offline-first, built for Indian small businesses.",
    type: "website",
    url: "/",
    siteName: "BillJi",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BillJi — GST billing that fits in your pocket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BillJi — GST Billing & Invoicing App",
    description:
      "GST invoices, WhatsApp sharing, payment tracking, inventory, reports and GSTR exports — offline-first, built for Indian small businesses.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    // --color-surface from globals.css, light and dark.
    { media: "(prefers-color-scheme: light)", color: "#FFF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#14100E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The inline script below adds `dark` to this element before React hydrates,
    // so the client's className intentionally differs from the server's. That is
    // the whole point of a pre-paint theme script — suppress the warning here
    // rather than accept a flash of the wrong theme on every load.
    <html
      lang="en-IN"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* Cookieless: no cookies, no cross-site identifier, so no consent
            gate is required. Renders only when both env vars are set. */}
        {ANALYTICS_ENABLED && (
          <script defer data-domain={ANALYTICS_DOMAIN} src={ANALYTICS_SRC} />
        )}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
