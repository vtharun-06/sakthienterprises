// Proportional dimension drawing of the pipe lengths we rent.
const LENGTHS = [20, 6, 4, 2];
const PX = 18; // px per foot
const ROW = 62;

export default function PipeSpec({ className = "" }: { className?: string }) {
  const w = 20 * PX + 40;
  const h = LENGTHS.length * ROW + 10;
  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full text-ink"
        role="img"
        aria-label="Scaffolding pipes drawn to scale: 20 ft, 6 ft, 4 ft and 2 ft"
      >
        {LENGTHS.map((ft, i) => {
          const y = i * ROW + 10;
          const len = ft * PX;
          return (
            <g key={ft} transform={`translate(20 ${y})`}>
              <rect x={0} y={0} width={len} height={12} rx={6} fill="currentColor" />
              <rect x={0} y={-2} width={9} height={16} rx={2} fill="#FFC20E" />
              <rect x={len - 9} y={-2} width={9} height={16} rx={2} fill="#FFC20E" />
              <g stroke="#3C78B5" strokeWidth="1.5" fill="none">
                <line x1={0} y1={30} x2={len} y2={30} />
                <line x1={0} y1={24} x2={0} y2={36} />
                <line x1={len} y1={24} x2={len} y2={36} />
              </g>
              <text
                x={len / 2}
                y={47}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#3C78B5"
                fontFamily="ui-monospace, Menlo, monospace"
              >
                {ft} ft
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-sm text-steel">
        Drawn to scale. Yellow marks the coupler ends.
      </figcaption>
    </figure>
  );
}
