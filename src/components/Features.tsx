const features = [
  {
    icon: "🧾",
    title: "GST-compliant invoices",
    desc: "CGST, SGST and IGST calculated automatically from your customer's state. HSN codes, place of supply and tax breakdowns handled for you.",
  },
  {
    icon: "💬",
    title: "Share on WhatsApp",
    desc: "Generate a polished PDF and send it to your customer on WhatsApp or email in one tap — with a public link they can open anywhere.",
  },
  {
    icon: "💰",
    title: "Payments & reminders",
    desc: "Record full or partial payments, track outstanding dues per customer, and let BillJi send automatic payment reminders for overdue invoices.",
  },
  {
    icon: "📦",
    title: "Inventory that keeps up",
    desc: "Stock updates automatically with every sale and purchase. Low-stock alerts, barcode scanning and a full movement history per product.",
  },
  {
    icon: "📊",
    title: "Reports & GST returns",
    desc: "Sales, purchases, expenses and ledger reports at a glance. Export GSTR-ready data when it's time to file — no spreadsheet gymnastics.",
  },
  {
    icon: "👥",
    title: "Teams, roles & audit logs",
    desc: "Invite your accountant and staff with exactly the permissions they need. Every action is logged so you always know who did what.",
  },
  {
    icon: "📱",
    title: "Works offline",
    desc: "Spotty network at the shop? Keep browsing your data and drafts offline — BillJi syncs the moment you're back online.",
  },
  {
    icon: "🔒",
    title: "Bank-grade security",
    desc: "Two-factor authentication, trusted devices, encrypted sessions and role-based access keep your business data safe.",
  },
  {
    icon: "🏢",
    title: "Multi-business ready",
    desc: "Run more than one firm? Switch between businesses in a tap, each with its own team, catalog, invoices and books.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Features</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything a growing business needs to bill, collect & comply
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          From your first invoice to your GST filing — BillJi covers the whole
          journey without the complexity of desktop accounting software.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-2xl">
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
