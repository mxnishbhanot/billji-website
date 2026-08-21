/**
 * BillJi plan catalog — prices and flags only.
 *
 * Mirrors `PLAN_SEEDS` in `backend/src/constants/entitlements.js`. Keep the two
 * in step: every price and trial length below is what the backend actually
 * grants.
 *
 * Plan names, taglines, CTA labels and feature bullets live in
 * `src/lib/content/*.ts` under `pricing.plans`, keyed by the `key` field here —
 * they are copy, and copy is translated. Prices are not.
 *
 * Deliberately omitted: the private `legacy_pro` grandfathering plan, which is
 * assigned by the platform and never listed as something to buy.
 */

export type Plan = {
  /** Must match a key in `content.pricing.plans`. */
  key: "starter" | "pro" | "business" | "enterprise";
  emoji: string;
  monthly: number | null;
  yearly: number | null;
  /** "Let's talk" instead of a price. */
  custom?: boolean;
  /** Draws the "Most popular" ribbon and the emphasised border. */
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    key: "starter",
    emoji: "🟢",
    monthly: 0,
    yearly: 0,
  },
  {
    key: "pro",
    emoji: "🔵",
    monthly: 249,
    yearly: 1999,
    highlight: true,
  },
  {
    key: "business",
    emoji: "🟣",
    monthly: 499,
    yearly: 4999,
  },
  {
    key: "enterprise",
    emoji: "⚫",
    monthly: null,
    yearly: null,
    custom: true,
  },
];
