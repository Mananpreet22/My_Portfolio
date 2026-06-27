const projects = [
  {
    title: 'Accounting App',
    type: 'Full-Stack App',
    desc: 'A real-time collaborative accounting tool built with Python, SQLlite, and Node.js. Features include double-entry bookkeeping, financial reporting, and multi-user support with WebSocket syncing.',
    tags: ['Python', 'Node.js', 'SQLlite'],
    accent: '#4F8EF7',
    icon: '⚡',
    github: 'https://github.com/Mananpreet22/ISP_Accounting',
    live: '#',
  },
  
  {
    title: 'Tic-Tac-Toe',
    type: 'One HTML file game',
    desc: 'A simple yet engaging Tic-Tac-Toe game built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#4F8EF7',
    icon: '❌',
    github: 'https://github.com/Mananpreet22/Tic-Tac-toe',
    live: 'https://mananpreet22.github.io/Tic-Tac-toe/',
  },
  {
    title: 'Amazon Clone',
    type: 'E-Commerce',
    desc: 'A simple Amazon clone built with React.js and Tailwind CSS, featuring a responsive design and a functional shopping cart.',
    tags: ['React.js', 'Tailwind CSS','MySQL'],
    accent: '#4F8EF7',
    icon: '🛒',
    github: 'https://github.com/Mananpreet22/Amazon-',
    live: '#',
  },
  {
    title: 'Dice gambling game',
    type: 'Interactive Experience',
    desc: 'Made a simple dice gambling game using HTML, CSS, and JavaScript. Players can roll the dice and place bets to win or lose virtual currency.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#C084FC',
    icon: '🌌',
    github: 'https://github.com/Mananpreet22/Gambling_app',
    live: 'https://mananpreet22.github.io/Gambling_app/',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase mb-3">
            // Selected work
          </p>
          <h2 className="font-serif text-4xl font-bold text-white">
            Projects that <span className="text-gradient-dual">matter</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-[#111827] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.accent}15, transparent 60%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xl">{p.icon}</span>
                      <h3 className="font-serif text-xl font-bold text-white">{p.title}</h3>
                    </div>
                    <p className="font-mono text-xs" style={{ color: p.accent }}>
                      {p.type}
                    </p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={p.github}
                      className="font-mono text-xs px-3 py-1 rounded border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                    >
                      Code
                    </a>
                    <a
                      href={p.live}
                      style={{ borderColor: `${p.accent}50`, color: p.accent }}
                      className="font-mono text-xs px-3 py-1 rounded border hover:opacity-80 transition-opacity"
                    >
                      Live ↗
                    </a>
                  </div>
                </div>

                <p className="font-sans text-slate-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="font-mono text-sm text-slate-500 hover:text-[#4F8EF7] transition-colors group inline-flex items-center gap-2"
          >
            View all 8 projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
