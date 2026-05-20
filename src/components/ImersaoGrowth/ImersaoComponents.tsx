import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, BarChart3, Database, 
  Briefcase, Zap, RefreshCw, ChevronRight, 
  LineChart, Sparkles, Target, Layers
} from 'lucide-react';

const handleWhatsAppClick = () => {
  const phoneNumber = "5554996854825";
  const message = encodeURIComponent("Olá! Gostaria de entender mais sobre a Imersão em Growth da Velora.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

const CTAButton = ({ text = "Quero gerar mais resultado", className = "" }) => (
  <button
    onClick={handleWhatsAppClick}
    className={`px-8 py-4 bg-brand-neon text-black font-bold rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(198,240,0,0.4)] ${className}`}
  >
    {text}
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

const SectionHeading = ({ tag = "", title = "", subtitle = "", center = false }) => (
  <div className={`mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
    {tag && (
      <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-light mb-6 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg md:text-xl text-brand-light/60 font-light leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// 1. Hero Section
export const ImersaoHero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-dark/40 rounded-full blur-[110px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-sm font-medium tracking-wider mb-6 uppercase">
              Imersão de Growth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-brand-light mb-8 leading-[1.1] max-w-4xl mx-auto"
          >
            Imersão em Growth para <br />
            <span className="text-brand-neon">destravar oportunidades</span> <br className="hidden md:block" />
            de crescimento
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-brand-light/70 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            <p className="font-medium text-brand-light">
              Entenda onde estão os gargalos, oportunidades e prioridades do seu negócio antes de acelerar investimento, mídia ou operação.
            </p>
            <p>
              A Imersão da Velora combina diagnóstico estratégico, análise de funil, tecnologia, comportamento de mercado e visão de Growth para transformar incertezas em direcionamento prático.
            </p>
            <p className="text-brand-neon/90 font-medium">
              Mais clareza. Mais foco. Mais previsibilidade para crescer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton className="w-full sm:w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 2. Seção — O que é a Imersão em Growth?
export const ImersaoAbout = () => {
  const problems = [
    "Gargalos de crescimento",
    "Problemas de conversão",
    "Ineficiências de funil",
    "Oportunidades de geração de demanda",
    "Quick wins",
    "Riscos estratégicos",
    "Necessidades estruturais de Growth"
  ];

  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              tag="O que é a Imersão?" 
              title="Diagnóstico estratégico para orientar decisões de crescimento"
            />

            <div className="space-y-6 text-lg md:text-xl text-brand-light/70 font-light leading-relaxed mb-10">
              <p>
                A Imersão em Growth da Velora foi criada para empresas que precisam entender com profundidade seu cenário atual antes de escalar aquisição, performance, CRM, conteúdo, tecnologia ou operação comercial.
              </p>
              <p>
                Nosso processo investiga o negócio de ponta a ponta para identificar:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-brand-gray/10 border border-brand-light/5 p-4 rounded-xl">
                  <span className="p-1 bg-brand-neon/10 rounded-md text-brand-neon mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-brand-light/90 text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-brand-light font-medium pt-8 border-t border-brand-light/10">
              Ao final da imersão, entregamos um plano claro e priorizado para orientar as próximas etapas de crescimento da empresa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 3. Seção — Para quem é
export const ImersaoTarget = () => {
  const items = [
    "Estão investindo em marketing, mas sentem baixa previsibilidade de resultado",
    "Possuem canais digitais sem integração estratégica",
    "Querem estruturar uma operação de Growth",
    "Precisam entender melhor seus públicos e jornadas",
    "Buscam alinhar marketing, vendas e tecnologia",
    "Desejam identificar oportunidades antes de escalar investimento",
    "Precisam priorizar iniciativas com maior impacto no negócio"
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            tag="Para Quem É" 
            title="Empresas que precisam crescer com mais clareza estratégica"
            subtitle="A Imersão é ideal para empresas que enfrentam os seguintes desafios na jornada de escala:"
          />

          <div className="space-y-4 mb-16">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-brand-gray/20 border border-brand-light/5 p-5 rounded-xl hover:border-brand-neon/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon font-mono text-sm shrink-0">
                  0{index + 1}
                </div>
                <p className="text-brand-light/95 text-base md:text-lg font-medium">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center border-t border-brand-light/10 pt-12">
            <p className="text-brand-light/50 text-sm mb-6 uppercase tracking-wider italic">
              "Diagnóstico antes da escala."
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Seção — O que analisamos
export const ImersaoWhatWeAnalyze = () => {
  const analysisData = [
    {
      title: "Negócio e posicionamento",
      icon: Briefcase,
      items: [
        "Produtos e serviços",
        "Diferenciais competitivos",
        "Proposta de valor",
        "Comunicação atual",
        "Estrutura comercial"
      ]
    },
    {
      title: "Marketing e aquisição",
      icon: Target,
      items: [
        "Estratégia atual de mídia e performance",
        "Canais digitais",
        "Jornada de conversão",
        "Funil de marketing",
        "Captação e geração de demanda"
      ]
    },
    {
      title: "Dados e tecnologia",
      icon: Database,
      items: [
        "Tracking e mensuração",
        "Ferramentas utilizadas",
        "Estrutura de CRM",
        "Integrações",
        "Maturidade analítica"
      ]
    },
    {
      title: "Mercado e comportamento",
      icon: BarChart3,
      items: [
        "Benchmarks",
        "Concorrência",
        "Tendências",
        "Mudanças de comportamento",
        "Oportunidades emergentes"
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-dark/30 border-t border-b border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            tag="O que analisamos" 
            title="Uma visão completa da operação de crescimento"
            subtitle="Durante a Imersão, analisamos diferentes camadas da operação para construir um diagnóstico profundo e acionável."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisData.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-brand-gray/30 border border-brand-light/10 p-6 rounded-2xl hover:border-brand-neon/50 transition-all duration-300 flex flex-col"
                >
                  <div className="p-3 bg-brand-neon/10 rounded-lg text-brand-neon w-12 h-12 flex items-center justify-center mb-6">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-light mb-4 tracking-tight">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 mt-auto">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-brand-light/60">
                        <ChevronRight className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Seção — Nossa metodologia
export const ImersaoMethodology = () => {
  const steps = [
    {
      num: "01",
      title: "Setup",
      desc: "Alinhamento de objetivos, stakeholders, cronograma, fluxos de comunicação e entendimento inicial do contexto do projeto."
    },
    {
      num: "02",
      title: "Discovery Interno",
      desc: "Investigação da operação atual, canais, estrutura de Growth, processos, indicadores, tecnologia e visão dos stakeholders."
    },
    {
      num: "03",
      title: "Discovery de Mercado",
      desc: "Análise de benchmarks, concorrência, tendências, comportamento do consumidor e referências estratégicas nacionais e internacionais."
    },
    {
      num: "04",
      title: "Enquadramento da Solução",
      desc: "Consolidação dos aprendizados in um diagnóstico estratégico com recomendações, roadmap e visão de priorização."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            tag="Processo" 
            title="Uma metodologia estruturada para reduzir incertezas"
            subtitle="A Imersão em Growth acontece através de etapas organizadas para garantir profundidade analítica e direcionamento estratégico."
            center={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-brand-gray/10 border border-brand-light/5 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-neon/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-8 text-7xl font-mono font-black text-brand-light/5 select-none transition-colors group-hover:text-brand-neon/10">
                  {step.num}
                </div>
                <span className="inline-block py-1 px-3 bg-brand-neon/10 rounded-md text-brand-neon font-mono text-xs mb-4">
                  Etapa {step.num}
                </span>
                <h3 className="text-2xl font-bold text-brand-light mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-brand-light/60 text-base leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center pt-8 border-t border-brand-light/10">
            <p className="text-brand-light/50 text-sm mb-6 uppercase tracking-wider italic">
              "Dados, estratégia e execução conectados."
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Seção — Growth Discovery Canvas
export const GrowthDiscoveryCanvas = () => {
  const canvasElements = [
    { title: "Cenário atual do negócio", icon: Briefcase },
    { title: "Estrutura de funil", icon: Layers },
    { title: "Canais e aquisição", icon: Target },
    { title: "Tecnologia e tracking", icon: Database },
    { title: "Maturidade de Growth", icon: LineChart },
    { title: "Oportunidades prioritárias", icon: Zap },
    { title: "Hipóteses estratégicas", icon: Sparkles },
    { title: "Caminhos de evolução", icon: RefreshCw }
  ];

  return (
    <section className="py-24 bg-brand-dark/40 border-t border-b border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            tag="Nossas Ferramentas" 
            title="Growth Discovery Canvas"
            subtitle="Transformamos informação em visão estratégica. Utilizamos ferramentas proprietárias da Velora para estruturar os aprendizados da Imersão."
            center={true}
          />

          {/* Canvas visual board */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {canvasElements.map((el, idx) => {
              const Icon = el.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-black/40 border border-brand-light/10 p-6 rounded-xl hover:border-brand-neon/40 transition-colors flex flex-col justify-between items-center text-center min-h-[140px]"
                >
                  <Icon className="w-8 h-8 text-brand-neon mb-3" strokeWidth={1.5} />
                  <span className="text-brand-light font-bold text-sm leading-snug">
                    {el.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-brand-gray/10 border border-brand-light/5 p-6 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-brand-light/75 text-base md:text-lg font-light leading-relaxed">
              Isso permite que todos os stakeholders tenham clareza sobre 
              <span className="text-brand-light font-semibold"> onde a empresa está</span>, 
              o que está impedindo o crescimento, 
              o que deve ser priorizado e 
              como evoluir a operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Seção — Priorização de oportunidades
export const ImersaoPrioritization = () => {
  const priorities = [
    { title: "Quick wins", desc: "Ações rápidas e de alto impacto que geram resultados imediatos com menor esforço." },
    { title: "Projetos estruturantes", desc: "Projetos essenciais de médio/longo prazo que constroem a fundação operacional da empresa." },
    { title: "Experimentos", desc: "Testes rápidos de baixo risco para validar novas hipóteses estratégicas de canais e audiência." },
    { title: "Backlog de Discovery", desc: "Iniciativas e hipóteses que exigem maior pesquisa antes do desenvolvimento e execução." },
    { title: "Backlog de Delivery", desc: "Lista organizada de tarefas maduras prontas para serem implementadas pela equipe." }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            tag="Priorização" 
            title="Priorização de oportunidades"
            subtitle="Nem toda oportunidade deve ser executada agora. Além do diagnóstico, realizamos uma dinâmica de priorização estratégica para classificar iniciativas conforme impacto no negócio e clareza para execução."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {priorities.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-brand-gray/20 border border-brand-light/5 p-6 rounded-xl hover:border-brand-neon/30 transition-all flex flex-col justify-between ${idx >= 3 ? 'sm:col-span-1 md:col-span-1' : ''}`}
              >
                <div>
                  <h4 className="text-lg font-bold text-brand-neon mb-3">{p.title}</h4>
                  <p className="text-brand-light/75 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-brand-neon/10 border border-brand-neon/20 p-6 rounded-2xl text-center mb-12">
            <p className="text-brand-neon text-base md:text-lg font-medium leading-relaxed">
              O objetivo é garantir foco nas iniciativas com maior potencial de resultado e menor desperdício de esforço.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-brand-light/50 text-sm mb-6 uppercase tracking-wider italic">
              "Menos achismo. Mais direcionamento."
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. Seção — O que você recebe
export const ImersaoDeliverables = () => {
  const deliverables = [
    "Diagnóstico completo do ecossistema digital",
    "Mapeamento de gargalos e oportunidades",
    "Análise de canais, funil e tecnologia",
    "Benchmark de mercado",
    "Análise de tendências e comportamento",
    "Estrutura recomendada de Growth",
    "Roadmap estratégico",
    "Priorização de iniciativas",
    "Sugestão de pilotos e experimentos",
    "Recomendações de evolução operacional"
  ];

  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            tag="Entregáveis" 
            title="O que você recebe ao final da Imersão"
            subtitle="Nosso objetivo é fornecer entregas práticas e acionáveis, não relatórios vazios. Ao final da imersão, sua empresa recebe:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-black/40 border border-brand-light/5 p-4 rounded-xl hover:border-brand-neon/30 transition-colors"
              >
                <div className="p-1 bg-brand-neon/10 rounded text-brand-neon shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-brand-light/90 text-sm md:text-base font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 9. Seção — Diferenciais da Velora
export const ImersaoDifferentials = () => {
  const pillars = [
    "Estratégia", "Dados", "Tecnologia", "Produto", 
    "Conteúdo", "Performance", "Jornada do cliente", "Experimentação"
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            tag="Diferenciais" 
            title="Diferenciais da Velora — Growth além da mídia"
            subtitle="Na Velora, acreditamos que crescimento não acontece apenas com tráfego pago ou campanhas isoladas. Nossa abordagem conecta múltiplos pilares essenciais."
            center={true}
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {pillars.map((pillar, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="px-5 py-2.5 bg-brand-gray/40 border border-brand-light/10 rounded-full text-brand-light text-base font-semibold hover:border-brand-neon hover:text-brand-neon transition-colors cursor-default"
              >
                {pillar}
              </motion.span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-brand-light/70 font-light max-w-2xl mx-auto mb-12">
            Tudo isso com visão prática de implementação e foco real em geração de valor para o negócio.
          </p>

          <div className="flex flex-col items-center justify-center">
            <p className="text-brand-light/50 text-sm mb-6 uppercase tracking-wider italic">
              "Growth começa com entendimento profundo."
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// 10. Seção — Resultados esperados
export const ImersaoResults = () => {
  const results = [
    "Priorizar melhor investimentos",
    "Reduzir desperdícios",
    "Identificar oportunidades de crescimento",
    "Criar previsibilidade operacional",
    "Estruturar uma cultura de Growth",
    "Melhorar tomada de decisão",
    "Evoluir a maturidade digital da operação"
  ];

  return (
    <section className="py-24 bg-brand-dark/30 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            tag="Resultados" 
            title="Resultados esperados — O que muda após a Imersão"
            subtitle="Ao final do projeto de diagnóstico estratégico, sua empresa ganha a tração que precisa para escalar de forma consciente e focada:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-brand-gray/10 border border-brand-light/5 p-4 rounded-xl hover:border-brand-neon/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <span className="text-brand-light/95 text-base font-semibold">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 11. CTA Final
export const ImersaoFinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-neon relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-black/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-8 leading-tight">
              Crescimento sem diagnóstico gera desperdício
            </h2>
            
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-12 leading-relaxed">
              Antes de acelerar investimento, entenda exatamente onde estão os gargalos, quais oportunidades devem ser priorizadas e como estruturar crescimento de forma sustentável.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="px-10 py-5 bg-black text-brand-neon text-lg font-bold rounded-lg hover:bg-black/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Quero gerar mais resultado
            </button>

            <p className="text-black/60 text-xs mt-6 font-semibold uppercase tracking-widest">
              "Crescer sem diagnóstico custa caro."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
