import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Unlock, Zap } from 'lucide-react';

const MaaSWhyVelora = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Senioridade real",
      desc: "Ex-líderes de growth de empresas como KPMG, Vivo e grandes SaaS. Sem juniores aprendendo com o seu dinheiro."
    },
    {
      icon: BarChart3,
      title: "Dados, não achismo",
      desc: "Dashboards em tempo real com as métricas que importam: ROAS, CPA, LTV. Decisões baseadas em evidências, não em feeling."
    },
    {
      icon: Unlock,
      title: "Sem lock-in",
      desc: "Cancele quando quiser. Garantia de 30 dias com dinheiro de volta. Você fica porque quer, não porque está preso."
    },
    {
      icon: Zap,
      title: "Velocidade de execução",
      desc: "Campanhas no ar em até 5 dias úteis após a contratação. Sem burocracia, sem reuniões intermináveis."
    }
  ];

  return (
    <section className="bg-brand-dark text-brand-light py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Por que a <span className="text-brand-neon">Velora</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-brand-light/60 font-light"
          >
            O mercado está cansado de promessas. A gente entrega resultado.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-brand-neon/30 transition-colors flex flex-col sm:flex-row gap-6"
            >
              <div className="w-12 h-12 shrink-0 bg-gray-800 rounded-lg flex items-center justify-center text-brand-neon">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-light/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSWhyVelora;
