import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[270px] rounded-[2.4rem] border-[10px] border-[#14161f] bg-[#14161f] shadow-2xl shadow-brand/20 ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#14161f]" />
      <div className="h-[560px] overflow-hidden rounded-[1.8rem] bg-surface">
        {children}
      </div>
    </div>
  );
}

/* ---------- Screen: Dashboard ---------- */
export function DashboardScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 pt-9 text-[10px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-ink-muted">Good morning 👋</p>
          <p className="text-[13px] font-bold">Sharma Traders</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
          ST
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-brand p-3 text-white">
          <p className="text-[9px] opacity-80">This month&apos;s sales</p>
          <p className="text-[15px] font-bold">₹2,48,500</p>
          <p className="text-[8px] text-accent-soft">▲ 18% vs last month</p>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[9px] text-ink-muted">Pending dues</p>
          <p className="text-[15px] font-bold">₹36,200</p>
          <p className="text-[8px] text-warning">5 invoices overdue</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">Sales this week</p>
          <p className="text-[8px] text-ink-muted">Mon–Sun</p>
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[35, 55, 42, 70, 62, 88, 50].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t ${i === 5 ? "bg-brand" : "bg-brand-soft"}`}
            />
          ))}
        </div>
      </div>

      <p className="font-semibold">Recent invoices</p>
      {[
        { name: "Gupta Electronics", amt: "₹12,400", status: "Paid", ok: true },
        { name: "Mehta & Sons", amt: "₹8,150", status: "Due", ok: false },
        { name: "Verma Textiles", amt: "₹21,900", status: "Paid", ok: true },
      ].map((r) => (
        <div
          key={r.name}
          className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm"
        >
          <div>
            <p className="font-semibold">{r.name}</p>
            <p className="text-[8px] text-ink-muted">INV-2026-0142 · GST 18%</p>
          </div>
          <div className="text-right">
            <p className="font-bold">{r.amt}</p>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[7px] font-bold ${
                r.ok ? "bg-accent-soft text-accent" : "bg-warning-soft text-warning"
              }`}
            >
              {r.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Screen: Invoice builder ---------- */
export function InvoiceScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 pt-9 text-[10px]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold">New Invoice</p>
        <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[8px] font-bold text-brand">
          INV-2026-0143
        </span>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <p className="text-[8px] uppercase tracking-wide text-ink-muted">Bill to</p>
        <p className="text-[11px] font-bold">Gupta Electronics</p>
        <p className="text-[8px] text-ink-muted">GSTIN 07AABCU9603R1ZM · Delhi</p>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <p className="mb-2 text-[8px] uppercase tracking-wide text-ink-muted">Items</p>
        {[
          { n: "LED Bulb 9W (Pack of 10)", q: "4 × ₹850", t: "₹3,400" },
          { n: "Extension Board 6A", q: "10 × ₹320", t: "₹3,200" },
          { n: "Copper Wire 90m Roll", q: "2 × ₹2,450", t: "₹4,900" },
        ].map((it) => (
          <div key={it.n} className="flex items-center justify-between border-b border-surface-dim py-1.5 last:border-0">
            <div>
              <p className="font-semibold">{it.n}</p>
              <p className="text-[8px] text-ink-muted">{it.q} · HSN 8539</p>
            </div>
            <p className="font-bold">{it.t}</p>
          </div>
        ))}
        <button className="mt-2 w-full rounded-lg border border-dashed border-brand/40 py-1.5 text-[9px] font-semibold text-brand">
          + Add item · Scan barcode
        </button>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex justify-between text-ink-muted">
          <p>Subtotal</p>
          <p>₹11,500</p>
        </div>
        <div className="flex justify-between text-ink-muted">
          <p>CGST 9% + SGST 9%</p>
          <p>₹2,070</p>
        </div>
        <div className="mt-1 flex justify-between border-t border-surface-dim pt-1 text-[12px] font-bold">
          <p>Total</p>
          <p className="text-brand">₹13,570</p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2">
        <button className="rounded-full border border-brand/30 py-2 text-[10px] font-bold text-brand">
          Preview PDF
        </button>
        <button className="rounded-full bg-accent py-2 text-[10px] font-bold text-white">
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}

/* ---------- Screen: Reports / GST ---------- */
export function ReportsScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 pt-9 text-[10px]">
      <p className="text-[13px] font-bold">Reports & GST</p>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[8px] text-ink-muted">GST collected</p>
          <p className="text-[13px] font-bold">₹44,730</p>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[8px] text-ink-muted">Input credit</p>
          <p className="text-[13px] font-bold">₹18,210</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">GSTR-1 · July 2026</p>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[7px] font-bold text-accent">
            Ready
          </span>
        </div>
        {[
          ["B2B invoices", "128"],
          ["B2C (small)", "342"],
          ["Credit notes", "6"],
          ["Taxable value", "₹9,84,300"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-surface-dim py-1 last:border-0">
            <p className="text-ink-muted">{k}</p>
            <p className="font-semibold">{v}</p>
          </div>
        ))}
        <button className="mt-2 w-full rounded-lg bg-brand py-1.5 text-[9px] font-bold text-white">
          Export GSTR-1 CSV
        </button>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <p className="mb-2 font-semibold">Top products</p>
        {[
          ["Copper Wire 90m", 88],
          ["LED Bulb 9W", 64],
          ["Extension Board", 41],
        ].map(([n, w]) => (
          <div key={n as string} className="mb-1.5">
            <div className="mb-0.5 flex justify-between">
              <p>{n}</p>
              <p className="text-ink-muted">{w}%</p>
            </div>
            <div className="h-1.5 rounded-full bg-surface-dim">
              <div className="h-1.5 rounded-full bg-brand" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
