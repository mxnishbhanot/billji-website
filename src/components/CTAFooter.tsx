import Image from "next/image";
import { CTA_HREF, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-[#2a14b4] px-6 py-16 text-center text-white sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
        <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
          Your next invoice could take 30 seconds
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-[#c3c0ff]">
          Join BillJi free today — 50 documents a month, unlimited customers and
          products, and GST handled for you.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CTA_HREF}
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#2a14b4] shadow-xl transition hover:bg-[#e3dfff]"
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
          <Image src="/icon.png" alt="BillJi" width={28} height={28} className="rounded-md" />
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
        </nav>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} BillJi. Made in India 🇮🇳
        </p>
      </div>
    </footer>
  );
}
