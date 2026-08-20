import type { Metadata } from "next";
import { Clause, LegalShell } from "@/components/LegalShell";
import { Footer } from "@/components/CTAFooter";
import { LEGAL_READY, legal } from "@/lib/legal";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Terms of Service — BillJi",
  description:
    "The terms you agree to when you use BillJi: plans and billing, acceptable use, your data, and the limits of our liability.",
  alternates: { canonical: "/terms" },
  robots: LEGAL_READY ? { index: true, follow: true } : { index: false, follow: false },
};

const starter = plans.find((p) => p.key === "starter");

export default function Terms() {
  return (
    <>
      <LegalShell
        title="Terms of Service"
        intro="These are the terms between you and BillJi. Plain language, because terms nobody can read protect nobody."
      >
        <Clause heading="1. Agreement">
          <p>
            By creating a BillJi account you agree to these terms. They are
            between you (or the business you are acting for) and {legal.entity}.
            If you are accepting on behalf of a company, you confirm you are
            authorised to do so.
          </p>
        </Clause>

        <Clause heading="2. Your account">
          <p>
            You are responsible for your login credentials and for what happens
            under your account. Keep your password to yourself and turn on
            two-factor authentication. If you invite team members, you are
            responsible for the access you grant them, and you can revoke it at
            any time.
          </p>
          <p>
            One person, one account. Do not share a single login across staff —
            invite them instead, so the audit log stays meaningful.
          </p>
        </Clause>

        <Clause heading="3. Plans, billing and trials">
          <p>
            The Starter plan is free and includes{" "}
            {starter ? "200 documents a month" : "a monthly document allowance"}.
            Paid plans are billed in advance, monthly or annually, in Indian
            rupees. Listed prices include GST.
          </p>
          <p>
            Pro and Business include a 14-day free trial. One trial per business.
          </p>
          <p>
            If you enable autopay, renewals are debited automatically on the
            renewal date. You can turn autopay off without cancelling your plan,
            and you can cancel at any time. If a renewal payment fails you get a
            7-day grace period before paid features are restricted.
          </p>
          <p>
            Cancelling stops future charges and moves you to the Starter plan at
            the end of the paid period. We do not refund part-used periods,
            except where the law requires it or where we have clearly failed to
            deliver the service.
          </p>
          <p>
            We may change prices. Existing subscribers will be told before a
            change affects them, and a price change never applies mid-period.
          </p>
        </Clause>

        <Clause heading="4. Plan limits">
          <p>
            Each plan has limits — documents per month, team members, businesses.
            They are enforced in the app and shown to you before you hit them. If
            you exceed a limit, the affected feature stops until the next period
            or until you upgrade; nothing you have already created is deleted or
            hidden.
          </p>
        </Clause>

        <Clause heading="5. Your data stays yours">
          <p>
            You own everything you put into BillJi. We claim no ownership over
            your invoices, customers or catalogue. We store and process them only
            to provide the service, and only as described in our Privacy Policy.
          </p>
          <p>
            You can export your data on paid plans, and you should do so before
            closing an account. GST law requires you to retain your own tax
            records for 72 months — that obligation is yours, not ours.
          </p>
        </Clause>

        <Clause heading="6. What BillJi is not">
          <p>
            This matters, so it is not buried: BillJi is billing software, not an
            accountant and not a tax agent. It calculates GST from what you enter
            and prepares GSTR-1 and GSTR-3B data for you to file. It does not
            file returns on your behalf, and it cannot know whether your GSTIN,
            HSN codes, place of supply or tax rates are correct.
          </p>
          <p>
            You are responsible for the accuracy of your invoices and your
            filings. Have a qualified professional review them. We are not liable
            for a penalty arising from data you entered or a return you filed.
          </p>
        </Clause>

        <Clause heading="7. Acceptable use">
          <p>You agree not to:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>use BillJi to issue fraudulent or fictitious invoices, or to evade tax;</li>
            <li>upload someone else&apos;s personal data without a lawful basis;</li>
            <li>attempt to breach, overload, scrape or reverse-engineer the service;</li>
            <li>resell or white-label BillJi without a written agreement.</li>
          </ul>
          <p>
            We may suspend an account that is being used this way. Where we can,
            we will tell you first and give you a chance to put it right.
          </p>
        </Clause>

        <Clause heading="8. Availability">
          <p>
            We work to keep BillJi available, and its offline-first design means
            you can keep billing through a network outage. Even so, we do not
            promise uninterrupted service on any plan without a written SLA.
            Maintenance, provider failures and force majeure happen.
          </p>
        </Clause>

        <Clause heading="9. Liability">
          <p>
            To the extent the law allows, our total liability for any claim is
            limited to what you paid us in the twelve months before it arose. On
            the free plan, where you have paid nothing, that limit is nil — a free
            product cannot carry unlimited risk.
          </p>
          <p>
            We are not liable for indirect losses: lost profit, lost business,
            lost goodwill, or data you did not export. Nothing here excludes
            liability that cannot lawfully be excluded.
          </p>
        </Clause>

        <Clause heading="10. Ending the agreement">
          <p>
            You can stop using BillJi and close your account at any time. We may
            terminate an account for a serious or repeated breach of these terms,
            or if required by law. On termination your right to use the service
            ends; data handling then follows the retention section of the Privacy
            Policy.
          </p>
        </Clause>

        <Clause heading="11. Changes to these terms">
          <p>
            We may update these terms. The effective date above will change, and
            material changes will be notified in the app before they take effect.
            Continuing to use BillJi after that means you accept them.
          </p>
        </Clause>

        <Clause heading="12. Governing law">
          <p>
            These terms are governed by the laws of India, and the courts at{" "}
            {legal.jurisdiction} have exclusive jurisdiction over any dispute.
          </p>
        </Clause>
      </LegalShell>
      <Footer />
    </>
  );
}
