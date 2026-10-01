import Image from "next/image";
import Blueprint from "./Blueprint";
import { hasImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function HeroSection() {
  const photo = hasImage("hero.jpg");
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {photo ? (
        <>
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(60,120,181,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(60,120,181,.35) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <Blueprint className="absolute -right-10 bottom-0 -z-10 hidden h-[110%] w-auto text-plan/60 md:block" />
        </>
      )}

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
        <h1 className="max-w-3xl text-5xl font-bold md:text-7xl">
          Scaffolding on rent in Chennai, erected by our own crew.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          A family business since {SITE.founded}. Send us your site location
          and dates. We call you back with a quote.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE.whatsappHref}
            className="bg-safety px-7 py-4 text-center text-lg font-semibold text-ink hover:brightness-95"
          >
            WhatsApp for a quote
          </a>
          <a
            href={SITE.phoneHref}
            className="border-2 border-white/80 px-7 py-4 text-center text-lg font-semibold hover:bg-white/10"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
