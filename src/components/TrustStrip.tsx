import { TRUST_READY, trustQuotes, trustStats } from "@/lib/trust";
import type { Content } from "@/lib/content";

/**
 * Thin social-proof band directly under the hero.
 *
 * Renders nothing at all until `src/lib/trust.ts` holds real numbers or real
 * quotes — an empty band with placeholder figures is worse than no band.
 *
 * The figures and quotes themselves are NOT translated: a customer said what
 * they said, in the language they said it in, and a star rating is a number.
 * Only the section's accessible name comes from the dictionary.
 */
export default function TrustStrip({ c }: { c: Content["trust"] }) {
  if (!TRUST_READY) return null;

  return (
    <section aria-label={c.heading} className="border-y border-border bg-card">
      <div className="reveal mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {trustStats.length > 0 && (
          <dl className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-center sm:gap-x-16">
            {trustStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-brand sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs font-semibold text-ink-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {trustQuotes.length > 0 && (
          <div
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
              trustStats.length > 0 ? "mt-8" : ""
            }`}
          >
            {trustQuotes.map((q) => (
              <figure
                key={q.name}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <blockquote className="text-sm leading-relaxed">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs text-ink-muted">
                  <span className="font-bold text-ink">{q.name}</span> · {q.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
