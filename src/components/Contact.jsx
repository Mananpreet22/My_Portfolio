import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', type: 'dev' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase mb-3">
            // Get in touch
          </p>
          <h2 className="font-serif text-4xl font-bold text-white">
            Let's <span className="text-gradient-dual">collaborate</span>
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-sm max-w-sm mx-auto">
            Whether it's a web project, an art commission, or something beautifully in-between — I'm all in.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info */}
          <div className="md:col-span-2 space-y-6">
            {[
              { icon: '✉', label: 'Email', value: 'Mananpreet123@gmail.com', href: 'mailto:Mananpreet123@gmail.com', color: '#4F8EF7' },
              { icon: '🐙', label: 'GitHub', value: 'github.com/Mananpreet22', href: '#', color: '#4F8EF7' },
              { icon: '🎨', label: 'Behance', value: 'somthing.com', href: '#', color: '#C084FC' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/Mananpreet', href: '#', color: '#4F8EF7' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 group p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-mono text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="font-sans text-sm text-slate-300 group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                <div className="text-4xl">✨</div>
                <h3 className="font-serif text-2xl font-bold text-white">Message sent!</h3>
                <p className="font-sans text-slate-400 text-sm">I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSent(false)}
                  className="font-mono text-sm text-[#4F8EF7] hover:text-[#93c5fd] transition-colors mt-2"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Type toggle */}
                <div className="flex gap-2 p-1 bg-[#111827] rounded-lg border border-white/5 w-fit">
                  {['dev', 'art', 'both'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`font-mono text-xs px-4 py-2 rounded-md transition-all duration-300 ${
                        form.type === t
                          ? 'bg-gradient-to-r from-[#4F8EF7]/20 to-[#C084FC]/20 text-white border border-white/10'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {t === 'dev' ? '⌨️ Dev project' : t === 'art' ? '🎨 Art commission' : '✦ Both'}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#4F8EF7]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-slate-500 block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#4F8EF7]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-500 block mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#111827] border border-white/10 rounded-lg px-4 py-3 font-sans text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#4F8EF7]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-mono text-sm py-3 rounded-lg font-bold text-[#090D1A] transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #4F8EF7, #C084FC)' }}
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
