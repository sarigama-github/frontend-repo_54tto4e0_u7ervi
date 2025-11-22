import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedPosts from './components/FeaturedPosts';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <SEO/>
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(56,189,248,0.08),transparent),radial-gradient(40%_40%_at_80%_0%,rgba(168,85,247,0.06),transparent)]"/>
      <Navbar/>
      <Hero/>
      <CategoryGrid/>
      <FeaturedPosts/>

      <footer id="subscribe" className="relative border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white text-2xl font-bold">Join 25,000+ readers</h3>
            <p className="text-slate-300 mt-2">A weekly newsletter with the best stories in security, cloud, and AI.</p>
          </div>
          <form className="grid sm:grid-cols-[1fr_auto] gap-3">
            <input required type="email" placeholder="your@email.com" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"/>
            <button className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-200 transition">Subscribe</button>
          </form>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 text-xs text-slate-400">© {new Date().getFullYear()} Pulse Tech. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
