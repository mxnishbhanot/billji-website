/**
 * BillJi FAQ content — rendered by the FAQ section and mirrored verbatim
 * into the FAQPage JSON-LD.
 *
 * Every answer here is checked against what the app and backend actually do
 * (entitlements, document types, RBAC roles, the offline sync engine). Nothing
 * is aspirational.
 */

export const faqs = [
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
    a: "BillJi is a native Android and iOS app. Sign in on more than one device and everything syncs; each device keeps its own offline copy.",
  },
];
