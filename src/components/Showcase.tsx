import {
  PhoneFrame,
  DashboardScreen,
  InvoiceScreen,
  ReportsScreen,
  GstScreen,
} from "./PhoneMockup";
import type { Content } from "@/lib/content";

/**
 * The mock screens, in the order `content.showcase.panels` describes them.
 * Kept out of the dictionaries because they are components, not copy — each
 * locale supplies that panel's heading, body and screen-reader label.
 */
const screens = [
  <DashboardScreen key="dashboard" />,
  <InvoiceScreen key="invoice" />,
  <ReportsScreen key="reports" />,
  <GstScreen key="gst" />,
];

export default function Showcase({ c }: { c: Content["showcase"] }) {
  return (
    <section id="showcase" className="bg-card py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{c.subhead}</p>
        </div>

        {/* One swipeable slide per screen on phones and tablets; alternating
            two-column rows from `lg` up. Same markup, no duplicated content. */}
        <div
          role="group"
          aria-label={c.groupLabel}
          tabIndex={0}
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:gap-6 sm:px-6 lg:mx-0 lg:mt-16 lg:block lg:space-y-16 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {c.panels.map((p, i) => (
            <div
              key={p.title}
              className={`flex w-full min-w-[300px] shrink-0 snap-center flex-col items-center gap-6 lg:w-auto lg:min-w-0 lg:shrink lg:snap-align-none lg:flex-row lg:gap-20 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="reveal flex-1 text-center lg:text-left">
                <div className="btn-cta mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold lg:mx-0 lg:h-10 lg:w-10">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:mt-4 lg:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base lg:mt-4 lg:max-w-md lg:text-lg">
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <PhoneFrame label={p.label}>{screens[i]}</PhoneFrame>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-ink-muted lg:hidden">
          {c.swipeHint} <span aria-hidden="true">→</span>
        </p>
      </div>
    </section>
  );
}
