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
    <section className="bg-brand-light text-brand-dark py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Uma equipe de marketing completa,<br />
              <span className="text-gray-400">por uma fração do custo.</span>
            </h2>
            <p className="text-xl font-light text-brand-dark/70 mb-10 leading-relaxed">
              O Velora MaaS (Marketing as a Service) entrega uma operação de growth full-stack. Tudo o que você precisa para escalar, sem o peso de gerenciar um time gigante.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-neon" />
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
            className="bg-zinc-100 rounded-3xl p-8 md:p-12 border border-gray-200"
          >
            <div className="mb-10 text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark/50 block mb-2">Time interno</span>
              <p className="text-3xl font-bold text-brand-dark/30 line-through">
                ~R$40.000/mês
              </p>
            </div>
            
            <div className="h-px bg-gray-200 w-full mb-10"></div>
            
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark block mb-2">Velora MaaS</span>
              <p className="text-4xl md:text-5xl font-bold text-brand-neon bg-brand-dark p-4 rounded-xl inline-block">
                A partir de R$4.990/mês
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaaSSolution;
