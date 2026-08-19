/**
 * BillJi plan catalog — the single source of truth for the pricing section
 * and the SoftwareApplication JSON-LD offers.
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
    key: "free",
    name: "Free",
    emoji: "🟢",
    tagline: "Perfect for small shops getting started",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    features: [
      "1 business",
      "50 documents / month",
      "Unlimited customers",
      "Unlimited products",
      "GST-compliant invoices",
      "PDF generation",
      "WhatsApp share",
      "Basic inventory",
      "Basic reports",
    ],
    footnote: 'Invoices carry a small "Powered by BillJi" badge',
  },
  {
    key: "professional",
    name: "Professional",
    emoji: "🔵",
    tagline: "For serious businesses that bill every day",
    monthly: 249,
    yearly: 1999,
    highlight: true,
    cta: "Go Professional",
    features: [
      "Everything in Free",
      "1,000 documents / month",
      "Remove BillJi branding",
      "Expenses tracking",
      "Purchases & vendor bills",
      "Advanced reports",
      "Payment reminders",
      "Import / export data",
      "Invoice templates",
      "Your logo & branding",
      "Priority email support",
    ],
  },
  {
    key: "business",
    name: "Business",
    emoji: "🟣",
    tagline: "For businesses with staff and multiple firms",
    monthly: 499,
    yearly: 4999,
    cta: "Scale with Business",
    features: [
      "Everything in Professional",
      "10,000 documents / month",
      "Team members",
      "Role-based access control",
      "Custom roles",
      "Audit logs",
      "Multiple businesses",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    emoji: "⚫",
    tagline: "Custom limits, onboarding and SLAs",
    monthly: null,
    yearly: null,
    custom: true,
    cta: "Talk to us",
    features: [
      "Everything in Business",
      "Custom document limits",
      "Dedicated onboarding",
      "Custom integrations",
      "SLA & dedicated support",
    ],
  },
];
