import type { ReactNode } from "react";

/**
 * One horizontally swipeable row on small screens, a plain grid from `md` up.
 *
 * Pure CSS scroll-snap — no carousel library, no JS, no hydration cost, and
 * native momentum/flick behaviour on touch. Keyboard and screen-reader users
 * get a normal focusable list either way.
 *
 * Children must carry `SWIPE_ITEM` in their className so they size to a slide
 * on mobile and hand sizing back to the grid at `md`.
 */

/**
 * Apply to every direct child of `SwipeGrid`.
 *
 * Full-width slides, deliberately: a partially visible neighbour card reads as
 * a rendering bug rather than as a hint that the row scrolls. The "Swipe for
 * more" line below the row carries that hint instead.
 */
export const SWIPE_ITEM =
  "w-full shrink-0 snap-center sm:w-[calc(50%-0.75rem)] md:w-auto md:shrink md:snap-align-none";

export function SwipeGrid({
  children,
  label,
  cols = "md:grid-cols-3",
  className = "",
}: {
  children: ReactNode;
  /**
   * Names the row for assistive tech. Also required for the keyboard path: a
   * scroll container is only reachable by arrow keys once it is focusable, and
   * a focusable element with no accessible name is a dead stop for a screen
   * reader.
   */
  label: string;
  /** Tailwind grid-cols classes applied from `md` up. */
  cols?: string;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      // tabIndex on the scroller, not the cards: without it, arrow-key users
      // cannot reach the slides that are off-screen. `md:hidden`-style removal
      // is not possible for an attribute, and it is harmless once the row
      // becomes a grid — there is nothing left to scroll.
      tabIndex={0}
      className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-4 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:gap-6 sm:px-6 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 md:pt-0 ${cols} ${className} [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
    >
      {children}
    </div>
  );
}

/** "Swipe to see more" affordance — hidden once the grid takes over. */
export function SwipeHint({ label = "Swipe for more" }: { label?: string }) {
  return (
    <p className="mt-3 text-center text-xs font-semibold text-ink-muted md:hidden">
      {label} <span aria-hidden="true">→</span>
    </p>
  );
}
