import { Plus_Jakarta_Sans } from "next/font/google";
import { ANALYTICS_DOMAIN, ANALYTICS_ENABLED, ANALYTICS_SRC } from "@/lib/site";
import { getContent, type Locale } from "@/lib/content";

/**
 * The `<html>` document, shared by every locale's root layout.
 *
 * Each locale needs its own `<html lang>`, and only a root layout may render
 * `<html>`. Next's answer to that is multiple root layouts (one per route
 * group), which would mean duplicating the font, the theme script and the
 * analytics tag per locale — so all of it lives here instead and each root
 * layout is a three-line call.
 */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    // The inline script below adds `dark` to this element before React hydrates,
    // so the client's className intentionally differs from the server's. That is
    // the whole point of a pre-paint theme script — suppress the warning here
    // rather than accept a flash of the wrong theme on every load.
    <html
      lang={`${getContent(locale).htmlLang}-IN`}
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* eslint-disable-next-line @next/next/no-head-element -- `next/head`
          is Pages Router only; the App Router's way to put a pre-paint script
          in the document head is to render <head> from the root layout, which
          is what this component is. The rule only skips this check for files
          literally named layout.tsx. */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* Cookieless: no cookies, no cross-site identifier, so no consent gate
            is required. Renders only when both env vars are set. */}
        {ANALYTICS_ENABLED && (
          <script defer data-domain={ANALYTICS_DOMAIN} src={ANALYTICS_SRC} />
        )}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
