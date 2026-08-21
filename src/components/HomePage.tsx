import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { CTA, Footer } from "@/components/CTAFooter";
import StructuredData from "@/components/StructuredData";
import { getContent, type Locale } from "@/lib/content";

/**
 * The whole homepage, for one locale.
 *
 * Every locale's `page.tsx` is a one-line call to this, so the section order
 * and markup can only ever exist once — a locale can differ in its words, never
 * in its structure.
 */
export default function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <>
      <StructuredData c={c} locale={locale} />
      {/* First tab stop on the page: lets keyboard and screen-reader users jump
          the nav instead of walking it on every visit. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] btn-cta focus:rounded-full focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold"
      >
        {c.a11y.skipToContent}
      </a>
      <Navbar c={c} locale={locale} />
      <main id="main" className="flex-1">
        <Hero c={c.hero} />
        <TrustStrip c={c.trust} />
        <Features c={c.features} />
        <Showcase c={c.showcase} />
        <Pricing c={c.pricing} locale={locale} />
        <FAQ c={c.faq} />
        <CTA c={c.cta} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
