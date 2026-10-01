import { faq } from "@/lib/faq";

export default function Faq({
  heading = "Questions contractors ask",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 id="faq-heading" className="mb-8 text-4xl font-bold md:text-5xl">
            {heading}
          </h2>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {f.q}
                  <span
                    aria-hidden
                    className="text-2xl transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
