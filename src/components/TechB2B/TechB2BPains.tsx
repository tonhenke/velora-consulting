import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const pains = [
  {
    icon: TrendingDown,
    title: 'Custo de Aquisição Insustentável',
    description: 'O CAC não para de subir. Orçamentos de marketing sendo queimados em canais saturados sem gerar pipeline real ou retorno que feche a conta.'
  },
  {
    icon: AlertCircle,
    title: 'Falta de Previsibilidade',
    description: 'A receita depende de meses milagrosos ou heróis de vendas. Não existe um motor de aquisição repetível que dê segurança para escalar.'
  },
  {
    icon: Users,
    title: 'Silos Operacionais',
    description: 'Marketing comemora leads que Vendas diz que não servem, enquanto CS sofre com churn de clientes que não deveriam ter entrado.'
  }
];

const TechB2BPains = () => {
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
            Os 3 gargalos que travam o <span className="text-gray-400">crescimento B2B</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-light/60 font-light"
          >
            Se a sua operação Enterprise está enfrentando resistência para crescer, é quase certo que o problema está em um destes três pilares.
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

export default TechB2BPains;
