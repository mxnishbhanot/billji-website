import type { ReactNode } from "react";

/**
 * In-app screen recreations.
 *
 * These are hand-built rather than captured PNGs so they stay crisp, load with
 * no extra bytes, and can be corrected in a diff when the app moves. They
 * mirror the app's real design system ("Warm Ledger" — see
 * `mobile/src/design-system/colors.ts`) rather than the website's brand palette:
 * a warm cream ground, burnt-orange primary, and the receipt/ticket motif the
 * dashboard hero actually uses.
 *
 * Palette values below are copied from `warmLedgerLight` verbatim. Do not
 * substitute the website's `--color-brand` tokens here — the point of these
 * blocks is to show the app as it is.
 */
const app = {
  bg: "#FFF8F5",
  card: "#FFFFFF",
  paper: "#FDF0E7",
  surface: "#FCF2EC",
  surfaceDim: "#E2D8D3",
  ink: "#1F1B18",
  inkMuted: "#6B5449",
  outline: "#8C7165",
  border: "#EFE1D8",
  primary: "#D95F18",
  primaryStrong: "#9B4000",
  primarySoft: "#FFE8DA",
  accent: "#2E9E6B",
  accentSoft: "#D8F3E6",
  warning: "#E0A02A",
  warningSoft: "#FFF1D6",
  pending: "#3E7BB8",
  pendingSoft: "#D9EAF8",
  destructive: "#C9534A",
  destructiveSoft: "#FFE0DC",
  violet: "#5E3FD3",
  violetSoft: "#E6DEFF",
} as const;

export function PhoneFrame({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  /**
   * What this screen shows, for screen readers. `role="img"` makes the frame a
   * single labelled image, so assistive tech announces this sentence instead of
   * reading the mock UI's ~40 fragments of fake business data as page content.
   */
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      // 290 outer, not 270: `box-sizing: border-box` means the 10px bezel eats
      // into the width, and the screens below are laid out against a 270px
      // viewport. At 270 outer the content was squeezed and clipped.
      className={`relative w-[290px] rounded-[2.4rem] border-[10px] border-[#241812] bg-[#241812] shadow-2xl shadow-[#9B4000]/25 ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#241812]" />
      <div
        className="h-[560px] overflow-hidden rounded-[1.8rem]"
        style={{ background: app.bg, color: app.ink }}
      >
        {children}
      </div>
    </div>
  );
}

/** The app header: business switcher on the left, sync + bell on the right. */
function AppBar({ title, initials = "ST" }: { title: string; initials?: string }) {
  return (
    <div className="flex items-center justify-between px-4 pt-8">
      <div className="flex items-center gap-2">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold"
          style={{ background: app.primarySoft, color: app.primaryStrong }}
        >
          {initials}
        </div>
        <div>
          <p className="text-[12px] font-bold leading-none">{title}</p>
          <p className="mt-1 text-[8px]" style={{ color: app.inkMuted }}>
            Sharma Traders · GST 07AABCU9603R1ZM
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span
          className="rounded-full px-1.5 py-0.5 text-[7px] font-bold"
          style={{ background: app.accentSoft, color: app.accent }}
        >
          Synced
        </span>
        <span className="text-[11px]" style={{ color: app.outline }}>
          🔔
        </span>
      </div>
    </div>
  );
}

/** Bottom tab bar — Home, Invoices, Inventory, Customers, More. */
function TabBar({ active }: { active: string }) {
  const tabs = [
    { key: "Home", icon: "⌂" },
    { key: "Invoices", icon: "🧾" },
    { key: "Inventory", icon: "▣" },
    { key: "Customers", icon: "☺" },
    { key: "More", icon: "⋯" },
  ];
  return (
    <div
      className="mt-auto flex items-center justify-between border-t px-3 pb-3 pt-2"
      style={{ borderColor: app.border, background: app.card }}
    >
      {tabs.map((t) => {
        const on = t.key === active;
        return (
          <div key={t.key} className="flex flex-1 flex-col items-center gap-0.5">
            <span
              className="text-[11px] leading-none"
              style={{ color: on ? app.primary : app.outline }}
            >
              {t.icon}
            </span>
            <span
              className="text-[7px] font-semibold"
              style={{ color: on ? app.primary : app.inkMuted }}
            >
              {t.key}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Screen 1: Dashboard ---------- */
/** Mirrors DashboardScreen: receipt hero + stat stub, metric rail, quick actions. */
export function DashboardScreen() {
  const metrics = [
    { label: "TODAY", value: "₹18,450", hint: "Collected today", tint: app.accent },
    { label: "THIS MONTH", value: "₹2,48,500", hint: "Collected", tint: app.violet },
    { label: "INVOICES", value: "412", hint: "All time", tint: app.primary },
    { label: "PENDING", value: "7", hint: "Need follow-up", tint: app.pending },
  ];
  const stub = [
    { label: "Invoices", value: "412", tint: app.primary },
    { label: "Customers", value: "186", tint: app.violet },
    { label: "Products", value: "94", tint: app.accent },
    { label: "Pending", value: "7", tint: app.primary },
  ];
  const quick = [
    { title: "Invoices", tint: app.primary },
    { title: "Expenses", tint: app.primary },
    { title: "Products", tint: app.accent },
    { title: "Reports", tint: app.violet },
  ];

  return (
    <div className="flex h-full flex-col text-[10px]">
      <AppBar title="Dashboard" />

      <div className="flex-1 space-y-2 overflow-hidden px-3 pt-2.5">
        {/* Hero: the ticket/receipt card, perforated stub on the right. */}
        <div
          className="flex overflow-hidden rounded-2xl shadow-sm"
          style={{ border: `1px solid ${app.border}` }}
        >
          <div className="flex-1 p-3" style={{ background: app.paper }}>
            <p className="text-[9px] font-bold" style={{ color: app.primaryStrong }}>
              Today&apos;s collection
            </p>
            <p className="mt-0.5 text-[21px] font-extrabold leading-tight tracking-tight">
              ₹18,450
            </p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: app.warning }}
              />
              <span className="text-[8px] font-bold">Follow up</span>
              <span className="text-[8px]" style={{ color: app.inkMuted }}>
                · ₹18,450 in today
              </span>
            </div>
            <div
              className="my-2 border-t border-dashed"
              style={{ borderColor: `${app.primaryStrong}38` }}
            />
            <div
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[9px] font-bold text-white"
              style={{ background: `linear-gradient(90deg, #F97B3D, #E4661F)` }}
            >
              <span
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[9px]"
                style={{ color: app.primaryStrong }}
              >
                +
              </span>
              Create Invoice
            </div>
          </div>

          {/* Perforation seam between receipt and stub. */}
          <div
            className="w-px border-l border-dashed"
            style={{ borderColor: `${app.outline}66` }}
          />

          <div className="w-[98px] py-1.5" style={{ background: app.card }}>
            {stub.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-1.5 px-2 py-[5px] ${
                  i > 0 ? "border-t border-dashed" : ""
                }`}
                style={i > 0 ? { borderColor: `${app.outline}44` } : undefined}
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-md"
                  style={{ background: `${s.tint}24` }}
                />
                <span className="flex-1 truncate text-[7.5px] font-semibold">
                  {s.label}
                </span>
                <span className="text-[8px] font-bold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metric cards, each with its own sparkline. */}
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className="rounded-xl p-2"
              style={{ background: app.card, border: `1px solid ${app.border}` }}
            >
              <div className="flex items-center justify-between">
                <p
                  className="text-[6.5px] font-extrabold tracking-widest"
                  style={{ color: app.inkMuted }}
                >
                  {m.label}
                </p>
                <span
                  className="h-3 w-3 rounded-md"
                  style={{ background: `${m.tint}22` }}
                />
              </div>
              <p className="mt-0.5 text-[12px] font-extrabold">{m.value}</p>
              <p className="text-[6.5px]" style={{ color: app.inkMuted }}>
                {m.hint}
              </p>
              <svg viewBox="0 0 60 14" className="mt-0.5 h-2.5 w-full">
                <polyline
                  fill="none"
                  stroke={m.tint}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  points={
                    [
                      "0,11 10,8 20,9 30,4 40,6 50,2 60,3",
                      "0,9 10,10 20,6 30,7 40,3 50,5 60,2",
                      "0,12 10,9 20,10 30,6 40,7 50,4 60,5",
                      "0,4 10,6 20,5 30,8 40,7 50,9 60,6",
                    ][idx]
                  }
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Dues banner. */}
        <div
          className="flex items-center gap-2 rounded-xl p-2"
          style={{
            background: `${app.destructive}12`,
            border: `1px solid ${app.destructive}2e`,
          }}
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md text-[9px]"
            style={{ background: `${app.destructive}24`, color: app.destructive }}
          >
            !
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-bold" style={{ color: app.destructive }}>
              ₹36,200 pending
            </p>
            <p className="truncate text-[7px]" style={{ color: app.inkMuted }}>
              5 customers to chase · tap to send WhatsApp reminders
            </p>
          </div>
        </div>

        {/* Quick actions. */}
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-md text-[8px]"
              style={{ background: `${app.primary}1a`, color: app.primary }}
            >
              ⚡
            </span>
            <p className="text-[10px] font-bold">Quick actions</p>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {quick.map((q) => (
              <div
                key={q.title}
                className="rounded-xl px-1 py-1.5 text-center"
                style={{ background: app.card, border: `1px solid ${app.border}` }}
              >
                <span
                  className="mx-auto block h-4 w-4 rounded-md"
                  style={{ background: `${q.tint}22` }}
                />
                <p className="mt-1 truncate text-[7px] font-bold">{q.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="Home" />
    </div>
  );
}

/* ---------- Screen 2: Invoice builder ---------- */
/** Mirrors InvoiceBuilderScreen: draft indicator, customer card, scan row, items, totals. */
export function InvoiceScreen() {
  return (
    <div className="flex h-full flex-col text-[10px]">
      <div className="flex items-center justify-between px-4 pt-8">
        <p className="text-[13px] font-bold">New Invoice</p>
        <span
          className="rounded-full px-2 py-0.5 text-[7px] font-bold"
          style={{ background: app.accentSoft, color: app.accent }}
        >
          Draft saved
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-3 pt-2.5">
        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="text-[7px] font-bold uppercase tracking-wide" style={{ color: app.inkMuted }}>
            Bill to
          </p>
          <p className="text-[11px] font-bold">Gupta Electronics</p>
          <p className="text-[7.5px]" style={{ color: app.inkMuted }}>
            GSTIN 07AABCU9603R1ZM · Delhi · Intra-state
          </p>
        </div>

        {/* Scan straight onto the bill — the fastest path at a counter. */}
        <div
          className="flex items-center justify-center gap-1.5 rounded-xl py-2 text-[9px] font-bold"
          style={{
            background: `${app.primary}14`,
            border: `1px solid ${app.primary}2e`,
            color: app.primary,
          }}
        >
          <span>⛶</span> Scan barcode
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="mb-1.5 text-[7px] font-bold uppercase tracking-wide" style={{ color: app.inkMuted }}>
            Items · 3
          </p>
          {[
            { n: "LED Bulb 9W (Pack of 10)", q: "4 × ₹850", hsn: "HSN 8539 · 18%", t: "₹3,400" },
            { n: "Extension Board 6A", q: "10 × ₹320", hsn: "HSN 8536 · 18%", t: "₹3,200" },
            { n: "Copper Wire 90m Roll", q: "2 × ₹2,450", hsn: "HSN 8544 · 18%", t: "₹4,900" },
          ].map((it, i) => (
            <div
              key={it.n}
              className={`flex items-center justify-between py-1.5 ${i > 0 ? "border-t" : ""}`}
              style={i > 0 ? { borderColor: app.surface } : undefined}
            >
              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold">{it.n}</p>
                <p className="text-[7px]" style={{ color: app.inkMuted }}>
                  {it.q} · {it.hsn}
                </p>
              </div>
              <p className="text-[9.5px] font-bold">{it.t}</p>
            </div>
          ))}
          <div
            className="mt-1.5 rounded-lg py-1.5 text-center text-[8.5px] font-semibold"
            style={{ border: `1px dashed ${app.primary}66`, color: app.primary }}
          >
            + Add product or custom item
          </div>
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          {[
            ["Subtotal", "₹11,500"],
            ["Discount", "− ₹0"],
            ["CGST 9%", "₹1,035"],
            ["SGST 9%", "₹1,035"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[8.5px]" style={{ color: app.inkMuted }}>
              <p>{k}</p>
              <p>{v}</p>
            </div>
          ))}
          <div
            className="mt-1 flex justify-between border-t pt-1 text-[11.5px] font-extrabold"
            style={{ borderColor: app.surfaceDim }}
          >
            <p>Total</p>
            <p style={{ color: app.primary }}>₹13,570</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div
            className="rounded-full py-2 text-center text-[9.5px] font-bold"
            style={{ border: `1px solid ${app.primary}55`, color: app.primary }}
          >
            Preview
          </div>
          <div
            className="rounded-full py-2 text-center text-[9.5px] font-bold text-white"
            style={{ background: "linear-gradient(90deg, #F97B3D, #E4661F)" }}
          >
            Generate invoice
          </div>
        </div>
        <div
          className="rounded-full py-2 text-center text-[9.5px] font-bold"
          style={{ border: `1px solid ${app.accent}66`, color: app.accent }}
        >
          ✓ Generate &amp; Receive payment
        </div>
      </div>
    </div>
  );
}

/* ---------- Screen 3: Reports ---------- */
/** Mirrors ReportsScreen: question-led section cards over a period switcher. */
export function ReportsScreen() {
  return (
    <div className="flex h-full flex-col text-[10px]">
      <AppBar title="Reports" />

      <div className="flex-1 space-y-2 overflow-hidden px-3 pt-3">
        <div className="flex gap-1.5">
          {["Today", "Week", "Month"].map((p) => (
            <span
              key={p}
              className="rounded-full px-2.5 py-1 text-[8px] font-bold"
              style={
                p === "Month"
                  ? { background: app.primary, color: "#FFFFFF" }
                  : { background: app.card, border: `1px solid ${app.border}`, color: app.inkMuted }
              }
            >
              {p}
            </span>
          ))}
          <span
            className="ml-auto rounded-full px-2.5 py-1 text-[8px] font-bold"
            style={{ background: app.violetSoft, color: app.violet }}
          >
            GST returns →
          </span>
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="text-[9.5px] font-bold">How much did I sell?</p>
          <p className="text-[7px]" style={{ color: app.inkMuted }}>
            Invoiced amount you billed
          </p>
          <p className="mt-1 text-[17px] font-extrabold">₹9,84,300</p>
          <div className="mt-1.5 flex h-8 items-end gap-1">
            {[38, 55, 44, 72, 60, 88, 52, 66].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? app.primary : `${app.primary}33`,
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="text-[9.5px] font-bold">How much did I collect?</p>
          <p className="text-[7px]" style={{ color: app.inkMuted }}>
            Actual payments received
          </p>
          {[
            // Two methods, not all six: a third row pushes the last card behind
            // the tab bar. The full list lives in the Features copy instead.
            ["Cash", "₹3,12,400", 62],
            ["UPI", "₹4,08,900", 81],
          ].map(([n, v, w]) => (
            <div key={n as string} className="mt-1.5">
              <div className="flex justify-between text-[8px]">
                <p className="font-semibold">{n}</p>
                <p style={{ color: app.inkMuted }}>{v}</p>
              </div>
              <div className="mt-0.5 h-1 rounded-full" style={{ background: app.surface }}>
                <div
                  className="h-1 rounded-full"
                  style={{ width: `${w}%`, background: app.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="text-[9.5px] font-bold">Am I making money?</p>
          {[
            ["Revenue", "₹9,84,300"],
            ["Cost of goods", "− ₹6,10,200"],
            ["Expenses (24)", "− ₹84,600"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5 text-[8.5px]" style={{ color: app.inkMuted }}>
              <p>{k}</p>
              <p>{v}</p>
            </div>
          ))}
          <div
            className="mt-1 flex justify-between border-t pt-1 text-[10.5px] font-extrabold"
            style={{ borderColor: app.surfaceDim }}
          >
            <p>Gross profit</p>
            <p style={{ color: app.accent }}>₹2,89,500</p>
          </div>
        </div>

        <div
          className="flex items-center justify-between rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <div>
            <p className="text-[9.5px] font-bold">Who owes me money?</p>
            <p className="text-[7px]" style={{ color: app.inkMuted }}>
              5 customers · oldest 12d overdue
            </p>
          </div>
          <p className="text-[11px] font-extrabold" style={{ color: app.destructive }}>
            ₹36,200
          </p>
        </div>
      </div>

      <TabBar active="More" />
    </div>
  );
}

/* ---------- Screen 4: GST returns ---------- */
/** Mirrors GstReturnsScreen: period rail, totals grid, GSTR-1 sections, GSTR-3B. */
export function GstScreen() {
  return (
    <div className="flex h-full flex-col text-[10px]">
      <div className="px-4 pt-8">
        <p className="text-[13px] font-bold">GST returns</p>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-3 pt-2.5">
        <div className="flex gap-1.5">
          {["Jun 2026", "Jul 2026", "Aug 2026"].map((p) => (
            <span
              key={p}
              className="rounded-full px-2.5 py-1 text-[8px] font-bold"
              style={
                p === "Jul 2026"
                  ? { background: app.primary, color: "#FFFFFF" }
                  : { background: app.card, border: `1px solid ${app.border}`, color: app.inkMuted }
              }
            >
              {p}
            </span>
          ))}
        </div>

        <div
          className="rounded-xl p-2.5"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <p className="text-[10px] font-bold">July 2026</p>
          <div className="mt-1.5 grid grid-cols-3 gap-y-2">
            {[
              ["TAXABLE VALUE", "₹9,84,300"],
              ["TOTAL TAX", "₹1,77,174"],
              ["INVOICES", "128"],
              ["CGST", "₹66,320"],
              ["SGST", "₹66,320"],
              ["IGST", "₹44,534"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[6px] font-bold tracking-wide" style={{ color: app.inkMuted }}>
                  {k}
                </p>
                <p className="text-[9px] font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="px-1 text-[7px] font-bold tracking-widest" style={{ color: app.inkMuted }}>
          GSTR-1 SECTIONS
        </p>
        {[
          ["B2B", "Sales to GST-registered buyers"],
          ["B2CL", "Large out-of-state consumer sales"],
          ["B2CS", "All other consumer sales, totalled"],
          ["HSN", "Everything sold, grouped by HSN code"],
        ].map(([tag, hint]) => (
          <div
            key={tag}
            className="flex items-center gap-2 rounded-xl p-2"
            style={{ background: app.card, border: `1px solid ${app.border}` }}
          >
            <span
              className="rounded-md px-1.5 py-1 text-[7px] font-extrabold"
              style={{ background: app.primarySoft, color: app.primaryStrong }}
            >
              {tag}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[8.5px] font-semibold">Download {tag} CSV</p>
              <p className="truncate text-[6.5px]" style={{ color: app.inkMuted }}>
                {hint}
              </p>
            </div>
            <span className="text-[10px]" style={{ color: app.primary }}>
              ↓
            </span>
          </div>
        ))}

        <p className="px-1 text-[7px] font-bold tracking-widest" style={{ color: app.inkMuted }}>
          GSTR-3B
        </p>
        <div
          className="flex items-center gap-2 rounded-xl p-2"
          style={{ background: app.card, border: `1px solid ${app.border}` }}
        >
          <span
            className="rounded-md px-1.5 py-1 text-[7px] font-extrabold"
            style={{ background: app.accentSoft, color: app.accent }}
          >
            3B
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[8.5px] font-semibold">Outward supplies summary</p>
            <p className="truncate text-[6.5px]" style={{ color: app.inkMuted }}>
              One line per tax head for table 3.1(a)
            </p>
          </div>
          <span className="text-[10px]" style={{ color: app.primary }}>
            ↓
          </span>
        </div>

        <p className="px-1 text-[6.5px] leading-snug" style={{ color: app.inkMuted }}>
          Each file opens in your share sheet — send it to your accountant or save it to Drive.
        </p>
      </div>
    </div>
  );
}
