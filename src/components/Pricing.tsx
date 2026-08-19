"use client";

import { useState } from "react";
import { plans } from "@/lib/plans";
import { CTA_HREF, SALES_EMAIL } from "@/lib/site";

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">Pricing</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Start free. Upgrade when you grow.
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Simple plans in rupees, built for Indian businesses. No hidden fees.
        </p>

        <div className="mt-8 inline-flex items-center rounded-full bg-surface-dim p-1">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              !yearly ? "bg-card text-brand shadow" : "text-ink-muted"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              yearly ? "bg-card text-brand shadow" : "text-ink-muted"
            }`}
          >
            Yearly
            <span className="ml-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent">
              Save up to 33%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.key}
            className={`relative flex flex-col rounded-2xl p-7 ${
              p.highlight
                ? "border-2 border-brand bg-card shadow-xl shadow-brand/15"
                : "border border-border bg-card shadow-sm"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                Most popular
              </span>
            )}

            <p className="text-sm font-bold text-ink-muted">
              {p.emoji} {p.name}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{p.tagline}</p>

            <div className="mt-5 flex items-baseline gap-1">
              {p.custom ? (
                <span className="text-3xl font-extrabold">Let&apos;s talk</span>
              ) : p.monthly === 0 ? (
                <span className="text-4xl font-extrabold">₹0</span>
              ) : (
                <>
                  <span className="text-4xl font-extrabold">
                    {formatINR(yearly ? (p.yearly as number) : (p.monthly as number))}
                  </span>
                  <span className="text-sm font-medium text-ink-muted">
                    /{yearly ? "year" : "month"}
                  </span>
                </>
              )}
            </div>
            {!p.custom && p.monthly !== 0 && yearly && (
              <p className="mt-1 text-xs text-accent">
                ≈ {formatINR(Math.round((p.yearly as number) / 12))}/month, billed annually
              </p>
            )}
            {p.monthly === 0 && (
              <p className="mt-1 text-xs text-ink-muted">Free forever</p>
            )}

            <a
              href={p.custom ? `mailto:${SALES_EMAIL}` : CTA_HREF}
              className={`mt-6 rounded-full py-3 text-center text-sm font-bold transition ${
                p.highlight
                  ? "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-strong"
                  : "border border-brand/25 text-brand hover:bg-brand-soft"
              }`}
            >
              {p.cta}
            </a>

            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.79 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={f.startsWith("Everything") ? "font-semibold" : ""}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {p.footnote && (
              <p className="mt-4 text-[11px] leading-snug text-ink-muted">{p.footnote}</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-muted">
        All prices include GST. Cancel anytime — your data stays exportable on every plan.
      </p>
    </section>
  );
}
