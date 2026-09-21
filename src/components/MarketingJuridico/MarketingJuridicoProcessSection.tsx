import { motion } from 'framer-motion';

const phases = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Onde estamos',
    details: 'Reconstruímos jornada, canais, contas, pipeline, CRM e economia da aquisição.'
  },
  {
    num: '02',
    title: 'Arquitetura',
    desc: 'Como estruturar',
    details: 'Definimos prioridades, etapas, métricas, responsabilidades e lógica de dados.'
  },
  {
    num: '03',
    title: 'Implementação',
    desc: 'O que fazer',
    details: 'Ajustamos aquisição, CRM, rotinas, relatórios, contas prioritárias e processos entre áreas.'
  },
  {
    num: '04',
    title: 'Otimização',
    desc: 'Como melhorar',
    details: 'Acompanhamos conversão, qualidade das contas, receita e aprendizado dos testes.'
  }
];

const MarketingJuridicoProcessSection = () => {
  return (
    <section className="py-32 bg-black border-t border-brand-light/10 overflow-hidden relative text-brand-light">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter mb-6">
              Da leitura <span className="text-brand-neon">à execução.</span>
            </h2>
            <p className="text-xl text-brand-light/60 max-w-2xl mx-auto">
              Quatro etapas, cada uma terminando em uma entrega que a operação consegue usar.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="bg-brand-dark/50 border border-brand-light/10 p-8 rounded-2xl relative z-10 h-full hover:border-brand-neon/50 transition-colors duration-300">
                <span className="text-6xl font-black text-brand-light/5 mb-6 block">
                  {phase.num}
                </span>
                
                <h3 className="text-2xl font-bold mb-2 text-brand-light">
                  {phase.title}
                </h3>
                
                <p className="text-brand-neon font-medium text-sm mb-6 uppercase tracking-widest">
                  {phase.desc}
                </p>
                
                <p className="text-brand-light/60 leading-relaxed text-sm">
                  {phase.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingJuridicoProcessSection;
