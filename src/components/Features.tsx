import { SWIPE_ITEM, SwipeGrid, SwipeHint } from "./SwipeGrid";

const features = [
  {
    icon: "🧾",
    title: "Every sales document, one flow",
    desc: "Tax invoices, quotations, delivery challans and credit notes from the same builder. Quotes and challans convert to an invoice in a tap; credit notes are raised against the original bill with per-line return quantities.",
  },
  {
    icon: "🇮🇳",
    title: "GST that works itself out",
    desc: "CGST + SGST for intra-state, IGST for inter-state, decided from your customer's GSTIN and place of supply. Per-line tax rates, HSN codes, cess and reverse charge — with your own numbering series per document type.",
  },
  {
    icon: "💬",
    title: "Share on WhatsApp in one tap",
    desc: "BillJi renders the PDF from the same template you see on screen and hands it to WhatsApp, email or your share sheet — plus a public link your customer can open without installing anything.",
  },
  {
    icon: "💰",
    title: "Payments, dues & customer credit",
    desc: "Record full or partial payments in cash, UPI, bank transfer, card, cheque or wallet. Outstanding balance stays live per customer, and an overpayment becomes credit that is used oldest-first on their next bill.",
  },
  {
    icon: "📣",
    title: "Reminders that actually get sent",
    desc: "One screen lists everyone due or overdue. Pick the customers, and BillJi opens a pre-filled WhatsApp chat for each in turn — with your own reminder wording if you want it.",
  },
  {
    icon: "📦",
    title: "Stock that keeps up with the counter",
    desc: "Every invoice, challan, credit note and purchase moves stock automatically, with a full movement history per product. Scan a barcode straight onto a bill, and get low-stock and negative-stock alerts.",
  },
  {
    icon: "📋",
    title: "Orders before invoices",
    desc: "Plan a sale as an order, track it through confirmed, fulfilled or cancelled with its own payment and delivery status, then invoice it when the goods actually go out.",
  },
  {
    icon: "🏷️",
    title: "Money going out, too",
    desc: "Log expenses by category, record purchase bills against vendors, and pay them down. Cost of goods, gross profit and expenses land in the profit & loss view without a spreadsheet.",
  },
  {
    icon: "📊",
    title: "Reports that answer questions",
    desc: "How much did I sell? How much did I collect? Am I making money? Who owes me money? What's performing well? Each is its own card, with a sales trend, collections by payment method and top products and customers.",
  },
  {
    icon: "🗂️",
    title: "GSTR-1 & GSTR-3B, ready to file",
    desc: "Pick a month and BillJi builds GSTR-1 with its B2B, B2CL, B2CS and HSN sections plus a GSTR-3B outward-supplies summary. Download each as a CSV and send it straight to your CA.",
  },
  {
    icon: "📱",
    title: "Offline-first, not offline-ish",
    desc: "Your data lives in an encrypted database on the phone, so you can bill and take payment with no signal at all. Invoice numbers are reserved per device so they never collide, and everything syncs — with conflict resolution — when you reconnect.",
  },
  {
    icon: "👥",
    title: "Teams, roles & audit logs",
    desc: "Five built-in roles from owner to viewer, or custom roles you assemble permission by permission. Invite your accountant and staff, and see exactly who did what in the activity log.",
  },
  {
    icon: "🔒",
    title: "Security built in",
    desc: "Two-factor authentication, trusted devices, session control and permission checks on every action. Your local copy is encrypted on the device, and backups run automatically.",
  },
  {
    icon: "🏢",
    title: "Multi-business ready",
    desc: "Run more than one firm on the Business plan — switch between them in a tap, each with its own team, catalog, numbering, books and GST identity.",
  },
  {
    icon: "🎨",
    title: "Your invoice, your branding",
    desc: "Add your logo, pick the accent colour, toggle the signature line, notes and payment rows, and preview the exact A4 page BillJi will print — with the \"Powered by BillJi\" footer removed on Pro and above.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Features</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything a growing business needs to bill, collect &amp; comply
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          From your first quotation to your GST return — BillJi covers the whole
          journey without the complexity of desktop accounting software.
        </p>
      </div>

      <SwipeGrid
        label="BillJi features"
        cols="md:grid-cols-2 lg:grid-cols-3"
        className="mt-12 md:mt-14 md:gap-6"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className={`${SWIPE_ITEM} rounded-2xl border border-border bg-card p-5 shadow-sm transition sm:p-6 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-brand/10`}
          >
            <div
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-2xl sm:h-12 sm:w-12"
            >
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
          </div>
        ))}
      </SwipeGrid>
      <SwipeHint label="Swipe through all 15 features" />
    </section>
  );
}
