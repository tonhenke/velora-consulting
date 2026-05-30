import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiLedGrowthHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black">
      {/* Blurry ambient light background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-neon/10 rounded-full blur-[100px] md:blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-neon/5 rounded-full blur-[90px] md:blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-sm font-semibold tracking-widest uppercase mb-6">
              Velora Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter text-brand-light mb-8 leading-[1.05]"
          >
            AI-LED <br className="md:hidden" />
            <span className="text-brand-neon font-black">GROWTH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-light/70 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Aplicamos IA onde ela gera resultado real, em aquisição, conversão e retenção de clientes. Sem promessas vazias, sem projeto de prateleira.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/diagnostico"
              className="w-full sm:w-auto px-10 py-5 bg-brand-neon text-black font-bold text-lg rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center group shadow-[0_0_30px_rgba(198,240,0,0.15)] hover:shadow-[0_0_40px_rgba(198,240,0,0.3)] hover:-translate-y-0.5"
            >
              Quero crescer com IA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiLedGrowthHero;
