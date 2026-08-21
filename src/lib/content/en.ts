/**
 * English site copy — the source of truth for both the page and the JSON-LD.
 *
 * `Content` is derived from this object (see ./index.ts), so every other locale
 * must supply exactly these keys or the build fails. Add a string here first,
 * then in every locale file.
 *
 * What is NOT here: plan prices and flags (src/lib/plans.ts — they mirror the
 * backend's entitlements and never change per language), the legal pages
 * (English-only while LEGAL_READY is false), the 404 page (not-found.tsx
 * receives no params, so it cannot know the locale), and the fake business data
 * inside the phone mockups (the app's own UI, which is English).
 */
export const en = {
  /** BCP 47 tag for <html lang>. */
  htmlLang: "en",
  ogLocale: "en_IN",
  /** This language's name in its own language, for the language switcher. */
  endonym: "English",

  meta: {
    title: "BillJi — GST Billing & Invoicing App for Indian Businesses",
    description:
      "Create GST-compliant invoices, quotations, challans and credit notes in seconds. Share on WhatsApp, track payments and stock, and export GSTR-1 and GSTR-3B — offline-first, from your phone. Free to start.",
  },

  a11y: {
    skipToContent: "Skip to content",
    toggleMenu: "Toggle menu",
    toggleTheme: "Toggle dark mode",
    switchLanguage: "Change language",
  },

  nav: {
    features: "Features",
    showcase: "The App",
    pricing: "Pricing",
    faq: "FAQ",
    signIn: "Sign in",
    cta: "Get BillJi Free",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
  },

  hero: {
    badge: "Made for Indian businesses",
    /** `{accent}` is replaced by `headlineAccent`, rendered in brand colour. */
    headline: "GST billing that fits in your {accent}",
    headlineAccent: "pocket",
    subhead:
      "Invoices, quotations, challans and credit notes in seconds. Share on WhatsApp, track payments and stock, and export GSTR-1 when it's time to file — from your phone, with or without a network.",
    ctaPrimary: "Start free — no card needed",
    ctaSecondary: "See the app",
    playStoreEyebrow: "Get it on",
    playStoreName: "Google Play",
    webPanel: "Or use the web panel",
    stats: [
      { value: "200", label: "Free documents / month" },
      { value: "< 30s", label: "To create a GST invoice" },
      { value: "Offline", label: "Bill with no signal" },
    ],
    floatPaid: "✓ Payment received",
    floatPaidDetail: "₹13,570 from Gupta Electronics · UPI",
    floatShared: "📄 INV-2026-0143 shared",
    floatSharedDetail: "Sent via WhatsApp · PDF + link",
    dashboardLabel:
      "The BillJi dashboard on a phone: today's collection of ₹18,450 on a receipt-style card, live metrics for the month, invoices and pending dues, and a banner prompting WhatsApp payment reminders.",
  },

  trust: {
    heading: "Why businesses trust BillJi",
  },

  features: {
    eyebrow: "Features",
    heading: "Everything a growing business needs to bill, collect & comply",
    subhead:
      "From your first quotation to your GST return — BillJi covers the whole journey without the complexity of desktop accounting software.",
    swipeHint: "Swipe through the highlights",
    /** `{count}` is the total number of features. */
    showAll: "See all {count} features",
    showFewer: "Show fewer features",
    gridLabel: "BillJi features",
    items: [
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
    ],
  },

  showcase: {
    eyebrow: "The App",
    heading: "Designed for the counter, not the back office",
    subhead:
      "A native Android app that keeps working when the network doesn't — plus a web panel for the desk.",
    swipeHint: "Swipe through the app",
    groupLabel: "BillJi app screens",
    panels: [
      {
        title: "The day's takings, first thing you see",
        desc: "A receipt-style card with today's collection, four live metrics with their own trend lines, and a banner that tells you how much is pending and who to chase. Tap anything to go straight to the filtered list behind it.",
        label:
          "The BillJi dashboard: today's collection on a receipt-style card, four metric cards with trend lines, a pending-dues banner and quick actions.",
      },
      {
        title: "Invoices in under 30 seconds",
        desc: "Pick a customer, scan a barcode or search your catalog, and BillJi works out CGST/SGST or IGST per line, applies your numbering series and saves a draft as you type. Generate — or Generate & Receive to take the money in the same breath.",
        label:
          "The BillJi invoice builder: the customer being billed, a scan-barcode row, three line items with HSN codes, and a totals block splitting CGST and SGST.",
      },
      {
        title: "Reports that answer real questions",
        desc: "Not a wall of charts. How much did I sell, how much did I actually collect, am I making money, who owes me — each one its own card, with collections split by payment method and your top products and customers.",
        label:
          "The BillJi reports screen: cards answering how much did I sell, how much did I collect, am I making money, and who owes me money.",
      },
      {
        title: "GST filing without the panic",
        desc: "Pick a month. BillJi builds GSTR-1 section by section — B2B, B2CL, B2CS, HSN — plus the GSTR-3B outward-supplies summary, and hands each one to you as a CSV your CA can use as-is.",
        label:
          "The BillJi GST returns screen: July 2026 totals, then downloadable GSTR-1 sections for B2B, B2CL, B2CS and HSN, plus a GSTR-3B summary.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Start free. Upgrade when you grow.",
    subhead:
      "Simple plans in rupees, built for Indian businesses. No hidden fees.",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlySave: "Save up to 33%",
    perYear: "year",
    perMonth: "month",
    /** `{price}` is the yearly total divided by twelve. */
    perMonthBilledAnnually: "≈ {price}/month, billed annually",
    freeForever: "Free forever",
    letsTalk: "Let's talk",
    swipeHint: "Swipe to compare plans",
    gridLabel: "BillJi plans",
    mostPopular: "Most popular",
    footnote:
      "All prices include GST. Pro and Business include a 14-day free trial and a 7-day grace period on renewal. Cancel anytime — you drop back to Starter and your documents stay readable.",
    /** Keyed by `plans[].key`. Prices and flags live in src/lib/plans.ts. */
    plans: {
      starter: {
        name: "Starter",
        tagline: "Everything a single shop needs to bill and stay GST-compliant",
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
      pro: {
        name: "Pro",
        tagline: "For growing single-owner businesses that bill every day",
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
      business: {
        name: "Business",
        tagline: "For teams and owners running more than one firm",
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
      enterprise: {
        name: "Enterprise",
        tagline: "Custom limits, onboarding and support",
        cta: "Talk to us",
        features: [
          "Everything in Business",
          "Custom limits & per-account overrides",
          "Dedicated onboarding & training",
          "Custom integrations",
          "API access",
          "Dedicated support",
        ],
        /** Empty means no footnote is rendered for this plan. */
        footnote: "",
      },
    },
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Questions? Answered.",
    items: [
      {
        q: "Is BillJi really free?",
        a: "Yes. The Starter plan is free forever: one business, 200 documents a month, unlimited customers and products, GST invoices, quotations, delivery challans and credit notes, PDFs, WhatsApp sharing, barcode scanning, basic inventory and reports. Invoices on Starter carry a small \"Powered by BillJi\" footer.",
      },
      {
        q: "Are the invoices GST-compliant?",
        a: "Yes. BillJi applies CGST + SGST for intra-state supplies and IGST for inter-state supplies based on your customer's GSTIN and place of supply, calculates tax per line item, and supports HSN codes, cess and reverse charge. GST billing is on every plan, including Starter.",
      },
      {
        q: "Can BillJi file my GST returns?",
        a: "BillJi prepares them. On Pro and above you get GSTR-1 with its B2B, B2CL, B2CS and HSN sections, plus a GSTR-3B outward-supplies summary, month by month. Download each section as a CSV and hand it to your accountant or upload it to the GST portal — BillJi does not submit on your behalf.",
      },
      {
        q: "What counts as a \"document\"?",
        a: "Any sales document you issue — invoices, quotations, delivery challans and credit notes. Starter includes 200 a month and the count resets on the 1st. Pro, Business and Enterprise have no monthly document limit.",
      },
      {
        q: "Does it work without internet?",
        a: "BillJi is offline-first, not just offline-readable. Customers, products, invoices, payments and expenses live in an encrypted database on your phone, so you can create a bill and take a payment with no signal at all — invoice numbers are reserved per device so they never collide. Everything is pushed to the cloud, with conflict resolution, as soon as you are back online.",
      },
      {
        q: "Can my accountant and staff use it too?",
        a: "On the Business plan, yes — up to 10 team members. There are five built-in roles (owner, admin, accountant, staff, viewer), and you can create custom roles with exactly the permissions you want down to individual actions. Every change is recorded in the audit log. Starter and Pro are single-user plans.",
      },
      {
        q: "How does BillJi chase payments for me?",
        a: "Record full or partial payments against an invoice in cash, UPI, bank transfer, card, cheque or wallet, and BillJi keeps each customer's outstanding balance live. On Pro and above, the reminders screen lists everyone who is due or overdue and opens a pre-filled WhatsApp message per customer, one after another. Overpayments become customer credit that is applied oldest-first to their next bill.",
      },
      {
        q: "Can I move my existing data into BillJi?",
        a: "Yes. Pro and above include CSV and Excel import for customers, products and invoices, and export of your business data as a downloadable archive. Import and export are Pro features — on Starter, your data is always visible in the app but not bulk-exportable.",
      },
      {
        q: "Is there a free trial of the paid plans?",
        a: "Pro and Business both come with a 14-day free trial you can start from inside the app — no card needed to try. If a renewal payment fails you get a 7-day grace period before anything is restricted.",
      },
      {
        q: "What happens if I cancel?",
        a: "Your data stays yours and stays accessible. Cancelling drops you back to Starter, so your existing documents remain readable and you are limited by Starter's 200-document monthly quota going forward. Export your data before you go if you want a copy.",
      },
      {
        q: "Which devices does BillJi run on?",
        a: "BillJi runs as a native Android app and a web panel in any browser. Sign in on more than one device and everything syncs; each device keeps its own offline copy. An iOS app is on the way.",
      },
    ],
  },

  cta: {
    heading: "Your next invoice could take 30 seconds",
    subhead:
      "Join BillJi free today — 200 documents a month, unlimited customers and products, and GST handled for you. Pro and Business come with a 14-day free trial.",
    primary: "Get BillJi Free",
    secondary: "Talk to sales",
  },

  footer: {
    madeIn: "Made in India 🇮🇳",
  },
};
