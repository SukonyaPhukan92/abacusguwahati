/** Decorative abacus illustration. Beads drift gently; disabled under reduced motion. */
const rows = [
  { y: 60, beads: [0, 1, 2, 3], slide: 26 },
  { y: 110, beads: [0, 1, 2, 3], slide: -22 },
  { y: 160, beads: [0, 1, 2, 3], slide: 30 },
  { y: 210, beads: [0, 1, 2, 3], slide: -18 },
  { y: 260, beads: [0, 1, 2, 3], slide: 24 },
]
const colours = ['#f58634', '#c52a2a', '#f5b50a', '#3a3a3a', '#2e9e6a']

export default function Abacus({ className = '' }) {
  return (
    <svg viewBox="0 0 400 340" className={className} role="img" aria-label="Illustration of an abacus">
      <rect x="20" y="20" width="360" height="300" rx="28" fill="#fff" stroke="#2e2b33" strokeWidth="10" />
      <rect x="20" y="20" width="360" height="300" rx="28" fill="#fff8f2" opacity=".6" />
      {rows.map((r, ri) => (
        <g key={r.y}>
          <line x1="40" x2="360" y1={r.y} y2={r.y} stroke="#2e2b33" strokeWidth="4" strokeLinecap="round" />
          {r.beads.map((b) => (
            <ellipse
              key={b}
              className="animate-bead"
              style={{ '--slide': `${r.slide}px`, animationDelay: `${ri * 0.5 + b * 0.08}s` }}
              cx={70 + b * 34}
              cy={r.y}
              rx="16"
              ry="20"
              fill={colours[ri]}
              stroke="#2e2b33"
              strokeWidth="3"
            />
          ))}
          <ellipse cx="290" cy={r.y} rx="16" ry="20" fill={colours[ri]} opacity=".35" stroke="#2e2b33" strokeWidth="3" />
        </g>
      ))}
    </svg>
  )
}

export function NumberMotifs() {
  const items = [['3', 'left-[2%] bottom-6 text-brand-200'], ['7', 'right-[6%] top-40 text-rose-200'], ['+', 'left-[46%] top-6 text-emerald-200'], ['9', 'right-[30%] bottom-10 text-brand-200']]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {items.map(([n, c]) => (
        <span key={n + c} className={`absolute animate-floaty select-none text-8xl font-extrabold opacity-70 ${c}`}>{n}</span>
      ))}
    </div>
  )
}
