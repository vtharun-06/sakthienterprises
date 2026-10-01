import type { Metadata } from "next";
import Link from "next/link";
import Delivery from "@/components/Delivery";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/GetQuote";
import JsonLd from "@/components/JsonLd";
import PipeSpec from "@/components/PipeSpec";
import { faq } from "@/lib/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scaffolding on Rent in Chennai",
  description:
    "Scaffolding pipes on rent in Chennai and across Tamil Nadu, with erection and dismantling by our crew. Family business since 1999. Call or WhatsApp for a quote.",
  alternates: { canonical: SITE.rentalPath },
  openGraph: { url: SITE.rentalPath, title: "Scaffolding on Rent in Chennai | Sakthi Enterprises" },
};

const quoteInfo = [
  "Your site location",
  "Height of the building",
  "Length of each side to be covered",
  "Type of work: plastering, painting, brickwork, repairs or other",
  "How long you need the scaffolding",
  "Whether you want us to erect and dismantle it",
];

export default function RentalPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Scaffolding on rent in Chennai",
              serviceType: "Scaffolding rental, erection and dismantling",
              areaServed: { "@type": "State", name: "Tamil Nadu" },
              provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url, telephone: "+91-9840062692" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "Scaffolding on rent in Chennai", item: SITE.url + SITE.rentalPath },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <Link href="/" className="underline underline-offset-4">Home</Link> / Scaffolding on rent
          </nav>
          <h1 className="max-w-3xl text-5xl font-bold md:text-6xl">Scaffolding on rent in Chennai</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            We rent scaffolding pipes to contractors and builders in Chennai and across Tamil Nadu.
            Our crew can erect and dismantle it on your site. Send us your site details and we
            call you back with a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.whatsappHref} className="bg-safety px-7 py-4 text-center text-lg font-semibold text-ink hover:brightness-95">WhatsApp for a quote</a>
            <a href={SITE.phoneHref} className="border-2 border-white/80 px-7 py-4 text-center text-lg font-semibold hover:bg-white/10">Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24" aria-labelledby="what-we-rent">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 id="what-we-rent" className="mb-4 text-4xl font-bold md:text-5xl">What we rent</h2>
            <p className="mb-4 max-w-prose text-steel">
              Steel scaffolding pipes in four lengths: 2 ft, 4 ft, 6 ft and 20 ft. Short lengths
              suit tight corners and small adjustments. The 20 ft length runs full height on taller
              frames. Tell us what you are building and we suggest the mix.
            </p>
            <p className="max-w-prose text-steel">
              We buy our material from manufacturers and keep it in stock for rent, so you hire
              only what your job needs and return it when the work is done.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8"><PipeSpec /></div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="quote-info">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 id="quote-info" className="mb-4 text-4xl font-bold md:text-5xl">How much scaffolding do you need?</h2>
            <p className="max-w-prose text-steel">
              The quantity depends on how tall the building is, how much wall you need to reach,
              and the kind of work. We estimate it from your site details, so you do not have to
              work it out yourself. A rough height and length is enough to start.
            </p>
          </div>
          <div className="border-l-4 border-safety bg-paper p-6">
            <h3 className="mb-3 text-2xl font-bold">Send us these details</h3>
            <ul className="space-y-2 text-steel">
              {quoteInfo.map((i) => (
                <li key={i} className="flex gap-3"><span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-safety" />{i}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel">Photos of the site help. You can send them on WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24" aria-labelledby="services">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 id="services" className="mb-10 text-4xl font-bold md:text-5xl">Erection and shed work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="border-t-4 border-safety bg-white p-6">
              <h3 className="mb-2 text-2xl font-bold">Erection and dismantling</h3>
              <p className="text-steel">
                We arrange a crew of labourers who put up the scaffolding on your site and take it
                down when you finish. You deal with one number from first call to last pipe.
              </p>
            </article>
            <article className="border-t-4 border-safety bg-white p-6">
              <h3 className="mb-2 text-2xl font-bold">Shed and sheeting</h3>
              <p className="text-steel">
                We take up temporary shed and sheeting work on request. Tell us the size and
                location and we quote.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Delivery />
      <Faq heading="Scaffolding on rent: your questions" />
      <FinalCTA />
    </main>
  );
}
