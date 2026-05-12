import { motion } from 'framer-motion';
import { FileText, Monitor, Rocket, Gift } from 'lucide-react';

const deliverables = [
  { icon: FileText, title: 'Apresentação e materiais de apoio', desc: 'Slides completos e material de referência para consultar sempre que precisar.' },
  { icon: Monitor, title: 'Trabalho em ambiente digital', desc: 'Atividades práticas desenvolvidas em ferramentas digitais durante o workshop.' },
  { icon: Rocket, title: 'Plano de execução para seu negócio', desc: 'Saia com um plano de growth pronto para implementar na semana seguinte.' },
  { icon: Gift, title: 'Certificado de conclusão', desc: 'Certificado de participação no Workshop Growth Engine by Velora.' },
];

const WorkshopDeliverables = () => (
  <section className="py-24 md:py-32 bg-brand-light text-brand-dark relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          O que você vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#5c5c5c]">levar</span>
        </h2>
        <p className="text-lg text-brand-dark/60 max-w-xl mx-auto">
          Tudo que você precisa para sair do workshop e colocar em prática imediatamente.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {deliverables.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-brand-dark/10 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-brand-neon/30 transition-all duration-300 text-center"
          >
            <div className="p-3 bg-brand-neon/20 rounded-xl w-fit mx-auto mb-4">
              <d.icon size={28} className="text-brand-dark" />
            </div>
            <h3 className="text-base font-bold mb-2">{d.title}</h3>
            <p className="text-sm text-brand-dark/60 leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopDeliverables;
