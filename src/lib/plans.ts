/**
 * BillJi plan catalog — the single source of truth for the pricing section
 * and the SoftwareApplication JSON-LD offers.
 *
 * Mirrors `PLAN_SEEDS` in `backend/src/constants/entitlements.js`. Keep the
 * two in step: plan names, prices, trial lengths and every feature bullet
 * below are the entitlements the backend actually grants.
 *
 * Deliberately omitted: the private `legacy_pro` grandfathering plan, which is
 * assigned by the platform and never listed as something to buy.
 */

export type Plan = {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  custom?: boolean;
  highlight?: boolean;
  cta: string;
  features: string[];
  footnote?: string;
};

export const plans: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    emoji: "🟢",
    tagline: "Everything a single shop needs to bill and stay GST-compliant",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    features: [
      "1 business, 1 user",
      "200 documents / month",
      "Unlimited customers & products",
      "GST invoices, quotations, challans & credit notes",
      "PDF invoices & WhatsApp sharing",
      "Barcode scanning",
      "Basic inventory & stock tracking",
      "Dashboard & basic reports",
      "Works offline, syncs to the cloud",
      "Automatic backup",
    ],
    footnote: 'Invoices carry a small "Powered by BillJi" footer',
  },
  {
    key: "pro",
    name: "Pro",
    emoji: "🔵",
    tagline: "For growing single-owner businesses that bill every day",
    monthly: 249,
    yearly: 1999,
    highlight: true,
    cta: "Go Pro",
    features: [
      "Everything in Starter",
      "Unlimited documents",
      "Your logo & invoice branding",
      "Remove BillJi branding",
      "Expenses tracking",
      "Purchases & vendor bills",
      "Advanced inventory",
      "Advanced reports & profit / loss",
      "GSTR-1 & GSTR-3B returns",
      "WhatsApp payment reminders",
      "CSV & Excel import / export",
      "Priority email support",
    ],
    footnote: "14-day free trial. 7-day grace period on renewal.",
  },
  {
    key: "business",
    name: "Business",
    emoji: "🟣",
    tagline: "For teams and owners running more than one firm",
    monthly: 499,
    yearly: 4999,
    cta: "Scale with Business",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Unlimited businesses",
      "Roles & permissions (5 built-in roles)",
      "Custom roles",
      "Audit log of every action",
      "Advanced analytics",
      "Priority support",
    ],
    footnote: "14-day free trial. 7-day grace period on renewal.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    emoji: "⚫",
    tagline: "Custom limits, onboarding and support",
    monthly: null,
    yearly: null,
    custom: true,
    cta: "Talk to us",
    features: [
      "Everything in Business",
      "Custom limits & per-account overrides",
      "Dedicated onboarding & training",
      "Custom integrations",
      "API access",
      "Dedicated support",
    ],
  },
];
