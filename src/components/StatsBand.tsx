import Image from "next/image";
import { hasImage } from "@/lib/images";
import { SITE } from "@/lib/site";

const stats = [
  { value: String(SITE.founded), label: "Year we started" },
  { value: SITE.projects, label: "Projects supplied and erected" },
  { value: "Tamil Nadu", label: "Where we work, from Chennai" },
  { value: "2 to 20 ft", label: "Pipe lengths in stock" },
];

export default function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-steel text-white">
      {hasImage("stats-bg.jpg") && (
        <>
          <Image
            src="/images/stats-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/80" />
        </>
      )}
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-12 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="border-l-4 border-safety pl-4">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              {s.value}
            </dd>
            <dd className="text-sm text-white/80" aria-hidden>
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
