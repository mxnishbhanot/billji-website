import { PhoneFrame, DashboardScreen } from "./PhoneMockup";
import { APP_URL, CTA_HREF, PLAY_STORE_URL } from "@/lib/site";
import type { Content } from "@/lib/content";

export default function Hero({ c }: { c: Content["hero"] }) {
  // The headline carries one brand-coloured word. Splitting on the `{accent}`
  // placeholder keeps that word inside the translated sentence, wherever the
  // language happens to put it — Hindi puts it in a different position from
  // English, so a hardcoded "last two words" split would break.
  const [before, after] = c.headline.split("{accent}");

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-soft)_0%,_transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:pt-24">
        <div className="reveal relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {c.badge}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {before}
            <span className="text-brand">{c.headlineAccent}</span>
            {after}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-muted">{c.subhead}</p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={CTA_HREF}
              className="btn-cta rounded-full px-8 py-3.5 text-center text-base font-bold shadow-xl shadow-brand/30 transition"
            >
              {c.ctaPrimary}
            </a>
            <a
              href="#showcase"
              className="rounded-full border border-brand/25 px-8 py-3.5 text-center text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {c.ctaSecondary}
            </a>
          </div>

          {/* Second entry point, under the CTAs rather than beside them: the app
              and the web panel are two ways in, not two more buttons to weigh up
              before the primary one. Each link is omitted entirely while its URL
              is unset. */}
          {(PLAY_STORE_URL || APP_URL) && (
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              {PLAY_STORE_URL && (
                <a
                  href={PLAY_STORE_URL}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-2.5 text-left transition hover:border-brand/40 hover:shadow-md"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0"
                  >
                    <path d="M3.6 1.8a1 1 0 0 0-.5.9v18.6a1 1 0 0 0 .5.9l9.7-10.2z" fill="#00d3ff" />
                    <path d="M17.2 8.4 13.9 6.5 4.2 1.2 14 11.5z" fill="#ffce00" />
                    <path d="M17.2 15.6 13.9 17.5 4.2 22.8 14 12.5z" fill="#ff3a44" />
                    <path d="m14 12 3.2 3.6 3.4-1.9c.9-.5.9-1.9 0-2.4l-3.4-1.9z" fill="#00f076" />
                  </svg>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                      {c.playStoreEyebrow}
                    </span>
                    <span className="block text-sm font-bold leading-tight">
                      {c.playStoreName}
                    </span>
                  </span>
                </a>
              )}
              {APP_URL && (
                <a
                  href={APP_URL}
                  className="text-sm font-bold text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
                >
                  {c.webPanel}
                </a>
              )}
            </div>
          )}

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 sm:mt-12 sm:gap-6">
            {c.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-brand">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* `sm:block`, not `xl:block`: from 640px up the phone column is the
              full grid width, so a card at the edge clears the 290px frame
              without covering it. Below that there is no room either side and
              the card would sit on top of the screen it is meant to sell. */}
          <div
            style={{ "--tilt": "3deg" } as React.CSSProperties}
            className="float-card absolute top-4 left-0 z-10 hidden rounded-2xl bg-card px-4 py-3 shadow-xl sm:block"
          >
            <p className="text-xs font-bold text-accent">{c.floatPaid}</p>
            <p className="text-[11px] text-ink-muted">{c.floatPaidDetail}</p>
          </div>
          <PhoneFrame label={c.dashboardLabel} className="rotate-[-2deg]">
            <DashboardScreen />
          </PhoneFrame>
          <div
            style={{ "--tilt": "-2deg" } as React.CSSProperties}
            className="float-card float-card-late absolute bottom-8 left-0 z-10 hidden rounded-2xl bg-card px-4 py-3 shadow-xl sm:block"
          >
            <p className="text-xs font-bold text-brand">{c.floatShared}</p>
            <p className="text-[11px] text-ink-muted">{c.floatSharedDetail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
