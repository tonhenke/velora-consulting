import { motion } from 'framer-motion';

const MaaSWhySelfService = () => {
  const steps = [
    {
      num: "01",
      title: "Sem reunião de vendas",
      desc: "Contrate direto",
      details: "Você não precisa de um vendedor para explicar o que já sabe que precisa. Escolha o plano, pague e comece."
    },
    {
      num: "02",
      title: "Onboarding automatizado",
      desc: "Configure em minutos",
      details: "Após a contratação, você recebe acesso a um formulário de onboarding. Nos dê os acessos e informações do seu negócio. Em até 5 dias, suas campanhas estão no ar."
    },
    {
      num: "03",
      title: "Transparência total",
      desc: "Acompanhe tudo",
      details: "Acesso ao dashboard em tempo real, relatórios semanais e calls mensais de alinhamento estratégico."
    }
  ];

  return (
    <section className="bg-black border-t border-brand-light/10 py-32 text-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Contratação <span className="text-brand-neon">self-service.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-brand-light/60 font-light"
          >
            Marketing de alta performance sem burocracia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-dark/50 border border-brand-light/10 p-8 rounded-2xl hover:border-brand-neon/50 transition-colors duration-300 relative overflow-hidden"
            >
              <span className="text-6xl font-black text-brand-light/5 mb-6 block">
                {step.num}
              </span>
              <span className="text-brand-neon font-medium text-sm mb-6 uppercase tracking-widest block">
                {step.desc}
              </span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-brand-light/60 font-light leading-relaxed">
                {step.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSWhySelfService;
