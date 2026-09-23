import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const MaaSHero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden text-brand-light relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-brand-neon" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-light/80 mt-0.5">30 dias de garantia</span>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-[110px] font-serif leading-[0.85] tracking-tight mb-8">
              Marketing <br className="md:hidden" /><span className="italic text-brand-neon">As a Service.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-light/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Sua equipe de marketing completa, sênior e orientada por dados, por uma fração do custo de um time interno.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#pricing"
                className="bg-brand-neon text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Ver planos <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#roas-simulator"
                className="font-mono text-sm uppercase tracking-widest text-brand-light/60 hover:text-brand-light transition-colors border-b border-white/10 hover:border-white/30 pb-1"
              >
                Simular meu ROAS
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaaSHero;
