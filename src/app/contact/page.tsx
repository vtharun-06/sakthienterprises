"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-slate-300 bg-white p-3 text-ink focus:border-yellow-500 focus:outline-none";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-paper py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-ink">Get a quote</h1>
          <p className="mb-6 text-steel">
            Fastest: call or WhatsApp. Or send the form and we will call you
            back.
          </p>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.whatsappHref} className="bg-safety px-5 py-3 text-center font-semibold text-ink hover:brightness-95">
              WhatsApp
            </a>
            <a href={SITE.phoneHref} className="border border-ink px-5 py-3 text-center font-semibold">
              Call {SITE.phone}
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className={field} name="name" placeholder="Your name" required />
            <input className={field} name="phone" type="tel" placeholder="Phone number" required />
            <input className={field} name="company" placeholder="Company (optional)" />
            <input className={field} name="email" type="email" placeholder="Email (optional)" />
            <textarea className={field} name="message" rows={4} placeholder="Site location, what you need, dates" required />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-ink px-6 py-3 font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send enquiry"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "sent" && (
                <span className="text-green-700">Thank you. We will call you back soon.</span>
              )}
              {status === "error" && (
                <span className="text-red-700">
                  Could not send. Please call {SITE.phone} or WhatsApp us.
                </span>
              )}
            </p>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-ink">{SITE.name}</h2>
            <p className="mb-2 text-steel">{SITE.address}</p>
            <p className="text-steel">
              <a href={SITE.phoneHref} className="underline">{SITE.phone}</a>
              {" · "}
              <a href={SITE.phone2Href} className="underline">{SITE.phone2}</a>
            </p>
            <p className="text-steel">
              <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>
            </p>
            <p className="mt-2 text-sm text-slate-500">{SITE.hours}</p>
          </div>
          <iframe
            title="Sakthi Enterprises location"
            src="https://www.google.com/maps?q=13.133307873720655,80.19404284222142&z=17&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            className="border-0 shadow-sm"
          />
        </div>
      </div>
    </main>
  );
}
