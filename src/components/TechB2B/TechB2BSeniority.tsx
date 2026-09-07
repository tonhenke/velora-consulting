import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Briefcase, Zap } from 'lucide-react';

const differentials = [
  {
    icon: ShieldCheck,
    title: 'Sem Juniores, Sem Desculpas',
    description: 'Você não será atendido por um estagiário usando um playbook engessado. Nossos projetos são liderados e executados por profissionais com bagagem de liderança C-Level e diretoria em SaaS.'
  },
  {
    icon: UserCheck,
    title: 'Estratégia e Execução Andam Juntas',
    description: 'Muitas consultorias entregam o PDF e vão embora. Nós desenhamos a estratégia e sujamos as mãos na implementação ao lado do seu time para garantir o resultado.'
  },
  {
    icon: Briefcase,
    title: 'Experiência Tech B2B Real',
    description: 'Não fazemos e-commerce nem B2C. Somos especialistas na complexidade da venda Enterprise, ciclos longos, múltiplos decisores e integração RevOps.'
  },
  {
    icon: Zap,
    title: 'Foco em Receita, não em Vaidade',
    description: 'Não medimos nosso sucesso por likes, impressões ou MQLs que não convertem. Nosso KPI é a linha final: pipeline gerado, CAC reduzido e receita expandida.'
  }
];

const TechB2BSeniority = () => {
  return (
    <section className="py-24 bg-brand-dark text-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Senioridade que faz <span className="text-brand-neon">a diferença</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-light/60 font-light"
          >
            O mercado está cansado de agências que vendem no discurso de especialistas, mas entregam a operação para analistas júniores aprenderem errando com o seu dinheiro. Na Velora, a dinâmica é outra.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-brand-neon/30 transition-colors flex gap-6"
            >
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg bg-gray-800 text-brand-neon flex items-center justify-center">
                  <diff.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-brand-light/60 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechB2BSeniority;
