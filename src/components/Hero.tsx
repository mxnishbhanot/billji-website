import { PhoneFrame, DashboardScreen } from "./PhoneMockup";
import { CTA_HREF } from "@/lib/site";

const stats = [
  { value: "200", label: "Free documents / month" },
  { value: "< 30s", label: "To create a GST invoice" },
  { value: "Offline", label: "Bill with no signal" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-soft)_0%,_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:pt-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Made for Indian businesses
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            GST billing that fits in your <span className="text-brand">pocket</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-muted">
            Invoices, quotations, challans and credit notes in seconds. Share on
            WhatsApp, track payments and stock, and export GSTR-1 when it&apos;s
            time to file — from your phone, with or without a network.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={CTA_HREF}
              className="btn-cta rounded-full px-8 py-3.5 text-center text-base font-bold shadow-xl shadow-brand/30 transition"
            >
              Start free — no card needed
            </a>
            <a
              href="#showcase"
              className="rounded-full border border-brand/25 px-8 py-3.5 text-center text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              See the app
            </a>
          </div>

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 sm:mt-12 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-brand">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute top-4 left-0 z-10 hidden rotate-3 rounded-2xl bg-card px-4 py-3 shadow-xl xl:block">
            <p className="text-xs font-bold text-accent">✓ Payment received</p>
            <p className="text-[11px] text-ink-muted">₹13,570 from Gupta Electronics · UPI</p>
          </div>
          <PhoneFrame
            label="The BillJi dashboard on a phone: today's collection of ₹18,450 on a receipt-style card, live metrics for the month, invoices and pending dues, and a banner prompting WhatsApp payment reminders."
            className="rotate-[-2deg]"
          >
            <DashboardScreen />
          </PhoneFrame>
          <div className="absolute bottom-8 left-0 z-10 hidden -rotate-2 rounded-2xl bg-card px-4 py-3 shadow-xl xl:block">
            <p className="text-xs font-bold text-brand">📄 INV-2026-0143 shared</p>
            <p className="text-[11px] text-ink-muted">Sent via WhatsApp · PDF + link</p>
          </div>
        </div>
      </div>
    </section>
  );
}
