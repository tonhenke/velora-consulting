import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const plans = [
  {
    name: 'Start',
    price: 'R$3.790,00',
    description: 'Para iniciar a máquina de vendas',
    isPopular: false,
    features: [
      { name: 'ICP', value: 'check' },
      { name: 'Outbound', value: 'check' },
      { name: 'Copy', value: 'check' },
      { name: 'Landing page', value: 'minus' },
      { name: 'CRM', value: 'Não' },
      { name: 'Conteúdo/case', value: 'Não' },
      { name: 'BI', value: 'Básico' },
      { name: 'Consultoria', value: 'Mensal' },
    ]
  },
  {
    name: 'Growth',
    price: 'R$5.970,00',
    description: 'Maior aceleração e acompanhamento',
    isPopular: true,
    features: [
      { name: 'ICP', value: 'check' },
      { name: 'Outbound', value: 'check' },
      { name: 'Copy', value: 'check' },
      { name: 'Landing page', value: 'check' },
      { name: 'CRM', value: 'Supervisão' },
      { name: 'Conteúdo/case', value: '1/mês' },
      { name: 'BI', value: 'check' },
      { name: 'Consultoria', value: 'Quinzenal' },
    ]
  },
  {
    name: 'Revenue',
    price: 'R$7.990,00',
    description: 'Domínio total da operação e expansão',
    isPopular: false,
    features: [
      { name: 'ICP', value: 'check' },
      { name: 'Outbound', value: 'check' },
      { name: 'Copy', value: 'check' },
      { name: 'Landing page', value: 'check' },
      { name: 'CRM', value: 'Gestão' },
      { name: 'Conteúdo/case', value: '2/mês' },
      { name: 'BI', value: 'check' },
      { name: 'Consultoria', value: 'Semanal' },
    ]
  }
];

const isPositive = (value: string) => value !== 'minus' && value !== 'Não';

const PipelinePricing = () => {
  return (
    <section id="planos" className="py-32 bg-brand-dark text-brand-light border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white"
          >
            Planos e <span className="text-brand-neon">Investimento.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-light/70 max-w-2xl mx-auto"
          >
            Escolha o nível de intensidade ideal para o momento da sua empresa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 bg-[#151515] ${
                plan.isPopular 
                  ? 'border-2 border-brand-neon shadow-[0_0_40px_rgba(198,240,0,0.1)] transform md:-translate-y-4' 
                  : 'border border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-neon text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-brand-light/60 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-neon tracking-tight">{plan.price}</span>
                  <span className="text-brand-light/50 text-sm uppercase font-medium">/mês</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-6 flex justify-center shrink-0">
                        {isPositive(feature.value) ? (
                          <Check className="text-brand-neon" size={20} />
                        ) : (
                          <Minus className="text-white/20" size={20} />
                        )}
                      </div>
                      <span className={`text-sm flex flex-wrap items-center gap-2 ${!isPositive(feature.value) ? 'text-white/40 line-through' : 'text-brand-light'}`}>
                        {feature.name}
                        {isPositive(feature.value) && feature.value !== 'check' && (
                          <span className="text-brand-neon bg-brand-neon/10 px-2 py-0.5 rounded text-xs font-bold border border-brand-neon/20">
                            {feature.value}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href="#contato"
                  className={`flex items-center justify-center w-full py-4 rounded-xl font-bold text-[15px] transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-brand-neon text-brand-dark hover:bg-brand-neon/90 shadow-[0_0_20px_rgba(198,240,0,0.3)]'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Selecionar Plano
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelinePricing;
