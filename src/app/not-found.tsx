import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — BillJi",
  // A 404 must never be indexed, whatever the site-wide default says.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <Image src="/icon.png" alt="" width={56} height={56} className="rounded-xl" />
      <p className="mt-8 text-sm font-bold uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        The link may be old or mistyped. Everything about BillJi lives on the
        home page.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="btn-cta rounded-full px-8 py-3.5 text-center text-base font-bold shadow-xl shadow-brand/30 transition"
        >
          Back to home
        </Link>
        <Link
          href="/#pricing"
          className="rounded-full border border-brand/25 px-8 py-3.5 text-center text-base font-bold text-brand transition hover:bg-brand-soft"
        >
          See pricing
        </Link>
      </div>
    </main>
  );
}
