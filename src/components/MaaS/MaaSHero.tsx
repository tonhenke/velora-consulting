import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const MaaSHero = () => {
  return (
    <section className="bg-brand-dark min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden text-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Marketing on.<br />
              <span className="text-brand-neon">Resultados on.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-light/60 font-light mb-8 max-w-3xl mx-auto">
              Sua equipe de marketing completa, sênior e orientada por dados — por uma fração do custo de um time interno. Sem contrato de fidelidade.
            </p>

            <div className="flex items-center justify-center gap-2 mb-12 text-brand-light/60">
              <ShieldCheck className="w-5 h-5 text-brand-neon" />
              <span className="text-sm font-medium">30 dias de garantia ou seu dinheiro de volta</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#pricing"
                className="bg-brand-neon text-brand-dark px-8 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(198,240,0,0.3)] w-full sm:w-auto"
              >
                Ver planos
              </a>
              <a 
                href="#roas-simulator"
                className="flex items-center gap-2 text-brand-light hover:text-brand-neon transition-colors font-medium w-full sm:w-auto justify-center"
              >
                Simular meu ROAS <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaaSHero;
