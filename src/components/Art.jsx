const artPieces = [
  {
    title: 'Portrait',
    medium: 'Pencil Colours · Paper',
    year: '2024',
    image: 'public/art/First-commisen.jpg',                          
    colors: ['#C084FC', '#4F8EF7', '#090D1A'],
    shape: 'circle',
  },
  {
    title: 'Fine Line portrait',
    medium: 'Pencil · Paper',
    year: '2024',
    image: 'public/art/Dark-Souls.jpg',
    colors: ['#4F8EF7', '#0d1117', '#93c5fd'],
    shape: 'lines',
  },
  {
    title: 'Fantasy Sinobi',
    medium: 'Pencil · paper',
    year: '2024',
    image: 'public/art/Sekiro.jpg',
    colors: ['#C084FC', '#f0abfc', '#1B2A4A'],
    shape: 'wave',
  },
  {
    title: 'Line Art',
    medium: 'Pencil · Paper',
    year: '2023',
    image: 'public/art/line-art.jpg',
    colors: ['#4F8EF7', '#C084FC', '#111827'],
    shape: 'rings',
  },
  {
    title: 'Realestice eye',
    medium: 'Pencil · Paper',
    year: '2023',
    image: 'public/art/eye.jpg',
    colors: ['#86efac', '#4F8EF7', '#0d1117'],
    shape: 'grid',
  },
  {
    title: 'Ancitent scenery',
    medium: 'Aleric colours · Canvas',
    year: '2022',
    image: 'public/art/paint.jpeg',
    colors: ['#f0abfc', '#C084FC', '#090D1A'],
    shape: 'particles',
  },
]

// ── SVG placeholders ────────────

function SvgPlaceholder({ colors, shape }) {
  const [c1, c2, c3] = colors

  if (shape === 'circle') return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c3} />
      <circle cx="100" cy="100" r="70" fill="none" stroke={c1} strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="50" fill={c1} opacity="0.15" />
      <circle cx="100" cy="100" r="30" fill={c2} opacity="0.3" />
      <circle cx="100" cy="100" r="12" fill={c1} opacity="0.8" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1="100" y1="100"
          x2={100 + 65 * Math.cos((i * Math.PI * 2) / 8)}
          y2={100 + 65 * Math.sin((i * Math.PI * 2) / 8)}
          stroke={c1} strokeWidth="0.5" opacity="0.3"
        />
      ))}
    </svg>
  )

  if (shape === 'lines') return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c2} />
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1={i * 16} y1="0"
          x2={i * 16 + 40} y2="200"
          stroke={c1}
          strokeWidth={i % 3 === 0 ? 2 : 0.5}
          opacity={0.3 + (i % 4) * 0.15}
        />
      ))}
      <rect x="40" y="60" width="120" height="80" fill="none"
        stroke={c3 === '#090D1A' ? '#4F8EF7' : c3} strokeWidth="1" opacity="0.5" />
    </svg>
  )

  if (shape === 'wave') return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c3} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M0 ${80 + i * 14} Q50 ${60 + i * 14} 100 ${80 + i * 14} T200 ${80 + i * 14}`}
          fill="none"
          stroke={i % 2 === 0 ? c1 : c2}
          strokeWidth="1.5"
          opacity={0.4 + i * 0.1}
        />
      ))}
    </svg>
  )

  if (shape === 'rings') return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c3} />
      {[90, 75, 60, 45, 30, 15].map((r, i) => (
        <circle
          key={i} cx="100" cy="100" r={r}
          fill="none"
          stroke={i % 2 === 0 ? c1 : c2}
          strokeWidth="1.5"
          opacity={0.2 + i * 0.12}
        />
      ))}
    </svg>
  )

  if (shape === 'grid') return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c3} />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={20 + col * 34} y={20 + row * 34}
            width={28} height={28} rx="4"
            fill={(row + col) % 2 === 0 ? c1 : c2}
            opacity={0.15 + ((row + col) % 3) * 0.15}
          />
        ))
      )}
    </svg>
  )

  // particles 
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={c3} />
      {Array.from({ length: 40 }).map((_, i) => (
        <circle
          key={i}
          cx={20 + (i * 47) % 160}
          cy={20 + (i * 71) % 160}
          r={1 + (i % 4)}
          fill={i % 3 === 0 ? c1 : c2}
          opacity={0.3 + (i % 5) * 0.12}
        />
      ))}
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────

export default function Art() {
  return (
    <section id="art" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#C084FC] tracking-widest uppercase mb-3">
            // Art
          </p>
          <h2 className="font-serif text-4xl font-bold text-white">
            The <span className="text-gradient-violet italic">art</span> side
          </h2>
          <p className="font-sans text-slate-500 mt-3 max-w-md mx-auto text-sm">
            Where algorithms meet intuition. Each piece is either handcrafted
            or generated through code I wrote.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {artPieces.map((piece) => (
            <div
              key={piece.title}
              className="group relative rounded-xl overflow-hidden aspect-square border border-white/5 cursor-pointer hover:border-[#C084FC]/30 transition-all duration-500"
            >
              {/* Image or SVG placeholder */}
              {piece.image ? (
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <SvgPlaceholder colors={piece.colors} shape={piece.shape} />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#090D1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4">
                <h3 className="font-serif text-white font-bold text-center">
                  {piece.title}
                </h3>
                <p className="font-mono text-xs text-[#C084FC]">{piece.medium}</p>
                <p className="font-mono text-xs text-slate-500">{piece.year}</p>
                <button className="mt-2 font-mono text-xs px-4 py-1.5 rounded border border-[#C084FC]/50 text-[#C084FC] hover:bg-[#C084FC]/10 transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="font-mono text-sm text-slate-500 hover:text-[#C084FC] transition-colors group inline-flex items-center gap-2"
          >
            See full gallery (10+ pieces)
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}