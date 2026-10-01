type Props = { className?: string; tone?: "dark" | "light"; showTagline?: boolean };

// Scaffold-frame mark + wordmark. Text is real HTML so it stays sharp and readable.
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" fill="#FFC20E" />
      <g stroke="#13202B" strokeWidth="3" fill="none" strokeLinecap="square">
        <path d="M12 8v32M36 8v32" />
        <path d="M12 14h24M12 26h24M12 38h24" strokeWidth="2.5" />
        <path d="M12 14l24 12M12 26l24 12" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "", tone = "dark", showTagline = true }: Props) {
  const name = tone === "dark" ? "text-ink" : "text-white";
  const tag = tone === "dark" ? "text-steel" : "text-white/75";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.65rem] font-bold uppercase tracking-wide ${name}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sakthi
          <span className="ml-1.5 font-semibold">Enterprises</span>
        </span>
        {showTagline && (
          <span className={`mt-1 hidden text-[0.7rem] font-medium tracking-wider sm:block ${tag}`}>
            Scaffolding on rent · Chennai
          </span>
        )}
      </span>
    </span>
  );
}
