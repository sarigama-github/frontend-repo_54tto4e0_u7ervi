import { Menu, Shield, Cloud, Brain, Cpu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-sky-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-full bg-slate-900"></div>
            <div className="absolute inset-0 rounded-full blur-xl opacity-40 bg-gradient-to-tr from-violet-500 via-sky-500 to-amber-400"></div>
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">Pulse Tech</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#security" className="hover:text-white transition-colors inline-flex items-center gap-2"><Shield size={18}/>Cybersecurity</a>
          <a href="#cloud" className="hover:text-white transition-colors inline-flex items-center gap-2"><Cloud size={18}/>Cloud</a>
          <a href="#ai" className="hover:text-white transition-colors inline-flex items-center gap-2"><Brain size={18}/>AI</a>
          <a href="#dev" className="hover:text-white transition-colors inline-flex items-center gap-2"><Cpu size={18}/>Dev</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <input aria-label="Search articles" placeholder="Search articles..." className="peer w-64 rounded-full bg-white/5 border border-white/10 px-4 pl-10 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"/>
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-sky-300"/>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/5 text-slate-300"><Menu/></button>
        </div>
      </div>
    </header>
  );
}
