import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Reunião de 45 minutos para mapear seu fluxo atual, identificar ineficiências e apontar a solução de IA de maior impacto imediato."
  },
  {
    num: "02",
    title: "Proposta Customizada",
    desc: "Apresentamos um escopo detalhado de implementação, incluindo arquitetura de dados proposta, prazos e investimentos. Sem pacotes fechados."
  },
  {
    num: "03",
    title: "Execução e Resultado",
    desc: "Construção, integração via API e low-code, documentação técnica completa e acompanhamento próximo com metas definidas desde o dia zero."
  }
];

const AiLedGrowthHowWeWork = () => {
  return (
    <div className="relative">
      
      {/* SECTION 08: Como a Velora Trabalha */}
      <section className="py-24 bg-brand-black relative overflow-hidden border-t border-brand-light/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-neon/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3">
              Processo de Trabalho
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-light tracking-tight">
              Como a Velora trabalha
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-brand-light/5 border border-brand-light/10 hover:border-brand-neon/30 p-8 rounded-2xl relative transition-all duration-300 group hover:-translate-y-1"
              >
                <span className="text-6xl font-black text-brand-neon/15 group-hover:text-brand-neon transition-colors duration-300 block mb-6 leading-none select-none">
                  {step.num}
                </span>
                
                <h3 className="text-xl font-bold text-brand-light mb-4">
                  {step.title}
                </h3>
                
                <p className="text-brand-light/60 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: CTA BANNER */}
      <section className="py-28 bg-brand-neon relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none">
                Pronto para aplicar IA onde ela realmente importa?
              </h2>
              <p className="text-lg md:text-2xl text-black/85 font-medium max-w-3xl mx-auto leading-relaxed">
                Diagnóstico sem custo. Escopo sob medida. Resultado mensurável desde o primeiro entregável.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-4"
            >
              <Link
                to="/diagnostico"
                className="inline-flex items-center justify-center px-10 py-5 bg-black text-brand-neon text-lg font-bold rounded-lg hover:bg-black/90 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group"
              >
                Quero um diagnóstico gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AiLedGrowthHowWeWork;
