import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const targetItems = [
  "Seus clientes pedem cada vez mais visão estratégica de growth, e você sente que a entrega atual não está na altura dessa expectativa",
  "Você já tentou terceirizar e teve problemas com alinhamento, qualidade ou comprometimento",
  "Você quer escalar a carteira sem precisar contratar um sênior novo para cada cliente que entra",
  "Você enxerga growth como um diferencial competitivo da agência, e quer que isso apareça na entrega, não só no pitch"
];

const GlaasTargetAudience = () => {
  return (
    <section className="py-24 bg-black border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-8">
              Para quem <span className="text-brand-neon">é</span>
            </h2>
            <p className="text-xl text-brand-light/80 font-light leading-relaxed">
              O GLAaS foi feito para agências que querem crescer sem perder a qualidade de entrega.
            </p>
            <p className="text-lg text-brand-light/60 mt-4">Faz sentido para você se:</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {targetItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0a0a0a] p-8 rounded-2xl border border-brand-light/10 flex gap-4 hover:border-brand-neon/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-brand-neon" />
                </div>
                <p className="text-brand-light/80 font-light leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlaasTargetAudience;
