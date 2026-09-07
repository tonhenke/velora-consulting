import { motion } from 'framer-motion';
import { Search, LineChart, Users, Settings, Database } from 'lucide-react';

const deliverables = [
  {
    icon: Search,
    title: 'Diagnóstico Causal',
    desc: 'Visão clara de onde o crescimento está travado, separando o que é problema de mídia do que é problema de operação.'
  },
  {
    icon: LineChart,
    title: 'Economia da Aquisição',
    desc: 'Mapeamento real de custo e retorno. Substituição de métricas de topo (CPL) por impacto no P&L (CAC Ratio, Win Rate, Ticket).'
  },
  {
    icon: Users,
    title: 'Modelo de Contas Prioritárias',
    desc: 'Framework ABM estruturado: cruzamento de fit, potencial, timing e acesso para definir intensidade de investimento.'
  },
  {
    icon: Settings,
    title: 'Plano de Solução e Execução',
    desc: 'Roadmap de 90 dias com playbooks para corrigir passagens de bastão (handoffs) e ativar motores de expansão na base.'
  },
  {
    icon: Database,
    title: 'Dados para Decisão',
    desc: 'Arquitetura de RevOps. A mesma conta sendo reconhecida do marketing ao financeiro, garantindo realocação com evidências.'
  }
];

const TechB2BDeliverablesSection = () => {
  return (
    <section className="py-32 bg-zinc-50 border-t border-brand-dark/5 overflow-hidden text-brand-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                O que você <span className="text-brand-neon">recebe.</span>
              </h2>
              <p className="text-lg text-brand-dark/70 font-medium mb-8">
                Consultoria não pode ser apenas um PPT conceitual. Entregamos 5 artefatos práticos que mudam a forma como sua empresa decide e opera.
              </p>
              <div className="w-16 h-1 bg-brand-neon rounded-full" />
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-8 rounded-2xl border border-brand-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-300 ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-brand-neon mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechB2BDeliverablesSection;
