import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forWhom = [
  'Empreendedores e empresários',
  'Fundadores de startups',
  'Profissionais de marketing e publicidade',
  'Profissionais que precisam gerar resultado',
];

const notForWhom = [
  'Empreendedores que já cresceram o suficiente',
  'Profissionais que não precisam entregar resultado',
  'Pessoas que não gostam de sair da zona de conforto',
];

const WorkshopForWho = () => (
  <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-4">
          Para quem é <span className="text-brand-neon">esse workshop?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* For whom */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-brand-neon/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-brand-neon mb-6">✅ Para quem é</h3>
          <ul className="space-y-4">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-brand-neon mt-1 flex-shrink-0" />
                <span className="text-brand-light/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not for whom */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-red-400 mb-6">🚫 Para quem NÃO é</h3>
          <ul className="space-y-4">
            {notForWhom.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <span className="text-brand-light/60 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WorkshopForWho;
