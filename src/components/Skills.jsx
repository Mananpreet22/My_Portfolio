const devSkills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js ', level: 88 },
  { name: 'JavaScript/HTML/CSS', level: 85 },
  { name: 'MYSQL / MongoDB', level: 80 },
  { name: 'Docker / AWS', level: 75 },
  { name: 'Python', level: 70 },
]

const artSkills = [
  { name: 'Traditional Painting/Sketching', level: 92 },
  { name: 'Digital Painting/Sketching', level: 58 },
  { name: 'Concept Art', level: 85 },
  { name: 'Figma', level: 80 },
  { name: 'Illustration', level: 82 },
  { name: 'Acrylic on Canvas', level: 78 },
]

function SkillBar({ name, level, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-sans text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: color,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase mb-3">
            // Skills & tools
          </p>
          <h2 className="font-serif text-4xl font-bold text-white">
            The full <span className="text-gradient-dual">toolkit</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Dev */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center">
                <span className="font-mono text-sm text-[#4F8EF7]">{'{}'}</span>
              </div>
              <h3 className="font-mono text-base font-bold text-[#4F8EF7]">
                Developer Stack
              </h3>
            </div>
            {devSkills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color="linear-gradient(90deg, #4F8EF7, #93c5fd)"
              />
            ))}
          </div>

          {/* Art */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/20 flex items-center justify-center">
                <span className="text-base">✦</span>
              </div>
              <h3 className="font-mono text-base font-bold text-[#C084FC]">
                Artist Craft
              </h3>
            </div>
            {artSkills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                level={s.level}
                color="linear-gradient(90deg, #C084FC, #f0abfc)"
              />
            ))}
          </div>
        </div>

        {/* Tech icons row */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['React', 'TypeScript', 'Node', 'PostgreSQL', 'Docker', 'Figma', 'Three.js', 'AWS', 'Git', 'Python'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-[#4F8EF7]/40 hover:text-[#4F8EF7] transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
