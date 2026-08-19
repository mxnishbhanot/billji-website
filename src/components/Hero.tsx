import { PhoneFrame, DashboardScreen } from "./PhoneMockup";
import { CTA_HREF } from "@/lib/site";

const stats = [
  { value: "50", label: "Free documents / month" },
  { value: "< 30s", label: "To create a GST invoice" },
  { value: "GSTR-1", label: "Ready exports" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-soft)_0%,_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Made for Indian businesses
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            GST billing that fits in your <span className="text-brand">pocket</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-muted">
            Create GST-compliant invoices in seconds, share them on WhatsApp,
            track payments and stock, and keep your books ready for filing —
            all from your phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CTA_HREF}
              className="rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-strong"
            >
              Start free — no card needed
            </a>
            <a
              href="#showcase"
              className="rounded-full border border-brand/25 px-8 py-3.5 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              See the app
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-brand">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -top-6 right-10 hidden rotate-3 rounded-2xl bg-card px-4 py-3 shadow-xl lg:block">
            <p className="text-xs font-bold text-accent">✓ Payment received</p>
            <p className="text-[11px] text-ink-muted">₹13,570 from Gupta Electronics</p>
          </div>
          <PhoneFrame className="rotate-[-2deg]">
            <DashboardScreen />
          </PhoneFrame>
          <div className="absolute -bottom-4 left-4 hidden -rotate-2 rounded-2xl bg-card px-4 py-3 shadow-xl lg:block">
            <p className="text-xs font-bold text-brand">📄 INV-2026-0143 shared</p>
            <p className="text-[11px] text-ink-muted">Sent via WhatsApp · PDF</p>
          </div>
        </div>
      </div>
    </section>
  );
}
