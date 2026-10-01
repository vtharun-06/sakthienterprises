import { SITE } from "@/lib/site";

// Always-visible Call + WhatsApp bar on phones.
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/20 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <a href={SITE.phoneHref} className="py-4 text-center font-semibold text-ink">
        Call
      </a>
      <a href={SITE.whatsappHref} className="bg-safety py-4 text-center font-semibold text-ink">
        WhatsApp
      </a>
    </div>
  );
}
