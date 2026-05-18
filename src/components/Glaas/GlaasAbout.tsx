import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building2 } from 'lucide-react';

const GlaasAbout = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('glaas-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-brand-light/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-8">
              O que é o <span className="text-brand-neon">GLAaS?</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-light/80 font-light leading-relaxed max-w-3xl mx-auto">
              O GLAaS é um modelo onde um estrategista sênior da Velora passa a atuar junto à sua agência, integrado aos projetos dos seus clientes como parte do time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-brand-light/10 hover:border-brand-neon/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-neon/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-brand-neon" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Para o Cliente</h3>
              <p className="text-brand-light/70 font-light leading-relaxed">
                É transparente, ele interage com alguém que conhece o negócio dele, fala a língua da operação e está presente nas decisões.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-brand-light/10 hover:border-brand-neon/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-neon/10 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-brand-neon" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Para a Agência</h3>
              <p className="text-brand-light/70 font-light leading-relaxed">
                É uma extensão estratégica de confiança: você amplia sua capacidade de entrega em growth sem abrir mão de qualidade, sem o risco de uma contratação e sem depender de freelancers que não têm comprometimento de longo prazo.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToCTA}
              className="px-8 py-4 bg-brand-light/10 text-brand-light font-medium rounded-lg border border-brand-light/20 hover:bg-brand-light/20 hover:border-brand-light/30 transition-all duration-300 flex items-center group"
            >
              Quero conhecer o modelo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasAbout;
