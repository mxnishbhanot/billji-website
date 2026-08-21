"use client";

import { useState } from "react";
import { plans } from "@/lib/plans";
import { SWIPE_ITEM, SwipeGrid, SwipeHint } from "./SwipeGrid";
import { CTA_HREF, SALES_EMAIL } from "@/lib/site";
import type { Content, Locale } from "@/lib/content";

/**
 * Indian digit grouping (1,99,999 — not 199,999) in both locales: the reader is
 * an Indian business either way, and `hi-IN` formats the same lakh/crore
 * grouping with Devanagari-adjacent digits left as Latin, which is what a price
 * on an Indian invoice looks like.
 */
function formatINR(n: number, locale: Locale) {
  return `₹${n.toLocaleString(`${locale}-IN`)}`;
}

export default function Pricing({
  c,
  locale,
}: {
  c: Content["pricing"];
  locale: Locale;
}) {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">
          {c.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {c.heading}
        </h2>
        <p className="mt-4 text-lg text-ink-muted">{c.subhead}</p>

        <div className="mt-8 inline-flex items-center rounded-full bg-surface-dim p-1">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              !yearly ? "bg-card text-brand shadow" : "text-ink-muted"
            }`}
          >
            {c.monthly}
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              yearly ? "bg-card text-brand shadow" : "text-ink-muted"
            }`}
          >
            {c.yearly}
            <span className="ml-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent">
              {c.yearlySave}
            </span>
          </button>
        </div>
      </div>

      <SwipeGrid
        label={c.gridLabel}
        cols="md:grid-cols-2 xl:grid-cols-4"
        className="mt-12 md:gap-6"
      >
        {plans.map((p) => {
          const t = c.plans[p.key];
          return (
            <div
              key={p.key}
              className={`${SWIPE_ITEM} reveal relative flex flex-col rounded-2xl p-6 sm:p-7 ${
                p.highlight
                  ? "border-2 border-brand bg-card shadow-xl shadow-brand/15"
                  : "border border-border bg-card shadow-sm"
              }`}
            >
              {p.highlight && (
                <span className="btn-cta absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold">
                  {c.mostPopular}
                </span>
              )}

              <p className="text-sm font-bold text-ink-muted">
                <span aria-hidden="true">{p.emoji}</span> {t.name}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{t.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                {p.custom ? (
                  <span className="text-3xl font-extrabold">{c.letsTalk}</span>
                ) : p.monthly === 0 ? (
                  <span className="text-4xl font-extrabold">₹0</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold">
                      {formatINR(
                        yearly ? (p.yearly as number) : (p.monthly as number),
                        locale,
                      )}
                    </span>
                    <span className="text-sm font-medium text-ink-muted">
                      /{yearly ? c.perYear : c.perMonth}
                    </span>
                  </>
                )}
              </div>
              {!p.custom && p.monthly !== 0 && yearly && (
                <p className="mt-1 text-xs text-accent">
                  {c.perMonthBilledAnnually.replace(
                    "{price}",
                    formatINR(Math.round((p.yearly as number) / 12), locale),
                  )}
                </p>
              )}
              {p.monthly === 0 && (
                <p className="mt-1 text-xs text-ink-muted">{c.freeForever}</p>
              )}

              <a
                href={p.custom ? `mailto:${SALES_EMAIL}` : CTA_HREF}
                className={`mt-6 rounded-full py-3 text-center text-sm font-bold transition ${
                  p.highlight
                    ? "btn-cta shadow-lg shadow-brand/25"
                    : "border border-brand/25 text-brand hover:bg-brand-soft"
                }`}
              >
                {t.cta}
              </a>

              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f, i) => (
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
                    {/* The first bullet on every paid plan is the
                        "Everything in <lower plan>" roll-up. Bolding by index
                        rather than by matching an English prefix, so it keeps
                        working in every language. */}
                    <span className={i === 0 && p.key !== "starter" ? "font-semibold" : ""}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {t.footnote && (
                <p className="mt-4 text-[11px] leading-snug text-ink-muted">
                  {t.footnote}
                </p>
              )}
            </div>
          );
        })}
      </SwipeGrid>
      <SwipeHint label={c.swipeHint} />

      <p className="mt-8 text-center text-sm text-ink-muted">{c.footnote}</p>
    </section>
  );
}
