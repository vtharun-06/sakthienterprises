import { SITE } from "@/lib/site";

const cities = ["Chennai", "Chengalpattu", "Kanchipuram", "Tiruvallur", "Vellore", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"];

export default function Delivery() {
  return (
    <section className="bg-steel py-16 text-white" aria-labelledby="delivery-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="delivery-heading" className="mb-4 text-4xl font-bold md:text-5xl">
          We deliver anywhere in Tamil Nadu
        </h2>
        <p className="mb-6 max-w-prose text-white/85">
          Our yard is in Chennai. Send us your site location and we arrange delivery. For example:
        </p>
        <ul className="flex flex-wrap gap-2">
          {cities.map((c) => (
            <li key={c} className="border border-white/40 px-3 py-1.5 text-sm">{c}</li>
          ))}
        </ul>
        <a href={SITE.whatsappHref} className="mt-8 inline-block bg-safety px-6 py-3 font-semibold text-ink hover:brightness-95">
          Send your site location on WhatsApp
        </a>
      </div>
    </section>
  );
}
