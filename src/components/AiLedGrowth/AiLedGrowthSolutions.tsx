import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Search, BarChart2, Paintbrush, 
  Activity, Eye, Layers, UserCheck, 
  UserMinus, Mail, Milestone, TrendingUp,
  ArrowRight, Cpu, RefreshCw, Sparkles, Database, ChevronDown
} from 'lucide-react';

// Data types
type Product = {
  title: string;
  subtitle: string;
  desc: string;
  how: string[];
  stat?: string;
  icon: any;
};

type PillarData = {
  title: string;
  description: string;
  products: Product[];
  sources: string[];
  stack: string[];
  delivery: string[];
  results: string[];
};

const pillars: Record<string, PillarData> = {
  CAC: {
    title: "IA aplicada a redução do CAC",
    description: "Utilizamos Inteligência Artificial para otimizar o custo de aquisição de clientes em diferentes frentes de atuação.",
    products: [
      {
        title: "Paid Media AI Optimizer",
        subtitle: "Inteligência em mídia paga com IA",
        desc: "Profissionais de mídia paga gastam horas analisando dados de campanhas manualmente e tomando decisões com atraso. A nossa solução de IA entra como uma camada de análise contínua que conecta via API nas plataformas (Meta Ads, Google Ads), identifica automaticamente campanhas com queda de CTR, aumento de CPL ou anomalias de gasto, e gera um relatório narrativo com recomendações priorizadas. Também comporta o uso de LLM para gerar variações de copy e headline com base nos anúncios com histórico de melhor performance.",
        how: [
          "Análise automática de campanhas",
          "Alertas de anomalia e queda de performance",
          "Geração de criativos e copies via LLM",
          "Recomendação de bid e budget por segmento"
        ],
        stat: "Campanhas com IA entregam até 22% mais ROAS e reduzem CPA em até 32% vs gestão manual.",
        icon: Target
      },
      {
        title: "SEO AI Intelligence",
        subtitle: "Otimização orgânica orientada por dados com foco em IA",
        desc: "Entregamos um sistema que monitora posições, identifica oportunidades de conteúdo com base em gap de palavras-chave (cruzando GSC + Ahrefs/Semrush), e usa LLM para gerar ou otimizar o conteúdo existente com base nos sinais reais do Google. Geração de briefing de pauta mensal de forma automatizada com as oportunidades mais rentáveis priorizadas por volume e dificuldade.",
        how: [
          "Análise de gap de palavras-chave com IA",
          "Auditoria técnica automatizada de SEO",
          "Geração e otimização de conteúdo via LLM",
          "Monitoramento de posições e oportunidades"
        ],
        icon: Search
      },
      {
        title: "AI Acquisition Intelligence",
        subtitle: "Dashboard integrado com análise por IA",
        desc: "Unificamos dados de todos os canais de aquisição (Meta, Google, GA4, CRM) num único pipeline com IA que gera relatórios narrativos automáticos, identifica qual canal traz clientes com maior LTV e sugere redistribuição de budget com base em resultado real, não só em custo por clique.",
        how: [
          "Normalização de dados multi-canal com IA",
          "Atribuição inteligente de conversões",
          "Relatórios narrativos gerados por LLM",
          "Insights automáticos e próximos passos"
        ],
        icon: BarChart2
      },
      {
        title: "Creative AI Lab",
        subtitle: "Produção e teste de criativos com IA",
        desc: "Nossa solução atua na otimização do gargalo criativo, uma das maiores dores de quem escala mídia paga. A IA analisa os criativos de melhor desempenho histórico do cliente (e concorrentes via Foreplay ou Meta Ad Library) e gera um framework de o que está funcionando em termos de formato, gancho, CTA e proposta de valor, gerando briefings estruturados e variações de copy.",
        how: [
          "Análise reversa de criativos campeões",
          "Geração de variações de copy e headline",
          "Análise de criativos de alta performance",
          "Briefing automático baseado em dados",
          "Score preditivo de criativo antes do ar"
        ],
        icon: Paintbrush
      }
    ],
    sources: ["Meta Ads", "Google Ads", "GA4", "GSC", "CRM", "Planilhas"],
    stack: ["Claude / GPT API", "n8n", "Make", "Looker Studio", "Python", "GA4 API", "Ahrefs / Semrush API"],
    delivery: ["Projeto pontual", "Retainer mensal"],
    results: ["↓ CAC", "↑ ROAS", "↑ Tráfego qualificado"]
  },
  CRO: {
    title: "IA aplicada a otimização da conversão",
    description: "Aplicamos inteligência artificial para estratégias de CRO (Conversion Rate Optimization).",
    products: [
      {
        title: "AI Funnel Diagnostics",
        subtitle: "Diagnóstico inteligente de funil",
        desc: "Resolvemos o seu problema de funil 'quebrado'. Conectamos via API no GA4, mapeiamos cada etapa do funil com taxas de drop-off por segmento (fonte de tráfego, dispositivo, cohort de aquisição), e usamos um LLM para interpretar os padrões e gerar um relatório narrativo com as hipóteses mais prováveis de causa, já priorizadas por impacto estimado.",
        how: [
          "Mapeamento de drop-off por etapa",
          "Identificação de gargalos via GA4 + IA",
          "Análise de cohort e segmento",
          "Relatório narrativo com hipóteses priorizadas"
        ],
        stat: "Programas estruturados de CRO entregam ROI médio de 223% e lift de até 40% em conversão.",
        icon: Activity
      },
      {
        title: "Behavior Intelligence",
        subtitle: "Análise de comportamento on-page",
        desc: "Ferramentas como Hotjar e Microsoft Clarity geram muitos dados comportamentais que a maioria das agências não consegue processar com profundidade. A IA entra para interpretar os padrões: quais elementos de uma página estão recebendo atenção mas não convertendo, onde o scroll para, quais sessões gravadas mostram sinais de confusão ou fricção. O LLM transforma esses dados em recomendações concretas de UX.",
        how: [
          "Interpretação de heatmaps via IA",
          "Análise de sessões e padrões de scroll",
          "Identificação de elementos de fricção",
          "Recomendações de UX priorizadas"
        ],
        icon: Eye
      },
      {
        title: "LP Experiment AI",
        subtitle: "Gestão inteligente de testes A/B",
        desc: "O problema mais comum em CRO é que as equipes têm mais ideias do que capacidade de testar, e acabam testando as erradas. Usamos IA para gerar hipóteses baseadas nos dados do Funnel Diagnostics e do Behavior Intelligence, priorizadas por um ICE score automatizado, e usamos LLM para criar variações de copy, headlines e briefing de desenvolvimento.",
        how: [
          "Geração de hipóteses baseada em dados",
          "Priorização por ICE score automatizado",
          "Variações de copy e layout via LLM",
          "Análise estatística e leitura dos resultados"
        ],
        icon: Layers
      },
      {
        title: "Personalization Layer",
        subtitle: "Personalização dinâmica da experiência",
        desc: "A IA adapta o conteúdo da landing page com base em quem está visitando: a fonte de tráfego (usuário vindo de anúncio de desconto vê oferta diferente de busca orgânica), comportamento histórico (cliente recorrente vê upsell, lead frio vê prova social), e perfil no CRM.",
        how: [
          "Conteúdo dinâmico por segmento/fonte",
          "Ofertas e CTAs personalizados por perfil",
          "Jornadas adaptativas por comportamento",
          "Integração com ESP e CRM"
        ],
        icon: UserCheck
      }
    ],
    sources: ["GA4", "Hotjar", "Microsoft Clarity", "CRM", "Plataforma de e-commerce", "Landing pages"],
    stack: ["Claude / GPT API", "GA4 API", "Hotjar", "VWO / Convert", "n8n", "Make", "Webflow", "Looker Studio"],
    delivery: ["Diagnóstico", "Sprint de testes", "Retainer"],
    results: ["↑ Taxa de conversão", "↓ CAC", "↑ ROAS"]
  },
  RETENTION: {
    title: "IA aplicada a Retenção e Rentabilidade",
    description: "Utilizamos Inteligência Artificial para otimizar o ciclo de vida do cliente, identificando pontos de churn e oportunidades de expansão de receita.",
    products: [
      {
        title: "AI Radar de Churn",
        subtitle: "Modelo preditivo de cancelamento",
        desc: "Realizamos o cruzamento de dados comportamentais (logins, uso de features, abertura de emails, tickets de suporte, redução de consumo) com um modelo de scoring alimentado por LLM ou Machine Learning para antecipar perdas e acionar ações preventivas.",
        how: [
          "Ingestão e correlação de sinais comportamentais",
          "Sinais de engajamento + comportamento",
          "Score de propensão de saída por cliente",
          "Alertas automáticos para time de CS"
        ],
        stat: "Empresas com IA preditiva reduzem churn em 20–35% no primeiro ano, e detectam risco 60% mais cedo.",
        icon: UserMinus
      },
      {
        title: "Email Artificial Intelligence",
        subtitle: "Refinamento de fluxos de email marketing",
        desc: "Atuação como camada de inteligência sobre a estrutura de automação de marketing atual do cliente. Aplicação de IA para análise de fluxos existentes, identificação de mensagens com baixo engajamento, sugestão de otimização de copywriting, otimização do timing de envio por segmento e automatização de testes A/B.",
        how: [
          "Análise de performance por segmento",
          "Sugestão de conteúdo e timing via IA",
          "A/B testing automatizado com LLM"
        ],
        stat: "Personalização por IA gera 6× mais transações e 41% mais receita vs emails genéricos.",
        icon: Mail
      },
      {
        title: "Journey AI Optimizer",
        subtitle: "Análise e otimização da jornada do cliente",
        desc: "Integração dos dados do CRM com o histórico de interações para mapear onde os clientes estão travando ou se desengajando. A IA ajuda a identificar padrões (ex: clientes que cancelam geralmente passam por X sequência de eventos 45 dias antes) e gera recomendações de fluxos de reativação, nurturing ou intervenção humana.",
        how: [
          "Mapeamento de pontos de fricção",
          "Recomendação de próximo passo ideal",
          "Fluxos de reativação personalizados",
          "Gatilhos comportamentais em tempo real"
        ],
        icon: Milestone
      },
      {
        title: "AI Revenue Engine",
        subtitle: "Identificação de oportunidades de expansão de receita",
        desc: "Combina dados de uso, histórico de compras e perfil do cliente para gerar um score de propensão a upgrade ou cross-sell. A IA personaliza o conteúdo da abordagem (qual oferta, qual argumento, qual canal) com base no perfil comportamental.",
        how: [
          "Score de propensão a upgrade/cross-sell",
          "Segmentação inteligente por LTV potencial",
          "Ofertas dinâmicas no momento certo"
        ],
        icon: TrendingUp
      }
    ],
    sources: ["CRM", "ESP", "CDP", "Planilhas", "Webhooks"],
    stack: ["Claude / GPT API", "n8n", "Make", "Zapier", "Python / SQL", "Airtable", "Google Sheets"],
    delivery: ["Projeto pontual", "Retainer mensal"],
    results: ["↓ Churn", "↑ LTV", "↑ Receita por cliente"]
  }
};

const SolutionCard = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = product.icon;

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-brand-light/5 border rounded-2xl p-6 md:p-8 transition-all duration-300 group cursor-pointer flex flex-col justify-between select-none
        ${isOpen ? 'border-brand-neon/40 shadow-[0_0_30px_rgba(198,240,0,0.05)] bg-brand-light/[0.08]' : 'border-brand-light/10 hover:border-brand-neon/20 hover:shadow-[0_0_20px_rgba(198,240,0,0.02)]'}`}
    >
      <div>
        {/* Product Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl transition-all duration-300
              ${isOpen ? 'bg-brand-neon text-black' : 'bg-brand-neon/10 text-brand-neon group-hover:bg-brand-neon/20'}`}
            >
              <IconComponent size={24} />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-brand-light group-hover:text-brand-neon transition-colors">
                {product.title}
              </h4>
              <span className="text-xs text-brand-neon/80 font-medium tracking-wide uppercase block mt-0.5">
                {product.subtitle}
              </span>
            </div>
          </div>

          {/* Chevron indicator */}
          <div className={`p-2 rounded-lg border transition-all duration-300
            ${isOpen ? 'bg-brand-neon/10 border-brand-neon/30 text-brand-neon' : 'bg-brand-light/5 border-brand-light/10 text-brand-light/60 group-hover:text-brand-neon group-hover:border-brand-neon/30'}`}
          >
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Divider */}
              <div className="h-px bg-brand-light/10 my-6" />

              {/* Product What it is */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-brand-light/40 font-bold block mb-2">O que é:</span>
                <p className="text-brand-light/75 text-sm md:text-base leading-relaxed">{product.desc}</p>
              </div>

              {/* Product How */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-brand-light/40 font-bold block mb-3">Como aplicamos:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.how.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-xs md:text-sm text-brand-light/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-1.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat indicator if exists */}
              {product.stat && (
                <div className="mt-6 border-t border-brand-light/5 bg-brand-neon/5 border-l-2 border-l-brand-neon p-4 rounded-r-lg">
                  <p className="text-xs md:text-sm font-semibold text-brand-light/95 italic leading-relaxed">
                    "{product.stat}"
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AiLedGrowthSolutions = () => {
  const [activeTab, setActiveTab] = useState<string>("CAC");
  const data = pillars[activeTab];

  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-24 bg-brand-dark/95 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center md:text-left max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3"
          >
            Soluções Inteligentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-brand-light mb-6 tracking-tight"
          >
            IA direcionada para os <span className="text-brand-neon">principais problemas</span> de mercado
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-light/60 text-lg leading-relaxed"
          >
            Estruturamos soluções que respondem diretamente a gargalos estratégicos e operacionais, garantindo dados consolidados e resultados mensuráveis.
          </motion.p>
        </div>

        {/* Tab Selector */}
        <div className="relative mb-12">
          {/* Mobile swipe helper */}
          <div className="flex justify-between items-center mb-3 lg:hidden px-1">
            <span className="text-[10px] uppercase tracking-widest text-brand-neon font-black">
              Selecione o Pilar
            </span>
            <span className="text-[10px] uppercase tracking-widest text-brand-light/40 font-bold flex items-center gap-1 animate-pulse">
              Arraste para o lado ➔
            </span>
          </div>

          {/* Left Gradient Fade Mask */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent pointer-events-none z-10 lg:hidden" />
          )}

          {/* Right Gradient Fade Mask */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none z-10 lg:hidden" />
          )}

          {/* Scrollable Container */}
          <div 
            ref={tabsRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto hide-scrollbar border-b border-brand-light/10 pb-px scroll-smooth"
          >
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {Object.keys(pillars).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 rounded-t-xl
                    ${activeTab === key 
                      ? 'bg-brand-light text-brand-black shadow-[0_-4px_15px_rgba(255,255,255,0.05)]' 
                      : 'text-brand-light/50 hover:text-brand-light hover:bg-brand-light/5'
                    }`}
                >
                  {key === "CAC" ? "Redução do CAC" : key === "CRO" ? "Otimização de Conversão (CRO)" : "Retenção & Rentabilidade"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {/* Tab Pillar Intro */}
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-neon mb-3">{data.title}</h3>
              <p className="text-brand-light/80 text-lg leading-relaxed">{data.description}</p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {data.products.map((product, idx) => (
                <SolutionCard key={idx} product={product} />
              ))}
            </div>

            {/* Details Panel (Stack, Integrations, Model, Results) */}
            <div className="bg-brand-light/5 border border-brand-light/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Integration Sources */}
                <div>
                  <div className="flex items-center gap-2 text-brand-neon mb-4">
                    <Database size={18} />
                    <h5 className="font-bold text-sm tracking-wider uppercase">Fontes de Dados</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.sources.map((src, i) => (
                      <span key={i} className="text-xs bg-brand-light/10 border border-brand-light/10 px-2.5 py-1 rounded text-brand-light/80">{src}</span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 text-brand-neon mb-4">
                    <Cpu size={18} />
                    <h5 className="font-bold text-sm tracking-wider uppercase">Stack de IA</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.stack.map((stk, i) => (
                      <span key={i} className="text-xs bg-brand-light/10 border border-brand-light/10 px-2.5 py-1 rounded text-brand-light/80">{stk}</span>
                    ))}
                  </div>
                </div>

                {/* Delivery Model */}
                <div>
                  <div className="flex items-center gap-2 text-brand-neon mb-4">
                    <RefreshCw size={18} />
                    <h5 className="font-bold text-sm tracking-wider uppercase">Modelo de Entrega</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.delivery.map((del, i) => (
                      <span key={i} className="text-xs bg-brand-neon/10 border border-brand-neon/20 px-2.5 py-1 rounded text-brand-neon font-medium">{del}</span>
                    ))}
                  </div>
                </div>

                {/* Expected Results */}
                <div>
                  <div className="flex items-center gap-2 text-brand-neon mb-4">
                    <Sparkles size={18} />
                    <h5 className="font-bold text-sm tracking-wider uppercase">Resultado Esperado</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.results.map((res, i) => (
                      <span key={i} className="text-xs bg-brand-neon text-brand-black px-2.5 py-1 rounded font-bold shadow-[0_0_15px_rgba(198,240,0,0.2)]">{res}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-12 pt-8 border-t border-brand-light/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <p className="text-brand-light/60 text-sm md:text-base">
                  Pronto para estruturar esta inteligência na sua operação?
                </p>
                <Link
                  to="/diagnostico"
                  className="w-full md:w-auto px-8 py-4 bg-brand-neon text-black font-bold text-sm rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center group"
                >
                  Desbloquear crescimento com IA
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AiLedGrowthSolutions;
