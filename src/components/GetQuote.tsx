import { SITE } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="bg-safety text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center md:px-6">
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">Need scaffolding for a site?</h2>
          <p className="mt-2 max-w-md">
            Tell us the location and dates. We call you back with a quote.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={SITE.whatsappHref} className="bg-ink px-7 py-4 text-center font-semibold text-white hover:bg-steel">
            WhatsApp us
          </a>
          <a href={SITE.phoneHref} className="border-2 border-ink px-7 py-4 text-center font-semibold hover:bg-ink/10">
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
