import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Preciso ter experiência prévia em marketing?',
    a: 'Não. O workshop foi desenhado para ser acessível a qualquer profissional que queira crescer seu negócio. Partimos dos fundamentos e avançamos até a aplicação prática.',
  },
  {
    q: 'É para empresa pequena ou grande?',
    a: 'Para ambas. O método de Growth funciona para startups, PMEs e grandes empresas - o que muda é a escala de aplicação, não o framework.',
  },
  {
    q: 'Como funciona o suporte depois?',
    a: 'Após o workshop, você terá acesso a um grupo exclusivo para tirar dúvidas e trocar experiências com outros participantes e com o instrutor.',
  },
  {
    q: 'Onde será o workshop?',
    a: '14 de Julho, 231 - Sala 02 - Centro, Ijuí - RS, 98700-000',
  },
  {
    q: 'O que preciso levar?',
    a: 'Importante levar notebook(laptop) ou tablet, além de caneta e papel para anotações e possível uso em dinâmicas.',
  },
];

const WorkshopFAQ = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-4">
            Perguntas <span className="text-brand-light/40">frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-xl border transition-colors duration-300 ${
                  isOpen ? 'border-brand-neon/20 bg-white/[0.04]' : 'border-white/[0.06] bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-brand-light pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-light/30 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-brand-light/60 leading-relaxed">
                        {faq.a}
                      </p>
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

export default WorkshopFAQ;
