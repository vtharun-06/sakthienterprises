"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SITE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: SITE.rentalPath, label: "Scaffolding on rent" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center py-2" aria-label="Sakthi Enterprises home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-4 py-4 font-medium ${
                  active
                    ? "border-safety text-ink"
                    : "border-transparent text-steel hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-stretch">
          <a
            href={SITE.phoneHref}
            className="hidden items-center bg-safety px-6 font-semibold text-ink hover:brightness-95 md:flex"
          >
            Call {SITE.phone}
          </a>
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center text-2xl md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-ink/10 bg-white md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`block border-l-4 px-5 py-4 font-medium ${
                    pathname === l.href ? "border-safety bg-paper" : "border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
