import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Activity, TrendingUp, Cpu } from 'lucide-react';

const capabilities = [
  {
    icon: Target,
    label: 'Redução de CAC',
    desc: 'Mídia paga, SEO e criativos otimizados por IA de forma contínua.',
  },
  {
    icon: Activity,
    label: 'Mais Conversão',
    desc: 'Diagnóstico de funil, testes e personalização orientados por dados.',
  },
  {
    icon: TrendingUp,
    label: 'Retenção & LTV',
    desc: 'Churn previsto antes de acontecer. Receita expandida com inteligência.',
  },
  {
    icon: Cpu,
    label: 'Eficiência Operacional',
    desc: 'Agentes e copilotos de IA que escalam sua operação sem aumentar headcount.',
  },
];

const AiHomeSection = () => {
  return (
    <section className="py-28 bg-brand-dark relative overflow-hidden border-t border-brand-light/5">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-neon/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-sm font-semibold tracking-widest uppercase mb-6"
          >
            AI-Led Growth
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-brand-light leading-[1.05] mb-6"
          >
            Sua próxima alavanca de{' '}
            <span className="text-brand-neon">crescimento</span>{' '}
            já tem nome:{' '}
            <span className="text-brand-neon">Inteligência Artificial</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-light/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto"
          >
            Não implementamos IA por modismo. Aplicamos onde existe problema real,
            dado disponível e resultado mensurável — em aquisição, conversão e retenção.
          </motion.p>
        </div>

        {/* ── Capability cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-brand-light/5 border border-brand-light/10 hover:border-brand-neon/30 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-brand-neon/10 text-brand-neon group-hover:bg-brand-neon group-hover:text-black transition-all duration-300 inline-flex mb-4">
                  <Icon size={22} />
                </div>
                <h4 className="text-base font-bold text-brand-light group-hover:text-brand-neon transition-colors mb-2">
                  {cap.label}
                </h4>
                <p className="text-brand-light/55 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-brand-neon/5 border border-brand-neon/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-neon rounded-tl-3xl -translate-x-px -translate-y-px pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-neon rounded-br-3xl translate-x-px translate-y-px pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-neon/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <p className="text-brand-neon text-xs font-bold uppercase tracking-widest mb-3">
              Descubra como a IA pode transformar o seu negócio
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-light tracking-tight mb-2">
              Veja todas as soluções de IA da Velora
            </h3>
            <p className="text-brand-light/55 text-sm md:text-base max-w-lg">
              Da redução de custo de aquisição à previsão de churn — conheça como
              estruturamos IA com estratégia, dados e resultado mensurável.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Link
              to="/ia-led-growth"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-neon text-black font-bold text-sm rounded-lg hover:bg-brand-neon/90 transition-all duration-300 group shadow-[0_0_30px_rgba(198,240,0,0.15)] hover:shadow-[0_0_40px_rgba(198,240,0,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Explorar soluções de IA
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AiHomeSection;
