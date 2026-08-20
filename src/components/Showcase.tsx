import {
  PhoneFrame,
  DashboardScreen,
  InvoiceScreen,
  ReportsScreen,
  GstScreen,
} from "./PhoneMockup";

const panels = [
  {
    title: "The day's takings, first thing you see",
    desc: "A receipt-style card with today's collection, four live metrics with their own trend lines, and a banner that tells you how much is pending and who to chase. Tap anything to go straight to the filtered list behind it.",
    screen: <DashboardScreen />,
    label:
      "The BillJi dashboard: today's collection on a receipt-style card, four metric cards with trend lines, a pending-dues banner and quick actions.",
  },
  {
    title: "Invoices in under 30 seconds",
    desc: "Pick a customer, scan a barcode or search your catalog, and BillJi works out CGST/SGST or IGST per line, applies your numbering series and saves a draft as you type. Generate — or Generate & Receive to take the money in the same breath.",
    screen: <InvoiceScreen />,
    label:
      "The BillJi invoice builder: the customer being billed, a scan-barcode row, three line items with HSN codes, and a totals block splitting CGST and SGST.",
  },
  {
    title: "Reports that answer real questions",
    desc: "Not a wall of charts. How much did I sell, how much did I actually collect, am I making money, who owes me — each one its own card, with collections split by payment method and your top products and customers.",
    screen: <ReportsScreen />,
    label:
      "The BillJi reports screen: cards answering how much did I sell, how much did I collect, am I making money, and who owes me money.",
  },
  {
    title: "GST filing without the panic",
    desc: "Pick a month. BillJi builds GSTR-1 section by section — B2B, B2CL, B2CS, HSN — plus the GSTR-3B outward-supplies summary, and hands each one to you as a CSV your CA can use as-is.",
    screen: <GstScreen />,
    label:
      "The BillJi GST returns screen: July 2026 totals, then downloadable GSTR-1 sections for B2B, B2CL, B2CS and HSN, plus a GSTR-3B summary.",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-card py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">The App</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Designed for the counter, not the back office
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            BillJi is a native Android and iOS app that keeps working when the
            network doesn&apos;t.
          </p>
        </div>

        {/* One swipeable slide per screen on phones and tablets; alternating
            two-column rows from `lg` up. Same markup, no duplicated content. */}
        <div
          role="group"
          aria-label="BillJi app screens"
          tabIndex={0}
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:gap-6 sm:px-6 lg:mx-0 lg:mt-16 lg:block lg:space-y-16 lg:overflow-visible lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {panels.map((p, i) => (
            <div
              key={p.title}
              className={`flex w-full min-w-[300px] shrink-0 snap-center flex-col items-center gap-6 lg:w-auto lg:min-w-0 lg:shrink lg:snap-align-none lg:flex-row lg:gap-20 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 text-center lg:text-left">
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
                <PhoneFrame label={p.label}>{p.screen}</PhoneFrame>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-ink-muted lg:hidden">
          Swipe through the app <span aria-hidden="true">→</span>
        </p>
      </div>
    </section>
  );
}
