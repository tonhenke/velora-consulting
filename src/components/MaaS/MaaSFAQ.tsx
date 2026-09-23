import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona a contratação?',
    answer: 'Escolha o plano que faz sentido para o momento do seu negócio, pague via cartão de crédito e preencha o formulário de onboarding. Em até 5 dias úteis, suas campanhas estarão no ar.'
  },
  {
    question: 'Existe contrato de fidelidade?',
    answer: 'Não. Você pode cancelar a qualquer momento. Nos primeiros 30 dias, devolvemos 100% do valor pago se você não estiver satisfeito com o serviço.'
  },
  {
    question: 'Preciso já ter conta no Google Ads e Meta Ads?',
    answer: 'Não. Criamos e configuramos tudo para você — conta de anúncios, pixels de conversão, eventos de rastreamento e integrações com o seu site.'
  },
  {
    question: 'Quanto devo investir em mídia além do plano?',
    answer: 'Recomendamos um mínimo de R$3.000/mês em mídia para o plano Essencial. Quanto maior o investimento em mídia, mais dados geramos para otimizar e melhores os resultados proporcionais.'
  },
  {
    question: 'Vocês fazem os criativos (imagens e vídeos)?',
    answer: 'Depende do plano. No Essencial, trabalhamos com os materiais que você fornece. Nos planos Tração e Growth, nossa equipe produz criativos estáticos otimizados para conversão como parte do escopo.'
  },
  {
    question: 'Como acompanho os resultados?',
    answer: 'Você terá acesso a um dashboard em tempo real com as métricas principais — ROAS, CPA, CTR, conversões e custo por canal. Além disso, enviamos relatórios com análises e insights conforme a frequência do seu plano.'
  },
  {
    question: 'O que acontece se eu quiser trocar de plano?',
    answer: 'Você pode fazer upgrade ou downgrade a qualquer momento. A diferença de valor é ajustada pro-rata no próximo ciclo de cobrança.'
  },
  {
    question: 'O valor do plano inclui o investimento em mídia?',
    answer: 'Não. O valor do plano cobre a gestão, estratégia, criação e otimização. O investimento em mídia (verba de anúncios) é pago diretamente ao Google e Meta na sua própria conta de anúncios.'
  }
];

const MaaSFAQ = () => {
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
            Perguntas <br className="hidden md:block" />
            <span className="text-[#5c5c5c]">frequentes</span>
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

export default MaaSFAQ;
