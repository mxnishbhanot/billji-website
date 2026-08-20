"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { CTA_HREF, SIGN_IN_HREF } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "The App" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="BillJi logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Bill<span className="text-brand">Ji</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {SIGN_IN_HREF && (
            <a
              href={SIGN_IN_HREF}
              className="rounded-full px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-soft"
            >
              Sign in
            </a>
          )}
          <a
            href={CTA_HREF}
            className="btn-cta rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg shadow-brand/25 transition"
          >
            Get BillJi Free
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-dim"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CTA_HREF}
            onClick={() => setOpen(false)}
            className="btn-cta mt-2 block rounded-full px-5 py-2.5 text-center text-sm font-semibold"
          >
            Get BillJi Free
          </a>
        </div>
      )}
    </header>
  );
}
