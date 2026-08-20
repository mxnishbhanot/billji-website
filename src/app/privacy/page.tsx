import type { Metadata } from "next";
import { Clause, LegalShell } from "@/components/LegalShell";
import { Footer } from "@/components/CTAFooter";
import { LEGAL_READY, legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — BillJi",
  description:
    "What data BillJi collects, why, who processes it, how long it is kept, and the choices you have.",
  alternates: { canonical: "/privacy" },
  robots: LEGAL_READY ? { index: true, follow: true } : { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <>
      <LegalShell
        title="Privacy Policy"
        intro="BillJi is a billing app for Indian businesses. This policy explains what we collect, why, and what we do with it. It is written to be read, not to be survived."
      >
        <Clause heading="1. Who we are">
          <p>
            BillJi is operated by {legal.entity}, registered at {legal.address}.
            For the purposes of the Digital Personal Data Protection Act, 2023,
            {" "}{legal.entity} is the data fiduciary for your account data.
          </p>
        </Clause>

        <Clause heading="2. Two very different kinds of data">
          <p>
            This distinction matters more than anything else in this document.
          </p>
          <p>
            <strong className="text-ink">Your account data</strong> — your name,
            email and how you use BillJi — is data we hold about you. We are
            responsible for it, and this policy governs it.
          </p>
          <p>
            <strong className="text-ink">Your business records</strong> — your
            customers, their GSTINs and phone numbers, your invoices, payments
            and stock — belong to you. You decide what to enter and why. We hold
            it strictly on your behalf, to give you the service: we do not mine
            it, sell it, share it, or use it to train anything. In DPDP terms you
            are the fiduciary for your customers&apos; data and we are your
            processor.
          </p>
        </Clause>

        <Clause heading="3. What we collect">
          <p>
            <strong className="text-ink">To create your account:</strong> your
            name, email address and a password. Passwords are hashed with bcrypt
            before storage — we never hold the password itself and cannot
            recover it, only reset it.
          </p>
          <p>
            <strong className="text-ink">If you enable two-factor
            authentication:</strong> a TOTP secret or emailed one-time codes,
            plus hashed backup codes. These are stored so that they are not
            returned by ordinary account reads.
          </p>
          <p>
            <strong className="text-ink">To keep your account secure:</strong> a
            record of your active sessions and of devices you mark as trusted, so
            you can see and revoke them.
          </p>
          <p>
            <strong className="text-ink">If you allow notifications:</strong> a
            device push token, used only to deliver notifications you have turned
            on.
          </p>
          <p>
            <strong className="text-ink">What you enter about your
            business:</strong> your business profile and GSTIN, logo, invoice
            settings and tax settings; your customers and vendors, including
            their names, phone numbers, email addresses, billing and shipping
            addresses and GSTINs; your products and stock; and your invoices,
            quotations, delivery challans, credit notes, orders, payments,
            expenses and purchase bills.
          </p>
          <p>
            <strong className="text-ink">An audit trail:</strong> on team plans,
            a log of who did what, so a business owner can see changes made by
            staff. This is a deliberate accountability feature.
          </p>
        </Clause>

        <Clause heading="4. Payment information">
          <p>
            Subscription payments are handled by Razorpay. Your card, UPI or
            netbanking details are entered with Razorpay and go to Razorpay — they
            never reach BillJi&apos;s servers and we cannot see them. What we
            store is the outcome: the plan, amount, currency, billing period,
            status, and Razorpay&apos;s own reference IDs, so we know what you
            paid for.
          </p>
          <p>
            Payments you record against your customers&apos; invoices are your own
            bookkeeping entries — a method such as &ldquo;UPI&rdquo; and an amount.
            No customer payment instrument is ever collected.
          </p>
        </Clause>

        <Clause heading="5. Who else processes your data">
          <p>
            We keep this list short on purpose, and each provider does exactly one
            job:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-ink">MongoDB</strong> — the database your
              records live in.
            </li>
            <li>
              <strong className="text-ink">Cloudflare R2</strong> — storage for
              generated invoice PDFs and data-export archives.
            </li>
            <li>
              <strong className="text-ink">Resend</strong> — transactional email
              only: login codes, password resets, team invitations and export
              links. No marketing email is sent through it without your consent.
            </li>
            <li>
              <strong className="text-ink">Firebase Cloud Messaging</strong> —
              delivery of push notifications.
            </li>
            <li>
              <strong className="text-ink">Razorpay</strong> — subscription
              payments, as described above.
            </li>
            <li>
              <strong className="text-ink">Render</strong> — hosting for the
              application servers.
            </li>
          </ul>
          <p>
            We do not sell your data, and we do not share it with advertisers or
            data brokers. There is no such arrangement to disclose.
          </p>
        </Clause>

        <Clause heading="6. Data on your phone">
          <p>
            BillJi is offline-first: your records are also stored in an encrypted
            database on your own device so you can bill without a network. That
            copy is removed when you sign out or uninstall the app. Because it
            lives on your phone, the phone&apos;s own lock screen is part of your
            data security.
          </p>
        </Clause>

        <Clause heading="7. How long we keep things">
          <p>These periods are enforced by the software, not just promised:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Unsaved invoice drafts are deleted 30 days after you last edit them.</li>
            <li>Password-reset links expire and are deleted automatically.</li>
            <li>Two-factor login challenges are deleted as soon as they expire.</li>
            <li>Team invitations are deleted a week after they expire.</li>
            <li>Trusted-device records are deleted when they expire.</li>
            <li>Data-export archives expire and are removed from storage.</li>
          </ul>
          <p>
            Your business records are kept for as long as your account is open,
            and for {legal.retentionAfterClosure} after it is closed. Note that
            GST law requires <em>you</em> to retain your own tax records for 72
            months, so exporting your data before closing an account is strongly
            recommended.
          </p>
        </Clause>

        <Clause heading="8. Your rights and choices">
          <p>
            You can view and correct your business records in the app at any
            time. On paid plans you can export your customers, products and
            invoices to CSV or Excel, or download a full archive of your business
            data.
          </p>
          <p>
            To close your account and have your data deleted, or to ask what we
            hold about you, email{" "}
            <a className="font-semibold text-brand hover:underline" href="mailto:support@billji.app">
              support@billji.app
            </a>{" "}
            from your registered address. Deletion is handled by us on request —
            it is not yet a self-service button in the app.
          </p>
          <p>
            You can revoke any session or trusted device yourself from settings,
            and turn off any category of notification.
          </p>
        </Clause>

        <Clause heading="9. Security">
          <p>
            Passwords are hashed with bcrypt. Two-factor authentication is
            available on every account. Access within a team is enforced
            per-action by role, so staff can only reach what their role permits,
            and every change is written to the audit log. Traffic to our servers
            is HTTPS only. Your on-device copy is encrypted.
          </p>
          <p>
            No system is immune. If a breach affects your personal data, we will
            notify you and the Data Protection Board as the DPDP Act requires.
          </p>
        </Clause>

        <Clause heading="10. Children">
          <p>
            BillJi is a business tool and is not directed at children. We do not
            knowingly create accounts for anyone under 18.
          </p>
        </Clause>

        <Clause heading="11. Changes to this policy">
          <p>
            If we change how we handle data, we will update this page and change
            the effective date above. Material changes will be notified in the
            app.
          </p>
        </Clause>

        <Clause heading="12. Grievance officer">
          <p>
            As required by the DPDP Act, complaints about how your personal data
            is handled can be raised with our Grievance Officer,{" "}
            {legal.grievanceOfficer}, at{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`mailto:${legal.grievanceEmail}`}
            >
              {legal.grievanceEmail}
            </a>
            . We will acknowledge and respond within the statutory timeframe.
          </p>
        </Clause>
      </LegalShell>
      <Footer />
    </>
  );
}
