import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GlaasHero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('glaas-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-dark/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-sm font-medium tracking-wider mb-6">
              GLAaS PARA AGÊNCIAS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-light mb-8 leading-[1.1]"
          >
            Growth Leader <br />
            <span className="text-brand-neon">As a Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-light/70 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Entregue growth de verdade para seus clientes, sem precisar contratar um perfil sênior para cada conta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToCTA}
              className="w-full sm:w-auto px-8 py-4 bg-brand-neon text-black font-semibold rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center group"
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

export default GlaasHero;
