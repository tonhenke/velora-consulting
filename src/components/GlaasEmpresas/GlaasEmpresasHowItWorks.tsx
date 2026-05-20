import { motion } from 'framer-motion';
import { Search, Settings, LineChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-brand-neon" />,
    title: "Diagnóstico e imersão",
    description: "O Growth Leader começa entendendo o negócio: modelo comercial, canais atuais, maturidade do time e onde estão os maiores gargalos de crescimento. Nada de solução genérica, o ponto de partida é a realidade da sua empresa."
  },
  {
    icon: <Settings className="w-8 h-8 text-brand-neon" />,
    title: "Estruturação da operação",
    description: "Com o diagnóstico em mãos, ele define as prioridades, organiza os processos de growth, distribui responsabilidades dentro do time e coloca a máquina para rodar, com metodologia, não no feeling."
  },
  {
    icon: <LineChart className="w-8 h-8 text-brand-neon" />,
    title: "Liderança contínua e gestão por resultado",
    description: "O acompanhamento não para depois da estruturação. O Growth Leader segue presente, liderando ciclos de aprendizado, ajustando a estratégia com base em dados e desenvolvendo o time para que o conhecimento fique na empresa, não só na cabeça de quem foi contratado."
  }
];

const GlaasEmpresasHowItWorks = () => {
  return (
    <section className="py-24 bg-brand-dark/30 border-t border-brand-light/5 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">Como Funciona</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light"
          >
            Do <span className="text-brand-neon">zero</span> à operação de growth
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-[#0a0a0a] border border-brand-light/10 rounded-2xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-neon/5 rounded-2xl blur-md" />
                <div className="relative z-10">{step.icon}</div>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-brand-light mb-4">{step.title}</h3>
                <p className="text-lg text-brand-light/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasHowItWorks;
