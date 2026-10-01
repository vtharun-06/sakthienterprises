import Image from "next/image";
import Link from "next/link";
import Blueprint from "./Blueprint";
import { hasImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function AboutSection() {
  const photo = hasImage("about.jpg");
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Family run, on Chennai sites since {SITE.founded}
          </h2>
          <p className="mb-4 max-w-prose text-steel">
            We buy scaffolding material from manufacturers and rent it to
            contractors. Our own crew erects and dismantles it on your site, so
            you deal with one team from first call to last pipe.
          </p>
          <Link
            href="/about"
            className="inline-block border-b-2 border-safety pb-0.5 font-semibold hover:bg-safety/30"
          >
            Read our story
          </Link>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute -bottom-4 -right-4 h-full w-full bg-safety" aria-hidden />
          <div className="relative h-full w-full overflow-hidden bg-ink">
            {photo ? (
              <Image
                src="/images/about.jpg"
                alt="Steel scaffolding pipes joined with couplers"
                fill
                sizes="(min-width: 768px) 24rem, 90vw"
                className="object-cover"
              />
            ) : (
              <Blueprint className="h-full w-full p-6 text-plan" bays={2} levels={4} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
