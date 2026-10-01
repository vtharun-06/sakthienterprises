import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-6 text-4xl font-bold text-ink">About us</h1>
        <p className="mb-4 leading-relaxed text-steel">
          Sakthi Enterprises is a family business in Chennai, started in{" "}
          {SITE.founded}. We rent scaffolding to contractors and builders and
          erect it on site with our own crew.
        </p>
        <p className="mb-4 leading-relaxed text-steel">
          We have supplied and erected scaffolding on {SITE.projects} projects
          across Chennai and Tamil Nadu. We also do temporary shed and sheeting
          work.
        </p>
        <p className="leading-relaxed text-steel">
          Visit us at {SITE.address}. Open {SITE.hours}.
        </p>
      </div>
    </main>
  );
}
