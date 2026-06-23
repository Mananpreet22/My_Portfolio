export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-[#4F8EF7]">{'<'}</span>
          <span className="font-serif font-bold text-white">Mananpreet Singh</span>
          <span className="font-mono text-sm text-[#C084FC]">{' />'}</span>
        </div>

        <p className="font-mono text-xs text-slate-600">
          Built with React + Vite + Tailwind · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-1 font-mono text-xs text-slate-600">
          <span className="text-[#4F8EF7]">dev</span>
          <span className="text-slate-700 mx-1">×</span>
          <span className="text-[#C084FC]">art</span>
          <span className="ml-2">— two sides, one portfolio</span>
        </div>
      </div>
    </footer>
  )
}
