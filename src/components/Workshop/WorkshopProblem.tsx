import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Gauge, AlertTriangle } from 'lucide-react';

const pains = [
  { icon: DollarSign, title: 'Campanhas caras', desc: 'Você investe cada vez mais em mídia, mas o retorno não acompanha o investimento.' },
  { icon: Gauge, title: 'Métricas estagnadas', desc: 'Os números não se movem. Tráfego sobe, mas conversão e receita ficam parados.' },
  { icon: AlertTriangle, title: 'Pressão por resultado', desc: 'A cobrança aumenta, o orçamento aperta, e ninguém sabe o que priorizar.' },
  { icon: TrendingDown, title: 'Falta de método', desc: 'Tentativas isoladas, sem processo. Cada semana uma ideia nova que não se sustenta.' },
];

const WorkshopProblem = () => (
  <section className="py-24 md:py-32 bg-black relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-6">
          Você sente que está{' '}
          <span className="text-red-400">pedalando sem sair do lugar?</span>
        </h2>
        <p className="text-lg text-brand-light/50 max-w-2xl mx-auto">
          Se algum desses cenários parece familiar, você não está sozinho.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {pains.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-red-500/20 transition-colors duration-300"
          >
            <div className="p-3 bg-red-500/10 rounded-xl w-fit mb-4">
              <p.icon size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-brand-light mb-2">{p.title}</h3>
            <p className="text-sm text-brand-light/50 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-block bg-brand-neon/10 border border-brand-neon/20 rounded-2xl px-8 py-6 max-w-2xl">
          <p className="text-xl md:text-2xl font-bold text-brand-light">
            Não é falta de esforço.{' '}
            <span className="text-brand-neon">É falta do framework certo.</span>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkshopProblem;
