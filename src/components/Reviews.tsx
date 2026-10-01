import { reviews } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export default function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section className="bg-paper py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="reviews-heading" className="mb-8 text-4xl font-bold md:text-5xl">What customers say</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name + r.text.slice(0, 12)} className="border-t-4 border-safety bg-white p-6">
              <p className="text-steel">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-4 font-semibold">{r.name}</p>
              {r.source && <p className="text-sm text-steel">{r.source}</p>}
            </li>
          ))}
        </ul>
        <a href={SITE.googleProfile} className="mt-8 inline-block border-b-2 border-safety pb-0.5 font-semibold">
          Read more reviews on Google
        </a>
      </div>
    </section>
  );
}
