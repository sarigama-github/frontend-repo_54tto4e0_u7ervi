import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-amber-400 animate-pulse"/>
              Fresh insights on Security, Cloud & AI
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              The premium hub for tech minds
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Deep-dive articles, hands-on tutorials, and expert commentary across Cybersecurity, Cloud Computing, and Artificial Intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#latest" className="rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-slate-200 transition">Read latest</a>
              <a href="#subscribe" className="rounded-full bg-white/10 backdrop-blur border border-white/10 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition">Subscribe</a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 overflow-hidden"
            >
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            <div className="pointer-events-none absolute -inset-16 -z-0 bg-[radial-gradient(100%_50%_at_50%_50%,rgba(124,58,237,0.25),transparent_60%)]"/>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-violet-500/10 via-sky-500/5 to-transparent"/>
    </section>
  );
}
