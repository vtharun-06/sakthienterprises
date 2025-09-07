// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-yellow-700 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-white-600">
          Sakthi Enterprises
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link href="/" className="text-white-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-yellow-700 shadow-md">
          <ul className="flex flex-col items-center py-4 gap-4 font-medium text-white-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
