import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="bg-paper py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="mb-4 text-5xl font-bold">Page not found</h1>
        <p className="mb-8 text-steel">
          This page does not exist. You can go back to the home page, or call us on {SITE.phone}.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="bg-safety px-6 py-3 text-center font-semibold hover:brightness-95">Home</Link>
          <Link href={SITE.rentalPath} className="border-2 border-ink px-6 py-3 text-center font-semibold hover:bg-ink/5">Scaffolding on rent</Link>
        </div>
      </div>
    </main>
  );
}
