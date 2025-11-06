export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#6DA8FF] text-white font-bold">A</div>
            <span className="font-medium text-[#002B5B]">Avi</span>
            <span className="hidden md:inline">— Your home’s best friend.</span>
          </div>
          <nav className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-[#002B5B]">About</a>
            <a href="#" className="hover:text-[#002B5B]">Contact</a>
            <a href="#" className="hover:text-[#002B5B]">Privacy</a>
            <a href="#" className="hover:text-[#002B5B]">Terms</a>
            <a href="#" className="hover:text-[#002B5B]">Socials</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
