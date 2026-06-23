import { useEffect, useRef, useState } from 'react'

const CODE_LINES = [
  'const create = (idea) => {',
  '  return art.merge(code, idea)',
  '}',
  '',
  'function renderDreams(canvas) {',
  '  const brush = new Brush()',
  '  brush.color = "#C084FC"',
  '  brush.paint(canvas)',
  '}',
  '',
  'export default { create, renderDreams }',
]

export default function Hero() {
  const [typedLines, setTypedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) return

    intervalRef.current = setInterval(() => {
      const line = CODE_LINES[currentLine]

      if (currentChar < line.length) {
        setCurrentChar((c) => c + 1)
      } else {
        setTypedLines((prev) => [...prev, line])
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }
    }, 40)

    return () => clearInterval(intervalRef.current)
  }, [currentLine, currentChar])

  const currentDisplayLine =
    currentLine < CODE_LINES.length
      ? CODE_LINES[currentLine].slice(0, currentChar)
      : null

  const tokenize = (line) => {
    if (!line) return <span>&nbsp;</span>
    return line
      .replace(/(".*?")/g, '<span class="text-[#C084FC]">$1</span>')
      .replace(/\b(const|function|return|export|default|new)\b/g, '<span class="text-[#4F8EF7]">$1</span>')
      .replace(/\b(create|renderDreams|merge|paint|Brush|art|brush|canvas|idea|code)\b/g, '<span class="text-[#86efac]">$1</span>')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F8EF7]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C084FC]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(79,142,247,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,247,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — dev side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4F8EF7]/30 bg-[#4F8EF7]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              <span className="font-mono text-xs text-[#4F8EF7]">Available for work</span>
            </div>

            <div>
              <p className="font-mono text-sm text-[#4F8EF7] mb-3 tracking-widest uppercase">
                // Full-stack Developer
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Mananpreet</span>
                <br />
                <span className="text-gradient-dual">Singh</span>
              </h1>
              <p className="font-serif italic text-xl text-[#C084FC] mt-2">
                & Artist
              </p>
            </div>

            <p className="font-sans text-slate-400 text-base leading-relaxed max-w-sm">
              I build elegant software by day and paint digital worlds by night.
              Code is my structure, art is my voice — and I refuse to choose between them.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="font-mono text-sm px-6 py-3 rounded bg-[#4F8EF7] text-[#090D1A] font-bold hover:bg-[#93c5fd] transition-all duration-300 hover:shadow-lg hover:shadow-[#4F8EF7]/25"
              >
                View Projects
              </a>
              <a
                href="#art"
                className="font-mono text-sm px-6 py-3 rounded border border-[#C084FC]/50 text-[#C084FC] hover:bg-[#C084FC]/10 transition-all duration-300"
              >
                See Artwork
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {[
                { label: 'Projects', value: '8+' },
                { label: 'Years Exp.', value: '2+' },
                { label: 'Art Pieces', value: '10+' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-xl font-bold text-gradient-dual">{value}</p>
                  <p className="font-sans text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code terminal / art side */}
          <div className="relative animate-float" style={{ animationDelay: '1s' }}>
            {/* Terminal window */}
            <div className="rounded-xl border border-white/10 bg-[#111827]/80 backdrop-blur overflow-hidden shadow-2xl">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d1117]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-slate-500 ml-2">portfolio.js</span>
              </div>

              <div className="p-5 font-mono text-sm leading-7 min-h-64">
                {typedLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-slate-600 select-none w-4 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{ __html: tokenize(line) || '&nbsp;' }}
                    />
                  </div>
                ))}
                {currentDisplayLine !== null && (
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none w-4 text-right shrink-0">
                      {typedLines.length + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: tokenize(currentDisplayLine) }} />
                    <span className="animate-blink text-[#C084FC]">▋</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating art badge */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-[#C084FC]/30 bg-[#1B2A4A] flex flex-col items-center justify-center animate-glow-violet">
              <span className="text-3xl">🎨</span>
              <span className="font-mono text-xs text-[#C084FC] mt-1">Artist</span>
            </div>

            {/* Floating dev badge */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border border-[#4F8EF7]/30 bg-[#1B2A4A] flex flex-col items-center justify-center animate-glow-blue">
              <span className="text-2xl">⌨️</span>
              <span className="font-mono text-xs text-[#4F8EF7] mt-1">Dev</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-20">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group">
            <span className="font-mono text-xs tracking-widest">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent group-hover:h-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
