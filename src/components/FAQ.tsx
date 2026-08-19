import { faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="bg-card py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions? Answered.
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-5 open:bg-brand-soft/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-brand shadow-sm transition group-open:rotate-45">
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
