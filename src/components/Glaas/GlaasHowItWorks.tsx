import { motion } from 'framer-motion';
import { Search, Users, LineChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-brand-neon" />,
    title: "Imersão no cliente",
    description: "O estrategista mergulha no negócio do seu cliente: entende o modelo comercial, os canais em uso, os gargalos e os objetivos. Entra na conta como quem vai fazer parte dela, não como quem vai auditar de fora."
  },
  {
    icon: <Users className="w-8 h-8 text-brand-neon" />,
    title: "Operação integrada com o time da agência",
    description: "O Growth Leader participa das reuniões, alinha com os times de mídia, conteúdo e dados, e garante que a estratégia de growth não seja uma camada separada, mas o fio condutor de tudo que a agência entrega para aquele cliente."
  },
  {
    icon: <LineChart className="w-8 h-8 text-brand-neon" />,
    title: "Gestão por resultado, não por entrega",
    description: "Definimos juntos os indicadores que importam para cada conta. O acompanhamento é contínuo, com ciclos de aprendizado e ajuste, para que o crescimento seja consistente, não pontual."
  }
];

const GlaasHowItWorks = () => {
  return (
    <section className="py-24 bg-brand-dark/30 border-t border-brand-light/5 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light"
          >
            Como <span className="text-brand-neon">funciona</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-[#0a0a0a] border border-brand-light/10 rounded-2xl flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-neon/5 rounded-2xl blur-md" />
                <div className="relative z-10">{step.icon}</div>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-brand-light mb-4">{step.title}</h3>
                <p className="text-lg text-brand-light/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlaasHowItWorks;
