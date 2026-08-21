/**
 * Social-proof numbers and customer quotes for the trust strip under the hero.
 *
 * Same rule as `src/lib/legal.ts`: nothing here can be derived from the
 * codebase, so it starts empty and the strip is NOT rendered until real
 * figures are in. An invented install count or star rating is a false
 * advertising claim on a billing product — leave a value out rather than
 * guessing it.
 *
 * Fill in whichever entries you can evidence and delete the rest; the strip
 * renders whatever is left. It needs at least one stat OR one quote.
 */

/** A headline figure. `value` is shown large, `label` beneath it. */
export type TrustStat = { value: string; label: string };

/** A named customer quote. Anonymous quotes read as fake — use a real name. */
export type TrustQuote = {
  text: string;
  /** Person's name, as they agreed to be credited. */
  name: string;
  /** Trade and city, e.g. "Kirana store, Jaipur". */
  detail: string;
};

export const trustStats: TrustStat[] = [
  // { value: "4.6 ★", label: "on Google Play" },
  // { value: "2,400+", label: "businesses billing" },
  // { value: "₹40 Cr", label: "invoiced through BillJi" },
];

export const trustQuotes: TrustQuote[] = [
  // {
  //   text: "Bills go out on WhatsApp before the customer leaves the counter.",
  //   name: "Rakesh Sharma",
  //   detail: "Kirana store, Jaipur",
  // },
];

/** False while there is nothing real to show. */
export const TRUST_READY = trustStats.length > 0 || trustQuotes.length > 0;
