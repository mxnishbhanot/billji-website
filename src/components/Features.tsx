import { SWIPE_ITEM, SwipeGrid, SwipeHint } from "./SwipeGrid";
import type { Content } from "@/lib/content";

type Feature = Content["features"]["items"][number];

/**
 * Which features lead the section, by index into `content.features.items`.
 *
 * Kept here rather than as a flag in the dictionaries: which six to show is a
 * layout decision, identical in every language, and duplicating it per locale
 * would let the two drift apart. Every locale lists the features in the same
 * order, which is what makes indices safe.
 */
const TOP = [0, 1, 2, 3, 5, 9];

function FeatureCard({
  f,
  className = "",
}: {
  f: Feature;
  /** `SWIPE_ITEM` inside the swipe row; empty inside the plain <details> grid,
      where its `sm:w-[calc(50%-0.75rem)]` would halve an already-half column. */
  className?: string;
}) {
  return (
    <div
      className={`${className} reveal rounded-2xl border border-border bg-card p-5 shadow-sm transition sm:p-6 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-brand/10`}
    >
      <div
        aria-hidden="true"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-2xl sm:h-12 sm:w-12"
      >
        {f.icon}
      </div>
      <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
    </div>
  );
}

export default function Features({ c }: { c: Content["features"] }) {
  const top = TOP.map((i) => c.items[i]);
  const rest = c.items.filter((_, i) => !TOP.includes(i));

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">
          {c.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {c.heading}
        </h2>
        <p className="mt-4 text-lg text-ink-muted">{c.subhead}</p>
      </div>

      {/* Six cards, not fifteen: the full list pushed Pricing three screens down
          and nobody read the bottom half of it. The rest stay one tap away in a
          native <details> — no JS, and still in the HTML for search engines. */}
      <SwipeGrid
        label={c.gridLabel}
        cols="md:grid-cols-2 lg:grid-cols-3"
        className="mt-12 md:mt-14 md:gap-6"
      >
        {top.map((f) => (
          <FeatureCard key={f.title} f={f} className={SWIPE_ITEM} />
        ))}
      </SwipeGrid>
      <SwipeHint label={c.swipeHint} />

      <details className="group mt-8 md:mt-10">
        <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-bold text-brand transition hover:bg-brand-soft [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">
            {c.showAll.replace("{count}", String(c.items.length))}
          </span>
          <span className="hidden group-open:inline">{c.showFewer}</span>
          <span aria-hidden="true" className="transition group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {rest.map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </div>
      </details>
    </section>
  );
}
