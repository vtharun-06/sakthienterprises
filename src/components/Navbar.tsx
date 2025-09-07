// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUp } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // shrink navbar
      setShowScrollTop(window.scrollY > 200); // show button after 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-yellow-700 shadow-lg py-2"
            : "bg-yellow-600 shadow-md py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 transition-all duration-300">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo/sakthitenterprises.png"
              alt="Sakthi Enterprises"
              width={scrolled ? 80 : 90}
              height={50}
              className="object-contain transition-all duration-300"
              priority
            />
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

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition z-50"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}
