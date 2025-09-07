// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-yellow-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-wide"
        >
          Sakthi Enterprises
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-100 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-white hover:text-gray-100 transition duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-gray-100 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-gray-100 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-yellow-600 shadow-lg transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 gap-4 font-medium text-white">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
