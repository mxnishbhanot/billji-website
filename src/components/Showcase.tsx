import { PhoneFrame, InvoiceScreen, ReportsScreen, DashboardScreen } from "./PhoneMockup";

const panels = [
  {
    title: "A dashboard that talks business",
    desc: "Sales trends, pending dues and recent activity the moment you open the app. Know exactly where your business stands today.",
    screen: <DashboardScreen />,
  },
  {
    title: "Invoices in under 30 seconds",
    desc: "Pick a customer, add items (or scan a barcode), and BillJi handles GST math, numbering and the PDF. Share on WhatsApp instantly.",
    screen: <InvoiceScreen />,
  },
  {
    title: "GST filing without the panic",
    desc: "GSTR-ready summaries build themselves as you bill. When filing day comes, export clean CSVs your CA will love.",
    screen: <ReportsScreen />,
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">The App</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Designed for the counter, not the back office
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            BillJi runs on the phone already in your pocket — Android, iOS and web.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {panels.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-20 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <PhoneFrame>{p.screen}</PhoneFrame>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
