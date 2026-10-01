import Image from "next/image";
import Blueprint from "./Blueprint";
import { hasImage } from "@/lib/images";

const services = [
  {
    title: "Scaffolding rental",
    img: "service-rental.jpg",
    alt: "Stacked steel scaffolding pipes in a yard",
    text: "Steel pipes in 2, 4, 6 and 20 ft lengths, hired for the duration of your job.",
  },
  {
    title: "Erection and dismantling",
    img: "service-erection.jpg",
    alt: "Crew erecting scaffolding on a building",
    text: "Our crew erects the scaffold on your site and takes it down when you are done.",
  },
  {
    title: "Shed and sheeting",
    img: "service-shed.jpg",
    alt: "Temporary shed with sheet roofing",
    text: "Temporary shed and sheeting work on request.",
  },
];

export default function Services() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">What we do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-white">
              <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                {hasImage(s.img) ? (
                  <Image
                    src={`/images/${s.img}`}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <Blueprint className="h-full w-full p-5 text-plan" bays={3} levels={2} />
                )}
              </div>
              <div className="border-t-4 border-safety p-6">
                <h3 className="mb-2 text-2xl font-bold">{s.title}</h3>
                <p className="text-steel">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
