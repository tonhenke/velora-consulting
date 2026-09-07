import { motion } from 'framer-motion';

const phases = [
  {
    num: '01',
    title: 'Imersão de Growth',
    desc: 'Diagnóstico causal e plano',
    details: 'Mapeamento profundo da sua operação comercial, desde a demanda até a expansão, identificando exatamente onde o capital vaza e o que priorizar.'
  },
  {
    num: '02',
    title: 'Projeto de Implementação',
    desc: 'Execução priorizada',
    details: 'Construção ou refatoração dos processos de ABM, RevOps e BI. Implementação de playbooks de expansão e alinhamento de handoffs entre as áreas.'
  },
  {
    num: '03',
    title: 'Liderança & Execução',
    desc: 'Acompanhamento contínuo',
    details: 'Atuamos junto à sua liderança para garantir a governança dos dados, a realocação constante de investimentos baseada em evidências e a execução dos planos.'
  }
];

const TechB2BProcessSection = () => {
  return (
    <section className="py-32 bg-black border-t border-brand-light/10 overflow-hidden relative text-brand-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              Como funciona o <span className="text-brand-neon">processo.</span>
            </h2>
            <p className="text-xl text-brand-light/60 max-w-2xl mx-auto">
              Da investigação do problema à estruturação sistêmica do crescimento.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {idx < phases.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-brand-light/10 z-0">
                  <div className="w-0 h-full bg-brand-neon transition-all duration-1000 group-hover:w-full" />
                </div>
              )}

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

export default TechB2BProcessSection;
