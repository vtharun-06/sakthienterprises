import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scaffolding Services in Chennai | [Your Company Name]",
  description:
    "We provide reliable scaffolding rental and sales in Chennai. Trusted by contractors for safe, durable, and affordable scaffolding solutions.",
  keywords: [
    "scaffolding in Chennai",
    "construction scaffolding",
    "scaffolding rental",
    "scaffolding company",
    "scaffolding supplier",
  ],
  openGraph: {
    title: "Scaffolding Services in Chennai | [Your Company Name]",
    description:
      "Professional scaffolding solutions for construction projects in Chennai. Safe, reliable, and affordable services.",
    url: "https://yourwebsite.com",
    siteName: "[Your Company Name]",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scaffolding Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffolding Services in Chennai",
    description: "Affordable and safe scaffolding rental & sales in Chennai.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-15">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
