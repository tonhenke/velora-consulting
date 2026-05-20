import { motion } from 'framer-motion';

const GlaasEmpresasProblem = () => {
  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">O Problema</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-light mb-12 leading-tight">
              Montar um time de marketing é a parte <span className="text-brand-neon">fácil</span>. <br className="hidden md:block" />
              Saber para onde crescer é <span className="text-brand-light/50">outra história.</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-brand-light/70 font-light leading-relaxed">
              <p>
                Contratar analistas, subir canais, começar a produzir conteúdo — tudo isso a sua empresa consegue fazer. O problema aparece quando ninguém no time tem visão de growth para amarrar tudo isso numa estratégia que realmente mova o negócio.
              </p>
              <p>
                Sem essa liderança, o time executa sem direção. Cada canal vira uma ilha. Os números sobem e descem sem que ninguém entenda exatamente o porquê — e sem saber o que fazer diferente.
              </p>
              <p className="text-brand-light font-medium pt-4 border-t border-brand-light/10">
                Contratar um Head de Growth sênior resolveria. Mas é caro, leva tempo, e errar nessa contratação sai ainda mais caro.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasProblem;
