// Line drawing of a scaffold bay (front elevation). Decorative only.
export default function Blueprint({
  className = "",
  bays = 4,
  levels = 3,
}: {
  className?: string;
  bays?: number;
  levels?: number;
}) {
  const bayW = 80;
  const levelH = 70;
  const w = bays * bayW;
  const h = levels * levelH;
  const xs = Array.from({ length: bays + 1 }, (_, i) => i * bayW);
  const ys = Array.from({ length: levels + 1 }, (_, i) => i * levelH);
  return (
    <svg
      viewBox={`-20 -20 ${w + 40} ${h + 60}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {xs.map((x) => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={h} strokeWidth="3" />
      ))}
      {ys.map((y) => (
        <line key={`h${y}`} x1={0} y1={y} x2={w} y2={y} />
      ))}
      {Array.from({ length: bays }).flatMap((_, b) =>
        Array.from({ length: levels }).map((__, l) => (
          <line
            key={`d${b}-${l}`}
            x1={b * bayW}
            y1={l * levelH}
            x2={(b + 1) * bayW}
            y2={(l + 1) * levelH}
            strokeDasharray="4 4"
            opacity="0.7"
          />
        ))
      )}
      {xs.map((x) => (
        <rect key={`b${x}`} x={x - 7} y={h} width={14} height={5} />
      ))}
      <line x1={0} y1={h + 24} x2={w} y2={h + 24} strokeWidth="1" />
      <line x1={0} y1={h + 18} x2={0} y2={h + 30} strokeWidth="1" />
      <line x1={w} y1={h + 18} x2={w} y2={h + 30} strokeWidth="1" />
    </svg>
  );
}
