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
    <section className="bg-black text-brand-light py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-6"
          >
            O que trava <br className="md:hidden" /><span className="italic text-brand-neon">o crescimento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-brand-light/50 font-light"
          >
            Se a sua operação de marketing está presa em algum desses cenários, você está deixando receita na mesa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 p-10 rounded-none hover:border-brand-neon/30 hover:bg-white/[0.04] transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-brand-neon mb-8">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif tracking-tight mb-4">{item.title}</h3>
              <p className="text-brand-light/50 font-light leading-relaxed">
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
