import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const WorkshopFinalCTA = () => (
  <section className="py-24 md:py-32 bg-black relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-neon/10 rounded-full blur-[200px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-6">
          Pronto para escalar seus{' '}
          <span className="text-brand-neon">resultados?</span>
        </h2>

        <p className="text-lg text-brand-light/60 mb-4 leading-relaxed">
          8 horas de imersão. 1 plano de crescimento. Método comprovado em +218 negócios.
        </p>

        <div className="flex items-center justify-center gap-2 text-brand-light/40 text-sm mb-10">
          <Users size={16} className="text-brand-neon" />
          <span>Apenas 12 vagas — turmas reduzidas para máxima qualidade</span>
        </div>

        <a
          href="#oferta"
          className="group inline-flex items-center gap-3 bg-brand-neon text-brand-dark px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-[0_0_40px_rgba(198,240,0,0.3)] hover:shadow-[0_0_60px_rgba(198,240,0,0.5)]"
        >
          Últimas vagas — Garantir minha participação
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </a>

        <p className="text-xs text-brand-light/30 mt-6">
          De R$ 997 por 5x R$ 139,40 · Garantia de 7 dias
        </p>
      </motion.div>
    </div>
  </section>
);

export default WorkshopFinalCTA;
