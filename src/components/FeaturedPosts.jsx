import { motion } from 'framer-motion';

const posts = [
  {
    tag: 'Cybersecurity',
    title: 'Defending against AI-powered phishing at scale',
    excerpt: 'How to blend behavior analytics, passkeys, and zero-trust segmentation to stop social engineering.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    tag: 'Cloud',
    title: 'FinOps playbook: cut cloud costs without slowing teams',
    excerpt: 'Rightsizing, demand shaping, and smart autoscaling patterns that keep velocity high.',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    tag: 'AI',
    title: 'From prototype to production: shipping GenAI features safely',
    excerpt: 'Guardrails, evals, and observability for LLM apps that users actually trust.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];

export default function FeaturedPosts() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured deep-dives</h2>
          <p className="text-slate-300 mt-2">Premium reads handpicked by our editors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"/>
                <div className="absolute left-4 bottom-4 text-xs text-white/90 bg-white/10 backdrop-blur px-2 py-1 rounded-full border border-white/10">{p.tag}</div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>
                <div className="mt-4 text-sm text-sky-300">Continue reading →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-60 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(147,51,234,0.12),transparent)]"/>
    </section>
  );
}
