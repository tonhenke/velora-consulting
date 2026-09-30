import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const plans = [
  { name: 'Start', price: 'R$3.790,00' },
  { name: 'Growth', price: 'R$5.970,00', isPopular: true },
  { name: 'Revenue', price: 'R$7.990,00' }
];

const features = [
  {
    name: 'ICP',
    values: ['check', 'check', 'check']
  },
  {
    name: 'Outbound',
    values: ['check', 'check', 'check']
  },
  {
    name: 'Copy',
    values: ['check', 'check', 'check']
  },
  {
    name: 'Landing page',
    values: ['minus', 'check', 'check']
  },
  {
    name: 'CRM',
    values: ['minus', 'supervisão', 'gestão']
  },
  {
    name: 'Conteúdo/case',
    values: ['minus', '1/mês', '2/mês']
  },
  {
    name: 'BI',
    values: ['básico', 'check', 'check']
  },
  {
    name: 'Consultoria',
    values: ['mensal', 'quinzenal', 'semanal']
  }
];

const renderValue = (value: string) => {
  if (value === 'check') return <Check className="mx-auto text-brand-neon" size={20} />;
  if (value === 'minus') return <Minus className="mx-auto text-brand-dark/30" size={20} />;
  return <span className="text-sm font-medium text-brand-dark">{value}</span>;
};

const PipelinePricing = () => {
  return (
    <section id="planos" className="py-32 bg-zinc-50 border-t border-brand-dark/5 text-brand-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Planos e <span className="text-brand-neon">Investimento.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-dark/70 max-w-2xl mx-auto"
          >
            Escolha o nível de intensidade ideal para o momento da sua empresa.
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl border border-brand-dark/10 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 md:p-8 bg-zinc-50/50 border-b border-brand-dark/5 w-1/4"></th>
                  {plans.map((plan, idx) => (
                    <th key={idx} className={`p-6 md:p-8 text-center border-b border-brand-dark/5 w-1/4 ${plan.isPopular ? 'bg-brand-neon/5 relative' : 'bg-zinc-50/50'}`}>
                      {plan.isPopular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-brand-neon text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Recomendado
                          </span>
                        </div>
                      )}
                      <div className="text-xl font-bold mb-2">{plan.name}</div>
                      <div className="text-2xl md:text-3xl font-bold tracking-tight text-brand-neon">{plan.price}</div>
                      <div className="text-xs text-brand-dark/50 mt-1 uppercase tracking-wider">/mês</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fIdx) => (
                  <tr key={fIdx} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6 md:p-8 border-b border-brand-dark/5 font-medium text-brand-dark/80">
                      {feature.name}
                    </td>
                    {feature.values.map((val, vIdx) => (
                      <td key={vIdx} className={`p-6 md:p-8 text-center border-b border-brand-dark/5 ${plans[vIdx].isPopular ? 'bg-brand-neon/5' : ''}`}>
                        {renderValue(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-8 bg-zinc-50 border-t border-brand-dark/5 flex justify-center">
            <a
              href="#contato"
              className="bg-brand-dark text-brand-light px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePricing;
