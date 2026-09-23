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
    <section className="bg-black border-t border-white/5 py-32 text-brand-light relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-6"
          >
            Contratação <br className="md:hidden" /><span className="italic text-brand-neon">self-service.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-brand-light/50 font-light"
          >
            Marketing de alta performance sem burocracia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-white/10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pt-12 md:pt-0"
            >
              {/* Number marker */}
              <div className="absolute top-0 left-0 md:relative md:mb-10 w-12 h-12 bg-black border border-brand-neon flex items-center justify-center rounded-full z-10">
                <span className="font-mono text-brand-neon text-lg">{step.num}</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 p-10 hover:border-brand-neon/30 hover:bg-white/[0.04] transition-all duration-300 relative group h-full">
                <span className="font-mono text-[10px] text-brand-light/40 uppercase tracking-widest block mb-4">
                  {step.desc}
                </span>
                <h3 className="text-2xl font-serif tracking-tight mb-4">{step.title}</h3>
                <p className="text-brand-light/50 font-light leading-relaxed">
                  {step.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSWhySelfService;
