import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Barlow, Barlow_Condensed } from "next/font/google";
import MobileCta from "@/components/MobileCta";
import { SITE } from "@/lib/site";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Scaffolding on Rent in Chennai | Sakthi Enterprises",
    template: "%s | Sakthi Enterprises",
  },
  description:
    "Scaffolding rental and erection in Chennai and across Tamil Nadu. Family-run since 1999. Call or WhatsApp for a quote.",
  keywords: [
    "scaffolding on rent in Chennai",
    "scaffolding rental Chennai",
    "scaffolding erection Chennai",
    "scaffolding contractor Tamil Nadu",
    "shed and sheeting Chennai",
  ],
  openGraph: {
    title: "Scaffolding on Rent in Chennai | Sakthi Enterprises",
    description:
      "Scaffolding rental and erection in Chennai and across Tamil Nadu. Call or WhatsApp for a quote.",
    url: "/",
    siteName: "Sakthi Enterprises",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE.name,
            url: SITE.url,
            telephone: ["+91-9840062692", "+91-9840879504"],
            email: SITE.email,
            foundingDate: String(SITE.founded),
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kadappa Rd, Subhash Nagar, Lakshmipuram",
              addressLocality: "Chennai",
              addressRegion: "TN",
              postalCode: "600080",
              addressCountry: "IN",
            },
            areaServed: "Tamil Nadu",
            openingHours: "Mo-Sa 09:00-18:00",
            geo: {
              "@type": "GeoCoordinates",
              latitude: "13.1333",
              longitude: "80.1940",
            },
          }),
        }}
      />
      <body className="pb-16 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:bg-safety focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
