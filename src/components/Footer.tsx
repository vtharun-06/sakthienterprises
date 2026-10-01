import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-white">{SITE.name}</h3>
          <p>
            Scaffolding rental and erection in Chennai and Tamil Nadu. Family
            business since {SITE.founded}.
          </p>
        </div>
        <nav aria-label="Footer">
          <h4 className="mb-3 text-lg font-semibold text-white">Pages</h4>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-white">What we rent</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Contact</h4>
          <p className="mb-2">{SITE.address}</p>
          <p><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></p>
          <p><a href={SITE.phone2Href} className="hover:text-white">{SITE.phone2}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
          <p className="mt-2 text-sm">{SITE.hours}</p>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
