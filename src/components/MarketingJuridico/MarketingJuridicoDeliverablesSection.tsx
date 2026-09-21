import { motion } from 'framer-motion';


const deliverables = [
  'Diagnóstico de aquisição',
  'Mapa do funil relacional',
  'Modelo de atribuição',
  'P&L de aquisição',
  'Estratégia de canais',
  'Modelo ABM',
  'Arquitetura de CRM',
  'Pipeline e critérios de gestão',
  'Modelo de cross-sell',
  'Dashboards de aquisição e revenue',
  'Cadência de otimização'
];

const MarketingJuridicoDeliverablesSection = () => {
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
                Onze entregas para <span className="text-brand-neon">decidir e executar.</span>
              </h2>
              <p className="text-lg text-brand-dark/70 font-medium mb-8">
                O que pode sair dessa leitura. Entregas práticas que mudam a forma como seu escritório decide e opera.
              </p>
              <div className="w-16 h-1 bg-brand-neon rounded-full" />
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-brand-dark/5 shadow-sm hover:border-brand-neon/50 transition-colors duration-300 flex items-center"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-neon mr-4" />
                  <h3 className="text-lg font-bold">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingJuridicoDeliverablesSection;
