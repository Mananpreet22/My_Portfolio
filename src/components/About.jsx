export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar placeholder / art duality visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-3xl border border-[#4F8EF7]/20 rotate-3" />
              <div className="absolute inset-0 rounded-3xl border border-[#C084FC]/20 -rotate-3" />

              {/* Main card split in two */}
              <div className="relative rounded-3xl overflow-hidden h-full bg-[#111827] border border-white/5">
                {/* Left half — dev */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#0d1117] flex flex-col items-center justify-center gap-4 p-4">
                  <div className="font-mono text-xs text-[#4F8EF7]/60 space-y-1 text-left w-full">
                    {['while(true) {', '  build()', '  ship()', '  repeat()', '}'].map((l, i) => (
                      <div key={i} style={{ paddingLeft: l.startsWith('  ') ? '0.75rem' : 0 }}>{l}</div>
                    ))}
                  </div>
                </div>

                {/* Right half — art */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 flex flex-col items-center justify-center gap-2 p-4"
                  style={{ background: 'radial-gradient(circle at 70% 30%, rgba(192,132,252,0.15), transparent 70%)' }}
                >
                  {/* Abstract brush strokes */}
                  <svg viewBox="0 0 100 120" className="w-full opacity-70">
                    <ellipse cx="50" cy="30" rx="30" ry="8" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" transform="rotate(-20 50 30)" opacity="0.6"/>
                    <ellipse cx="40" cy="60" rx="25" ry="6" fill="none" stroke="#4F8EF7" strokeWidth="2.5" strokeLinecap="round" transform="rotate(10 40 60)" opacity="0.5"/>
                    <ellipse cx="55" cy="90" rx="20" ry="5" fill="none" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" transform="rotate(-5 55 90)" opacity="0.7"/>
                    <path d="M30 20 Q60 50 40 80 Q50 95 70 100" fill="none" stroke="#f0abfc" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                </div>

                {/* Center divider line */}
                <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-6 inset-x-0 text-center">
                  <p className="font-serif font-bold text-white text-lg">Mananpreet Singh</p>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">Dev × Artist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase mb-3">
                // About me
              </p>
              <h2 className="font-serif text-4xl font-bold text-white">
                Two worlds,{' '}
                <span className="text-gradient-dual">one vision</span>
              </h2>
            </div>

            <p className="font-sans text-slate-400 leading-relaxed">
              I'm a full-stack developer with 2 years of experience building scalable web apps,
              and a digital artist obsessed with generative visuals, abstract painting, and the
              intersection of code and creativity.
            </p>

            <p className="font-sans text-slate-400 leading-relaxed">
              My work blurs the boundary between engineering and expression — from pixel-perfect
              interfaces powered by clean architecture, to canvases where algorithms paint dreams.
              Every project carries both a developer's precision and an artist's soul.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Based in', value: 'India, Harayan ,Assandh' },
                { label: 'Education', value: 'BCA + Fine art' },
                { label: 'Focus', value: 'React · Node · Digital Art & Conceptual Design' },
                { label: 'Medium', value: 'Digital · Acrylic · Traditional' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#111827] rounded-lg p-4 border border-white/5">
                  <p className="font-mono text-xs text-slate-500 mb-1">{label}</p>
                  <p className="font-sans text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#4F8EF7] hover:text-[#93c5fd] transition-colors group"
            >
              Let's work together
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
