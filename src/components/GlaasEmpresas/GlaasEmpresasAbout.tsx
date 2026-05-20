import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GlaasEmpresasAbout = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('glaas-empresas-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-brand-light/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">O que é o GLAaS</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-8">
              A liderança de growth que sua empresa <span className="text-brand-neon">precisa</span> — sem precisar contratar
            </h2>
            
            <div className="space-y-6 text-xl text-brand-light/80 font-light leading-relaxed text-left mb-12">
              <p>
                O GLAaS é um modelo onde um estrategista sênior da Velora passa a atuar dentro da sua empresa como líder de growth. Ele entra no time, entende o negócio de perto e assume a responsabilidade de estruturar e liderar a estratégia de crescimento, junto com as pessoas que você já tem.
              </p>
              <p>
                Não é uma consultoria que entrega um plano e vai embora. É alguém presente no dia a dia, tomando decisões, orientando o time e garantindo que growth deixe de ser uma intenção e vire uma operação consistente.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToCTA}
              className="px-8 py-4 bg-brand-light/10 text-brand-light font-medium rounded-lg border border-brand-light/20 hover:bg-brand-light/20 hover:border-brand-light/30 transition-all duration-300 flex items-center group"
            >
              Quero entender como funciona
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasAbout;
