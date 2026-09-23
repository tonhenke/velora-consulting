import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ShieldCheck, Star } from 'lucide-react';

interface Specialty {
  name: string;
  volume: string;
  full: string;
}

interface Plan {
  tier: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  recommended: boolean;
  specialties: Specialty[];
  diferencial: string;
  referencia: string;
  priceId: string;
}

const plans: Plan[] = [
  {
    tier: 'TIER 01',
    name: 'Essencial',
    price: 'R$4.990,00',
    description: 'Operação com menos frentes simultâneas, cada especialidade ativa é estruturada e colocada em execução dentro do próprio mês.',
    recommended: false,
    priceId: 'price_essencial',
    specialties: [
      { name: 'Anúncios Online', volume: '1 campanha', full: '1 Campanha ativa - Planejamento, estruturação e lançamento de campanha em um canal, Google ou Meta Ads.' },
      { name: 'Landing Pages', volume: '1 otimização', full: '1 Otimização de landing page, com tracking de conversão implementado.' },
      { name: 'E-mail Marketing', volume: '2 e-mails', full: 'Configuração inicial da ferramenta ou criação e envio de 2 e-mails.' },
      { name: 'Social Mídia', volume: '4 posts/mês', full: '1 perfil com estruturação de calendário + cerca de 4 publicações estáticas/mês.' },
      { name: 'Web Analytics (GA4)', volume: '1 análise', full: '1 Análise mensal com geração de insight.' },
      { name: 'Estratégia de Growth', volume: '1 básica', full: '1 Estratégia básica de aquisição, retenção ou monetização de clientes.' }
    ],
    diferencial: 'Estrutura mínima viável para iniciar o projeto de captação e colocar as frentes para rodar.',
    referencia: 'Frentes ativas estruturadas e operando desde o primeiro mês, com baseline de dado estabelecido.'
  },
  {
    tier: 'TIER 02',
    name: 'Tração',
    price: 'R$10.990,00',
    originalPrice: 'R$11.790,00',
    description: 'Mais frentes rodando em paralelo, cada uma pode estar em estruturação ou já em otimização, conforme o estágio da especialidade.',
    recommended: true,
    priceId: 'price_tracao',
    specialties: [
      { name: 'Anúncios Online', volume: '2 campanhas', full: '2 Campanhas ativas - Planejamento, estruturação e lançamento de campanha em um canal, Google ou Meta Ads.' },
      { name: 'Landing Pages', volume: '2 landing pages', full: '2 Landing pages, com tracking de conversão implementado.' },
      { name: 'E-mail Marketing', volume: '4 e-mails', full: 'Configuração inicial da ferramenta ou criação de fluxo automatizado.' },
      { name: 'Social Mídia', volume: '8 posts/mês', full: '1 perfil com estruturação de calendário + cerca de 8 publicações estáticas/mês.' },
      { name: 'Web Analytics (GA4)', volume: '2 análises', full: '2 Análises mensais com geração de insights.' },
      { name: 'Estratégia de Growth', volume: '1 completa', full: '1 Estratégia completa de aquisição, retenção ou monetização de clientes.' }
    ],
    diferencial: 'Estrutura com operação rodando de forma plena. Estabelecimento de rituais e cerimônias recorrentes com acompanhamento próximo dos indicadores de sucesso.',
    referencia: 'Até 2 frentes rodando simultaneamente, estruturadas e/ou em otimização, com leitura de performance organizada por canal.'
  },
  {
    tier: 'TIER 03',
    name: 'Growth',
    price: 'R$14.990,00',
    description: 'Operação com maior volume de frentes simultâneas, estrutura e opera múltiplos canais ao mesmo tempo, sem depender de etapas anteriores.',
    recommended: false,
    priceId: 'price_growth',
    specialties: [
      { name: 'Anúncios Online', volume: '4 campanhas', full: '4 Campanhas ativas - Planejamento, estruturação e lançamento de campanha em 2 canais distintos, Google ou Meta Ads.' },
      { name: 'Landing Pages', volume: '3 landing pages', full: '3 Landing pages, com tracking de conversão implementado.' },
      { name: 'E-mail Marketing', volume: '8 e-mails', full: 'Configuração inicial da ferramenta ou criação de 2 fluxos automatizados.' },
      { name: 'Social Mídia', volume: '12 posts/mês', full: '1 perfil com estruturação de calendário + cerca de 8 publicações estáticas/mês.' },
      { name: 'Web Analytics (GA4)', volume: '2 análises profundas', full: '2 Análises profundas mensais com geração de insights.' },
      { name: 'Estratégia de Growth', volume: '1 acelerada', full: '1 Estratégia de crescimento acelerado para aquisição, retenção ou monetização de clientes.' }
    ],
    diferencial: 'Ciclo de testes acelerado, com três frentes rodando ao mesmo tempo, os aprendizados de canal, criativo e público se cruzam mais rápido.',
    referencia: 'Operação multicanal com até 3 frentes simultâneas, estruturadas e otimizadas ao mesmo tempo, CAC sob leitura constante.'
  }
];

const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  const handleContract = () => {
    console.log('Contratar plano:', plan.priceId);
    // window.open(...)
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white p-8 rounded-2xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 ${
        plan.recommended ? 'border-2 border-brand-neon' : 'border border-brand-dark/5'
      }`}
    >
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest text-brand-dark/40 font-bold">
            {plan.tier}
          </span>
          {plan.recommended && (
            <div className="flex items-center gap-1 text-brand-neon bg-brand-dark px-2 py-1 rounded-md">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Recomendado</span>
            </div>
          )}
        </div>
        <h3 className="text-3xl font-black">{plan.name}</h3>
      </div>

      <div className="mb-6">
        {plan.originalPrice && (
          <div className="text-sm text-brand-dark/40 line-through mb-1">
            De {plan.originalPrice}
          </div>
        )}
        <div className="flex items-baseline gap-1">
          {plan.originalPrice && <span className="text-sm font-medium mr-1">por</span>}
          <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
          <span className="text-sm text-brand-dark/60 font-medium">/mês</span>
        </div>
      </div>

      <p className="text-sm text-brand-dark/60 mb-8 min-h-[60px]">
        {plan.description}
      </p>

      <div className="flex flex-col gap-4 flex-grow mb-8">
        {plan.specialties.map((spec, i) => (
          <div key={i} className="flex flex-col border-b border-brand-dark/10 border-dashed pb-2 last:border-0">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm text-brand-dark">{spec.name}</span>
              <span className="text-brand-neon font-bold text-sm bg-brand-dark px-2 py-0.5 rounded">{spec.volume}</span>
            </div>
            
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-brand-dark/60 mt-2">
                    {spec.full}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden flex flex-col gap-4 mt-2"
            >
              <div className="pl-3 border-l-2 border-brand-neon">
                <h4 className="text-xs font-bold text-brand-dark mb-1">DIFERENCIAL DO TIER</h4>
                <p className="text-sm text-brand-dark/70">{plan.diferencial}</p>
              </div>
              <div className="pl-3 border-l-2 border-brand-neon">
                <h4 className="text-xs font-bold text-brand-dark mb-1">REFERÊNCIA DE RESULTADO</h4>
                <p className="text-sm text-brand-dark/70">{plan.referencia}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center gap-2 text-sm font-medium text-brand-dark/60 hover:text-brand-dark transition-colors mb-6 mx-auto"
      >
        {expanded ? (
          <>
            Ocultar detalhes <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Ver detalhes <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="mt-auto">
        <button
          onClick={handleContract}
          data-price-id={plan.priceId}
          className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center mb-3 ${
            plan.recommended
              ? 'bg-brand-neon text-brand-dark hover:brightness-110'
              : 'bg-brand-dark text-brand-light hover:bg-brand-dark/90'
          }`}
        >
          Contratar
        </button>
        <div className="flex items-center justify-center gap-1 text-xs text-brand-dark/40">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>30 dias de garantia</span>
        </div>
      </div>
    </motion.div>
  );
};

const MaaSPricing = () => {
  return (
    <section id="pricing" className="bg-zinc-50 text-brand-dark py-32 border-t border-brand-dark/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Escolha o plano ideal <span className="text-[#5c5c5c]">para o seu negócio</span>
          </h2>
          <p className="text-brand-dark/60 font-medium">
            *Não contempla o valor de investimento em mídia paga.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PlanCard key={plan.tier} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSPricing;
