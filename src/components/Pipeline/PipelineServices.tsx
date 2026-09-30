import { motion } from 'framer-motion';
import { Target, Gift, Users, Send, Database, Zap, LineChart, PieChart } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'ICP',
    desc: 'Definição clara do Perfil de Cliente Ideal, mapeando as contas com maior potencial de fechamento e retenção.'
  },
  {
    icon: Gift,
    title: 'Oferta',
    desc: 'Estruturação de uma proposta de valor irresistível, desenhada especificamente para os tomadores de decisão das contas alvo.'
  },
  {
    icon: Users,
    title: 'Base',
    desc: 'Construção e enriquecimento de listas de contatos ultra-segmentadas, focando em qualidade sobre volume.'
  },
  {
    icon: Send,
    title: 'Outbound',
    desc: 'Prospecção ativa e multicanal, com cadências personalizadas que quebram a barreira do gelo e geram respostas.'
  },
  {
    icon: Database,
    title: 'CRM',
    desc: 'Implementação ou otimização do seu CRM para garantir processos previsíveis, SLAs claros e gestão eficiente do funil.'
  },
  {
    icon: Zap,
    title: 'Conversão',
    desc: 'Otimização contínua das taxas de conversão em cada etapa, treinando o time para conduzir reuniões que vendem.'
  },
  {
    icon: LineChart,
    title: 'Inteligência Comercial',
    desc: 'Análise de dados e métricas em tempo real para tomada de decisões embasadas e ajustes rápidos de rota.'
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    desc: 'Dashboards customizados e visualização avançada de dados para acompanhar o funil de ponta a ponta com clareza.'
  }
];

const PipelineServices = () => {
  return (
    <section className="py-32 bg-[#121212] text-brand-light border-y border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white"
          >
            Estrutura da nossa <span className="text-brand-neon">Atuação.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-light/70 max-w-3xl mx-auto"
          >
            O que fazemos para transformar a geração de demanda da sua empresa de tecnologia.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-dark p-8 rounded-2xl border border-white/10 hover:border-brand-neon/30 hover:shadow-[0_0_30px_rgba(198,240,0,0.05)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-neon mb-6 group-hover:bg-brand-neon/10 transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-brand-light/70 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineServices;
