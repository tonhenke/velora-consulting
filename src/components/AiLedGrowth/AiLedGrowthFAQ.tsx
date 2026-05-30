import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Preciso ter time técnico interno para contratar a Velora?",
    answer: "Não. As soluções são construídas de forma amigável para serem supervisionadas e operadas pelo time que você já tem hoje, sem a necessidade de contratar engenheiros de software ou cientistas de dados internamente."
  },
  {
    question: "As soluções funcionam com o stack que já uso?",
    answer: "Sim. Nossas soluções são acopladas ao seu ecossistema atual via APIs e ferramentas low-code (como n8n e Make). Conectamos com as ferramentas de CRM, plataformas de anúncios (Meta, Google), analytics (GA4), email (ESP) ou planilhas que sua operação já utiliza."
  },
  {
    question: "Quanto tempo até ver resultado?",
    answer: "Depende da solução contratada. Nossos diagnósticos geram relatórios e planos de ação em 1 a 2 semanas. Automações e copilotos mais complexos entram em produção operacional entre 6 a 8 semanas, apresentando resultados mensuráveis logo nas primeiras semanas de execução."
  },
  {
    question: "A Velora entrega o projeto e some?",
    answer: "Não. Todas as nossas soluções contam com opções de retainer mensal para evolução contínua, manutenção técnica dos agentes e otimização dos fluxos. Além disso, todo projeto finaliza com documentação detalhada e treinamento operacional para dar total autonomia ao seu time."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-brand-light/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-bold text-brand-light group-hover:text-brand-neon transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-brand-light/60 group-hover:text-brand-neon transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-neon' : ''}`} 
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-light/60 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AiLedGrowthFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-dark/30 relative overflow-hidden border-t border-brand-light/5">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          {/* Accordion Wrapper */}
          <div className="bg-brand-light/5 border border-brand-light/10 p-6 md:p-8 rounded-2xl">
            {faqItems.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onClick={() => handleToggle(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiLedGrowthFAQ;
