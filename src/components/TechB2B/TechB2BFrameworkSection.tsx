import { motion } from 'framer-motion';
import { Target, DollarSign, ArrowRightLeft, GitMerge, BarChart2 } from 'lucide-react';

const frameworkBlocks = [
  {
    question: '01 · Onde jogar?',
    resolve: 'ICP, contas, timing e prioridade.',
    discipline: 'ABM',
    icon: Target,
  },
  {
    question: '02 · Quanto vale?',
    resolve: 'CAC, receita, margem e retorno.',
    discipline: 'P&L + Aquisição',
    icon: DollarSign,
  },
  {
    question: '03 · Onde vaza?',
    resolve: 'Conversão, ativação e expansão.',
    discipline: 'Growth',
    icon: ArrowRightLeft,
  },
  {
    question: '04 · O que conectar?',
    resolve: 'Áreas, estágios, ownership e sistemas.',
    discipline: 'RevOps + Martech',
    icon: GitMerge,
  },
  {
    question: '05 · O que os dados dizem?',
    resolve: 'Sinais, relações e prioridade.',
    discipline: 'Business Intelligence',
    icon: BarChart2,
  },
];

const TechB2BFrameworkSection = () => {
  return (
    <section className="py-32 bg-brand-light text-brand-dark overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 border-l border-brand-dark/5" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Onde colocar dinheiro, <br />
                <span className="text-[#5c5c5c]">onde ele vaza.</span>
              </h2>
              <p className="text-lg text-brand-dark/70 font-medium mb-10 leading-relaxed">
                A Velora atua na intersecção do crescimento Tech B2B Enterprise: quais contas priorizar, onde a jornada perde valor, o que precisa estar conectado e qual evidência deveria orientar a próxima decisão.
              </p>
              
              <div className="hidden lg:block w-16 h-[2px] bg-brand-neon mb-6" />
              <p className="hidden lg:block text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                Framework Proprietário
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {frameworkBlocks.map((block, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-brand-dark/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-xl hover:border-brand-neon/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6 md:w-1/3">
                    <div className="p-3 bg-zinc-50 rounded-xl text-brand-dark group-hover:bg-brand-neon group-hover:text-black transition-colors">
                      <block.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl tracking-tight whitespace-nowrap">
                      {block.question}
                    </h3>
                  </div>
                  
                  <div className="md:w-1/3 border-l-2 border-brand-dark/5 pl-4 md:pl-0 md:border-none">
                    <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest mb-1 text-[10px]">O que resolve</p>
                    <p className="font-medium text-brand-dark/80">{block.resolve}</p>
                  </div>
                  
                  <div className="md:w-1/4 bg-zinc-50 rounded-lg p-3 border border-brand-dark/5 text-center">
                    <p className="text-sm font-bold text-brand-dark/40 uppercase tracking-widest mb-1 text-[10px]">Disciplina</p>
                    <p className="font-bold text-brand-dark">{block.discipline}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechB2BFrameworkSection;
