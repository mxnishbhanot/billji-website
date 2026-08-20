import { faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="bg-card py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions? Answered.
          </h2>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-4 open:bg-brand-soft/30 sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-[15px] font-bold sm:items-center sm:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="mt-0.5 flex h-7 w-7 sm:mt-0 shrink-0 items-center justify-center rounded-full bg-card text-brand shadow-sm transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
