import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { LEGAL_READY, legal } from "@/lib/legal";

/**
 * Shared chrome for the Privacy Policy and Terms pages: a minimal header (no
 * marketing nav — someone reading a policy is not shopping), the draft banner
 * while placeholders remain, and readable measure for long prose.
 */
export function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="" width={30} height={30} />
            <span className="text-lg font-extrabold tracking-tight">
              Bill<span className="text-brand">Ji</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-brand hover:underline">
            Back to site
          </Link>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        {!LEGAL_READY && (
          <div
            role="note"
            className="mb-10 rounded-2xl border border-warning/40 bg-warning-soft/60 p-5"
          >
            <p className="text-sm font-bold text-ink">Draft — not yet in effect</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              The factual sections below describe how BillJi actually works, but
              the company details, jurisdiction, grievance officer and retention
              period are unfilled placeholders. This page is excluded from search
              engines and is not linked from the site until they are completed
              and reviewed by a lawyer.
            </p>
          </div>
        )}

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Effective {legal.effectiveDate} · Applies to the BillJi mobile app and
          this website
        </p>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">{intro}</p>

        <div className="mt-10 space-y-10">{children}</div>

        <p className="mt-14 border-t border-border pt-6 text-sm text-ink-muted">
          Questions about this document? Write to{" "}
          <a className="font-semibold text-brand hover:underline" href="mailto:support@billji.app">
            support@billji.app
          </a>
          .
        </p>
      </main>
    </>
  );
}

/** One numbered section of a legal document. */
export function Clause({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
