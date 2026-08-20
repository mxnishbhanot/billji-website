import Image from "next/image";
import Link from "next/link";
import { CTA_HREF, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";
import { LEGAL_READY } from "@/lib/legal";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#9B4000] px-5 py-12 text-center text-white sm:px-16 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
        <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
          Your next invoice could take 30 seconds
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-[#FFDBCB]">
          Join BillJi free today — 200 documents a month, unlimited customers
          and products, and GST handled for you. Pro and Business come with a
          14-day free trial.
        </p>
        <div className="relative mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={CTA_HREF}
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#9B4000] shadow-xl transition hover:bg-[#FFE8DA]"
          >
            Get BillJi Free
          </a>
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="rounded-full border border-white/40 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="BillJi" width={28} height={28} />
          <span className="text-lg font-extrabold">
            Bill<span className="text-brand">Ji</span>
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
          <a href="#features" className="hover:text-brand">Features</a>
          <a href="#showcase" className="hover:text-brand">The App</a>
          <a href="#pricing" className="hover:text-brand">Pricing</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-brand">Support</a>
          {/* Withheld until src/lib/legal.ts is filled in — see LEGAL_READY. */}
          {LEGAL_READY && (
            <>
              <Link href="/privacy" className="hover:text-brand">Privacy</Link>
              <Link href="/terms" className="hover:text-brand">Terms</Link>
            </>
          )}
        </nav>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} BillJi. Made in India 🇮🇳
        </p>
      </div>
    </footer>
  );
}
