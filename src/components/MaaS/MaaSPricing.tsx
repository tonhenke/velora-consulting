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
      className={`relative bg-white/[0.02] p-8 md:p-10 flex flex-col transition-all duration-300 ${
        plan.recommended ? 'border border-brand-neon shadow-[0_0_30px_rgba(198,240,0,0.05)]' : 'border border-white/10 hover:border-white/30'
      }`}
    >
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-light/40">
            {plan.tier}
          </span>
          {plan.recommended && (
            <div className="flex items-center gap-1.5 text-brand-neon border border-brand-neon/30 bg-brand-neon/5 px-2.5 py-1 rounded-full">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-mono text-[10px] uppercase tracking-widest mt-0.5">Recomendado</span>
            </div>
          )}
        </div>
        <h3 className="text-3xl font-serif tracking-tight">{plan.name}</h3>
      </div>

      <div className="mb-8 border-b border-white/10 pb-8">
        {plan.originalPrice && (
          <div className="text-sm font-mono text-brand-light/40 line-through mb-1">
            De {plan.originalPrice}
          </div>
        )}
        <div className="flex items-baseline gap-1">
          {plan.originalPrice && <span className="text-sm font-light mr-1 text-brand-light/60">por</span>}
          <span className="text-4xl md:text-5xl font-serif tracking-tight">{plan.price}</span>
          <span className="text-sm font-mono text-brand-light/40">/mês</span>
        </div>
      </div>

      <p className="text-sm text-brand-light/60 mb-10 min-h-[60px] font-light leading-relaxed">
        {plan.description}
      </p>

      <div className="flex flex-col gap-4 flex-grow mb-8">
        {plan.specialties.map((spec, i) => (
          <div key={i} className="flex flex-col border-b border-white/5 border-dashed pb-3 last:border-0">
            <div className="flex justify-between items-center">
              <span className="font-light text-sm text-brand-light/80">{spec.name}</span>
              <span className="font-mono text-brand-neon text-xs tracking-tight bg-brand-neon/10 px-2 py-1 rounded">{spec.volume}</span>
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
                  <p className="text-xs text-brand-light/50 mt-3 font-light leading-relaxed">
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
              className="overflow-hidden flex flex-col gap-6 mt-4 pt-4 border-t border-white/10"
            >
              <div className="pl-4 border-l border-brand-neon/50">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-neon mb-2">Diferencial do Tier</h4>
                <p className="text-sm text-brand-light/60 font-light leading-relaxed">{plan.diferencial}</p>
              </div>
              <div className="pl-4 border-l border-brand-neon/50">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-neon mb-2">Referência de Resultado</h4>
                <p className="text-sm text-brand-light/60 font-light leading-relaxed">{plan.referencia}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center gap-2 text-sm font-mono tracking-wide text-brand-light/40 hover:text-brand-light transition-colors mb-8 mx-auto"
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
          className={`w-full py-4 font-mono text-sm uppercase tracking-widest transition-all flex items-center justify-center mb-4 ${
            plan.recommended
              ? 'bg-brand-neon text-black hover:bg-white'
              : 'bg-white/10 text-brand-light hover:bg-white/20'
          }`}
        >
          Contratar
        </button>
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-brand-light/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>30 dias de garantia</span>
        </div>
      </div>
    </motion.div>
  );
};

const MaaSPricing = () => {
  return (
    <section id="pricing" className="bg-black text-brand-light py-32 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
            Escolha o plano ideal <br className="md:hidden" /><span className="italic text-brand-light/40">para o seu negócio</span>
          </h2>
          <p className="font-mono text-xs text-brand-light/40 tracking-widest uppercase">
            *Não contempla investimento em mídia paga
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PlanCard key={plan.tier} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaaSPricing;
