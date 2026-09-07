import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Marketing e Vendas discordam sobre o que é um lead qualificado?',
    answer: 'Cerca de 49% das lideranças têm divergências sobre o funil. Nós resolvemos isso alinhando RevOps: definindo SLA de passagem (handoff), métricas de transição e centralizando o modelo de conta no CRM, para que Marketing e Vendas leiam a mesma realidade.'
  },
  {
    question: 'O custo do lead está subindo, mas a receita não acompanha?',
    answer: 'CPL é uma métrica de mídia, e crescimento é um resultado econômico. Ajustamos seu modelo de análise para considerar Win Rate, Ticket e Ciclo na mesma tabela de custo. Muitas vezes, o canal "mais caro" gera a receita mais barata no longo prazo.'
  },
  {
    question: 'Temos dificuldade em expandir clientes da base?',
    answer: 'Em Tech B2B, a expansão custa metade da aquisição, mas recebe pouca verba de Marketing. Implementamos mapeamento de White Space por conta, gatilhos de uso e processos de Upsell coordenados com Customer Success.'
  },
  {
    question: 'Usamos várias ferramentas, mas os dados não se conectam?',
    answer: 'Mais ferramentas sem governança só automatizam a confusão. Nossa frente de Business Intelligence e RevOps trabalha para que a mesma conta seja reconhecida em todos os estágios (Mídia, CRM, Produto, CS e Financeiro).'
  },
  {
    question: 'O crescimento depende quase exclusivamente de Outbound?',
    answer: 'Personalização sem mudança de probabilidade é esforço sem retorno. Estruturamos processos de Account-Based Marketing (ABM) para focar energia nas contas com real Fit, Potencial, Timing e Acesso, reduzindo o desperdício de tempo comercial.'
  }
];

const TechB2BFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white border-t border-brand-dark/5 text-brand-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Se a sua operação vive estes sintomas, <br className="hidden md:block" />
            <span className="text-[#5c5c5c]">é exatamente aqui que entramos.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-neon bg-zinc-50' : 'border-brand-dark/10 hover:border-brand-dark/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-brand-dark' : 'text-brand-dark/80'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-neon' : 'text-brand-dark/40'}`} 
                    size={24} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-brand-dark/70 leading-relaxed">
                        <div className="w-8 h-1 bg-brand-neon mb-4 rounded-full" />
                        {faq.answer}
                      </div>
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

export default TechB2BFAQSection;
