// src/components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-700 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Sakthi Enterprises Scaffolding (India).
          </h3>
          <p>
            We are a Scaffolding Company with proven expertise in the Steel
            Scaffolding. Providing reliable scaffolding solutions for
            construction and infrastructure projects with a focus on safety and
            efficiency.
          </p>
        </div>

        <div>
          {/* <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>*/}
        </div> 

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p>
            📍 45MV+9J3, Kadappa Rd, Subhash Nagar, Sakthi Nagar, Lakshmipuram,
            Chennai, Tamil Nadu 600080
          </p>
          <p>📞 +91-9840062692</p>
          <p>✉️ sakthienterprises1999@gmail.com</p>
          {/* <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()}  Sakthi Enterprises Scaffolding (India). All rights reserved.
      </div>
    </footer>
  );
}
