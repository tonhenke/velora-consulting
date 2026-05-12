import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const modules = [
  {
    num: '01',
    title: 'Introdução & Fundamentos',
    result: 'Entenda como surgiu e por que a metodologia se tornou um diferencial competitivo para os negócios.',
    topics: [
      'O que é Growth Hacking, origem e seus fundamentos',
      'Qual a diferença entre Marketing e Growth Hacking',
      'O Ciclo de Growth Hacking',
      'Definindo e mensurando o que importa',
      'Cases',
    ],
  },
  {
    num: '02',
    title: 'Ideação & Experimentação',
    result: 'Entenda as etapas da metodologia e como gerar ideias de testes aplicáveis.',
    topics: [
      'Como estruturar e conduzir o processo de ideação',
      'Organização do backlog de experimentação',
      'Classificação e priorização das ideias de experimentos',
    ],
  },
  {
    num: '03',
    title: 'Operação & Análise',
    result: 'Aprenda caminhos para operacionalizar, implementar e analisar os resultados.',
    topics: [
      'O que é um bom experimento?',
      'Como executar, medir e documentar experimentos',
      'Como analisar os resultados e escalá-los?',
    ],
  },
];

const WorkshopCurriculum = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-light/10 bg-brand-light/5 text-sm text-brand-light/60 font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
            Conteúdo Programático
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-4">
            O que você vai <span className="text-brand-neon">dominar</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((mod, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-neon/30 bg-white/[0.04]' : 'border-white/[0.06] bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-brand-neon/30">{mod.num}</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-brand-light">
                        Módulo {mod.num} — {mod.title}
                      </h3>
                      <p className="text-sm text-brand-neon/80 mt-1 font-medium">{mod.result}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-brand-light/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 pb-6 space-y-3 ml-[3.5rem]">
                        {mod.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-2 flex-shrink-0" />
                            <span className="text-brand-light/70">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkshopCurriculum;
