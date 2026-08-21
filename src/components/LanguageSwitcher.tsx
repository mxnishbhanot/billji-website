import Link from "next/link";
import { LOCALES, getContent, localeHref, type Locale } from "@/lib/content";

/**
 * Language links, one per locale, rendered as a small segmented control.
 *
 * Plain `<Link>`s rather than a `<select>` or a dropdown: two locales fit in
 * the space, each is a real crawlable URL with its own `hreflang`, and there is
 * no JS and no client component involved.
 *
 * Each label is in its own language (`endonym`), because someone looking for
 * Hindi is looking for "हिन्दी", not for "Hindi".
 */
export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`flex items-center rounded-full bg-surface-dim p-0.5 ${className}`}>
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localeHref(l)}
            lang={getContent(l).htmlLang}
            hrefLang={getContent(l).htmlLang}
            // `aria-current="page"` rather than a visual-only highlight: the
            // active language is a fact about which page you are on.
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
              active
                ? "bg-card text-brand shadow-sm"
                : "text-ink-muted hover:text-brand"
            }`}
          >
            {getContent(l).endonym}
          </Link>
        );
      })}
    </div>
  );
}
