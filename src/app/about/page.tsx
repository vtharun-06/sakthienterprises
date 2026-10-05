import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Blueprint from "@/components/Blueprint";
import FinalCTA from "@/components/GetQuote";
import { founders, promises, team, timeline } from "@/lib/about";
import { hasImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `Sakthi Enterprises is a family business renting and erecting scaffolding in Chennai since ${SITE.founded}.`,
};

export default function AboutPage() {
  const banner = hasImage("hero.jpg");
  const story = hasImage("about.jpg");

  return (
    <main>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        {banner ? (
          <>
            <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-ink/75" />
          </>
        ) : (
          <Blueprint className="absolute -right-10 bottom-0 -z-10 hidden h-[110%] w-auto text-plan/50 md:block" />
        )}
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
            <Link href="/" className="underline underline-offset-4">Home</Link> / About us
          </nav>
          <h1 className="max-w-3xl text-5xl font-bold md:text-6xl">
            A Chennai family, on scaffolding since {SITE.founded}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">Our story</h2>
            <p className="mb-4 max-w-prose text-steel">
              Sakthi Enterprises started in {SITE.founded} as a family business in
              Chennai. We rent scaffolding to contractors and builders, and our own
              crew erects and dismantles it on site.
            </p>
            <p className="mb-4 max-w-prose text-steel">
              We buy our scaffolding material from manufacturers and keep it in
              stock for rent. Over the years we have supplied and erected
              scaffolding on {SITE.projects} projects across Chennai and Tamil
              Nadu, and we also take up temporary shed and sheeting work.
            </p>
            <p className="max-w-prose text-steel">
              Visit us at {SITE.address}. {SITE.hours}.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-safety" aria-hidden />
            <div className="relative h-full w-full overflow-hidden bg-ink">
              {story ? (
                <Image src="/images/about.jpg" alt="Steel scaffolding pipes joined with couplers" fill sizes="(min-width: 768px) 24rem, 90vw" className="object-cover" />
              ) : (
                <Blueprint className="h-full w-full p-6 text-plan" bays={2} levels={4} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-steel text-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 md:px-6">
          {[
            { v: String(SITE.founded), l: "Year we started" },
            { v: SITE.projects, l: "Projects supplied and erected" },
            { v: "Tamil Nadu", l: "Where we work, from Chennai" },
          ].map((s) => (
            <div key={s.l} className="border-l-4 border-safety pl-4">
              <dt className="sr-only">{s.l}</dt>
              <dd className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{s.v}</dd>
              <dd className="text-sm text-white/80" aria-hidden>{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Founders: shown once real names are added in src/lib/about.ts */}
      {founders.length > 0 && (
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">Who runs it</h2>
            <ul className="grid max-w-2xl gap-6">
              {founders.map((f) => (
                <li key={f.name} className="border-l-4 border-safety bg-white p-6">
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{f.name}</p>
                  <p className="text-steel">{f.role}</p>
                  {f.note && <p className="mt-3 text-steel">{f.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Promises */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-10 text-4xl font-bold md:text-5xl">What you can count on</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p.title} className="border-t-4 border-safety bg-white p-6">
                <h3 className="mb-2 text-2xl font-bold">{p.title}</h3>
                <p className="text-steel">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline: needs 3+ real entries */}
      {timeline.length >= 3 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="mb-10 text-4xl font-bold md:text-5xl">How we grew</h2>
            <ol className="border-l-4 border-safety">
              {timeline.map((m) => (
                <li key={m.year + m.text} className="relative pb-8 pl-6">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{m.year}</span>
                  <p className="text-steel">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Team: real photos only */}
      {team.length > 0 && (
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">The team</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((t) => (
                <li key={t.name} className="bg-white">
                  {t.photo && (
                    <div className="relative aspect-square">
                      <Image src={t.photo} alt={t.name} fill sizes="25vw" className="object-cover" />
                    </div>
                  )}
                  <div className="border-t-4 border-safety p-4">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-steel">{t.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}
