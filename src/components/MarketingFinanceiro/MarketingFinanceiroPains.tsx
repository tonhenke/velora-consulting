import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const pains = [
  {
    icon: TrendingDown,
    title: 'Confiança como Barreira de Entrada',
    description: 'No mercado financeiro, a decisão de confiar alguém com seu patrimônio é lenta e exige múltiplos pontos de contato. O digital não substitui a confiança, mas pode construí-la.'
  },
  {
    icon: AlertCircle,
    title: 'Captação Concentrada em Poucas Pessoas',
    description: 'O crescimento depende da capacidade de captação de sócios e assessores sênior. O relacionamento funciona, mas a dependência dele cria um teto difícil de ultrapassar.'
  },
  {
    icon: Users,
    title: 'Pipeline sem Visibilidade',
    description: 'Oportunidades de captação vivem em agendas e conversas. Marketing, Comercial e sócios não compartilham a mesma leitura sobre onde estão as oportunidades e qual a próxima ação.'
  }
];

const MarketingFinanceiroPains = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Os gargalos da captação <span className="text-brand-neon">no mercado financeiro</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-light/60 font-light"
          >
            Gestoras e consultorias financeiras enfrentam desafios únicos para transformar confiança em captação previsível e escalável.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-gray border border-gray-800 p-8 rounded-2xl hover:border-brand-neon/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-brand-neon mb-6">
                <pain.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{pain.title}</h3>
              <p className="text-brand-light/60 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingFinanceiroPains;
