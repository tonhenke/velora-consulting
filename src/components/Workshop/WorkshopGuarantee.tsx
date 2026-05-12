import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const WorkshopGuarantee = () => (
  <section className="py-20 bg-brand-dark relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-neon/10 border border-brand-neon/20 rounded-2xl mb-6">
          <ShieldCheck size={32} className="text-brand-neon" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-light mb-4">
          Garantia de 7 dias
        </h2>

        <p className="text-lg text-brand-light/60 leading-relaxed mb-4">
          Se após participar do workshop você sentir que o conteúdo não entregou o valor prometido, 
          devolvemos 100% do seu investimento. Sem burocracia, sem perguntas.
        </p>

        <p className="text-base font-semibold text-brand-neon/80">
          Confiamos no que entregamos. O risco é todo nosso.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WorkshopGuarantee;
