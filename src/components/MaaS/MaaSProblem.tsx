import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

const MaaSProblem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Agências que não entregam",
      desc: "Contratos longos, relatórios bonitos, resultados invisíveis. Você paga pela estrutura da agência, não pelo seu resultado."
    },
    {
      icon: DollarSign,
      title: "Montar time interno custa caro",
      desc: "Head de Marketing + Mídia + Design + Copywriter + BI = R$40k+/mês antes de qualquer investimento em mídia."
    },
    {
      icon: TrendingDown,
      title: "Falta de previsibilidade no ROI",
      desc: "Sem dados confiáveis, cada real investido em mídia é uma aposta. Você não sabe o que funciona e o que queima dinheiro."
    }
  ];

  return (
    <section className="bg-brand-dark text-brand-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            O que trava o crescimento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-brand-light/60 font-light"
          >
            Se a sua operação de marketing está presa em algum desses cenários, você está deixando receita na mesa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-gray border border-gray-800 p-8 rounded-2xl hover:border-brand-neon/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-brand-neon mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-brand-light/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSProblem;
