import { motion } from 'framer-motion';

const AiLedGrowthStatement = () => {
  return (
    <section className="py-24 bg-brand-dark/30 relative overflow-hidden border-y border-brand-light/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark/50 border border-brand-light/10 p-8 md:p-16 rounded-3xl backdrop-blur-md relative"
          >
            {/* Corner Accent Decor */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-neon rounded-tl-3xl -translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-neon rounded-br-3xl translate-x-px translate-y-px" />

            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-light leading-tight">
                IA sem estratégia é <span className="text-red-500/90 font-extrabold line-through decoration-brand-light/20">custo</span>. <br className="hidden md:inline" />
                IA bem aplicada é <span className="text-brand-neon font-black">vantagem competitiva</span>.
              </h2>
              
              <p className="text-lg md:text-2xl text-brand-light/70 font-light leading-relaxed max-w-4xl">
                Na Velora, só implementamos onde existe <span className="text-brand-light font-semibold">problema real</span>, <span className="text-brand-light font-semibold">dado disponível</span> e <span className="text-brand-light font-semibold">resultado mensurável</span>, e construímos o caminho técnico e estratégico para chegar lá.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiLedGrowthStatement;
