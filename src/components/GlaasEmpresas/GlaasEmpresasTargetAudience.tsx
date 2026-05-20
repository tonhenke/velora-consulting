import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const targetItems = [
  "Você está montando o time de marketing e sabe que vai precisar de alguém para liderar o crescimento, mas ainda não encontrou ou não está pronto para contratar esse perfil",
  "Seu time executa bem, mas falta alguém com visão estratégica para dar direção e transformar esforço em resultado",
  "Você já investiu em canais e ferramentas, mas sente que o crescimento ainda depende mais de sorte do que de método",
  "Você quer construir uma operação de growth de verdade, não terceirizar e esquecer"
];

const GlaasEmpresasTargetAudience = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('glaas-empresas-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">Para Quem É</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-8">
              Faz sentido para a sua empresa <span className="text-brand-neon">se...</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
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
              Quero entender como funciona
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasTargetAudience;
