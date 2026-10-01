import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="mb-6 text-5xl font-bold">Privacy</h1>
        <div className="space-y-4 text-steel">
          <p>
            When you send the enquiry form, we receive your name, phone number, email address (if
            given), company (if given) and your message. The form sends these to the owner by
            email, and we use them only to reply to your enquiry.
          </p>
          <p>
            If you call or WhatsApp us, we see the number you call from and what you tell us.
          </p>
          <p>
            This site is hosted on Vercel, which keeps standard server logs and may count page
            visits. Maps on the contact page are provided by Google.
          </p>
          <p>
            To ask us to delete your enquiry, call {SITE.phone} or email{" "}
            <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
