import type { Metadata } from "next";
import Link from "next/link";
import PipeSpec from "@/components/PipeSpec";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "What we rent" };

export default function ProductsPage() {
  return (
    <main className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">What we rent</h1>
        <p className="mb-12 max-w-prose text-steel">
          Call or WhatsApp us with your requirement. We quote after
          understanding your site.
        </p>

        <div className="grid items-start gap-10 md:grid-cols-2">
          <section aria-labelledby="pipes" className="bg-white p-6 md:p-8">
            <h2 id="pipes" className="mb-2 text-3xl font-bold">Scaffolding pipes</h2>
            <p className="mb-6 text-steel">Four lengths: 2 ft, 4 ft, 6 ft and 20 ft.</p>
            <PipeSpec />
          </section>

          <div className="space-y-6">
            <section aria-labelledby="shed" className="border-l-4 border-safety bg-white p-6 md:p-8">
              <h2 id="shed" className="mb-2 text-3xl font-bold">Shed and sheeting</h2>
              <p className="text-steel">Temporary shed and sheeting work on request.</p>
            </section>
            <section aria-labelledby="erect" className="border-l-4 border-safety bg-white p-6 md:p-8">
              <h2 id="erect" className="mb-2 text-3xl font-bold">Erection and dismantling</h2>
              <p className="text-steel">Our crew can erect and dismantle on your site.</p>
            </section>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={SITE.whatsappHref} className="bg-safety px-6 py-3 text-center font-semibold hover:brightness-95">
                WhatsApp for a quote
              </a>
              <Link href="/contact" className="border-2 border-ink px-6 py-3 text-center font-semibold hover:bg-ink/5">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
