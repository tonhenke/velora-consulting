import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const MaaSSolution = () => {
  const benefits = [
    "Gestão completa de Google Ads e Meta Ads",
    "Landing pages otimizadas para conversão",
    "E-mail marketing e automações",
    "Social media com calendário editorial",
    "Analytics e relatórios com BI",
    "Estratégia de Growth personalizada"
  ];

  return (
    <section className="bg-black text-brand-light py-32 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
              Uma equipe completa, <br />
              <span className="italic text-brand-light/40">por uma fração do custo.</span>
            </h2>
            <p className="text-lg font-light text-brand-light/60 mb-10 leading-relaxed max-w-lg">
              O Velora MaaS entrega uma operação de growth full-stack. Tudo o que você precisa para escalar, sem o peso de gerenciar um time gigante.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 font-light text-brand-light/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-neon" strokeWidth={1.5} />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/10 p-10 md:p-14 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/10 blur-[50px]" />
            
            <div className="mb-12">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light/40 block mb-3">Time interno (Head, Mídia, Design, BI)</span>
              <p className="text-4xl font-serif text-brand-light/20 line-through">
                ~R$40.000<span className="font-mono text-sm">/mês</span>
              </p>
            </div>
            
            <div className="h-px bg-white/10 w-full mb-12"></div>
            
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-neon block mb-3">Velora MaaS</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-light text-brand-light/60 mr-1">A partir de</span>
                <p className="text-5xl md:text-6xl font-serif text-brand-light">
                  R$4.990<span className="font-mono text-sm text-brand-light/40">/mês</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaaSSolution;
