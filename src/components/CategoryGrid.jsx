import { motion } from 'framer-motion';
import { Shield, Cloud, Brain, Cpu } from 'lucide-react';

const categories = [
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: Shield,
    desc: 'Threat intel, red/blue teaming, incident response, zero trust, SIEM and beyond.',
    gradient: 'from-fuchsia-500/20 via-violet-500/10 to-sky-500/20'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: Cloud,
    desc: 'AWS, Azure, GCP best practices, IaC, cost optimization, Kubernetes & serverless.',
    gradient: 'from-sky-500/20 via-cyan-500/10 to-emerald-500/20'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: Brain,
    desc: 'LLMs, MLOps, GenAI products, vector DBs, model evals, and responsible AI.',
    gradient: 'from-amber-500/20 via-rose-500/10 to-violet-500/20'
  },
  {
    id: 'dev',
    title: 'Engineering',
    icon: Cpu,
    desc: 'Dev tooling, performance, security-by-design, patterns, and architecture notes.',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-pink-500/20'
  }
];

export default function CategoryGrid() {
  return (
    <section className="relative py-20" id="latest">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore categories</h2>
            <p className="text-slate-300 mt-2">Curated knowledge across today’s most important tech fronts.</p>
          </div>
          <a href="#subscribe" className="hidden sm:inline-flex rounded-full bg-white/10 border border-white/10 text-white px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">Get weekly insights</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <motion.a
              key={c.id}
              href={`#${c.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition`}/>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
                    {<c.icon className="text-white" size={20}/>}            
                  </div>
                  <h3 className="text-white font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-4 text-xs text-slate-400">Read more →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-32 h-64 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.1),transparent)]"/>
    </section>
  );
}
