import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Activity,
  UserMinus,
  ChevronDown,
  Sparkles,
  Bot,
  Briefcase,
  Compass,
} from 'lucide-react';

// ──────────────────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────────────────
const pillars = [
  {
    id: 'CAC',
    label: 'Redução do CAC',
    icon: Target,
    title: 'IA aplicada a redução do CAC',
    description:
      'Otimizamos o custo de aquisição em mídia paga, SEO e inteligência criativa com camadas de IA que atuam de forma contínua e autônoma.',
    highlights: [
      'Análise automática de campanhas e anomalias',
      'Geração de criativos e copies via LLM',
      'Atribuição inteligente multi-canal',
      'Recomendação de budget por segmento',
    ],
    results: ['↓ CAC', '↑ ROAS', '↑ Tráfego qualificado'],
  },
  {
    id: 'CRO',
    label: 'Otimização de Conversão',
    icon: Activity,
    title: 'IA aplicada a otimização da conversão',
    description:
      'Diagnosticamos gargalos de funil, interpretamos comportamento on-page e priorizamos testes com IA — tornando cada visita mais rentável.',
    highlights: [
      'Diagnóstico automático de drop-off por etapa',
      'Interpretação de heatmaps via IA',
      'Geração de hipóteses de teste com ICE score',
      'Personalização dinâmica por segmento',
    ],
    results: ['↑ Taxa de conversão', '↓ CAC', '↑ ROAS'],
  },
  {
    id: 'RETENTION',
    label: 'Retenção & Rentabilidade',
    icon: UserMinus,
    title: 'IA aplicada a retenção e rentabilidade',
    description:
      'Antecipamos cancelamentos, otimizamos jornadas e identificamos oportunidades de expansão de receita com modelos preditivos e automação inteligente.',
    highlights: [
      'Score preditivo de propensão a churn',
      'Alertas automáticos para time de CS',
      'A/B testing de email com LLM',
      'Score de propensão a upgrade/cross-sell',
    ],
    results: ['↓ Churn', '↑ LTV', '↑ Receita por cliente'],
  },
];

const agents = [
  {
    icon: Bot,
    title: 'Agente de atendimento supervisionado',
    desc: 'Responde, triagem e encaminha demandas de clientes com IA — o humano valida exceções e situações sensíveis.',
  },
  {
    icon: Briefcase,
    title: 'Copiloto de qualificação comercial',
    desc: 'Recebe leads, qualifica automaticamente e entrega ao vendedor com um briefing completo: dor, fit e próximo passo.',
  },
  {
    icon: Compass,
    title: 'Copiloto de apoio à decisão',
    desc: 'Consolida dados de ERP, planilhas e CRM e responde perguntas operacionais em linguagem natural.',
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// Sub-component: Pillar Accordion Card
// ──────────────────────────────────────────────────────────────────────────────
const PillarCard = ({
  pillar,
  isOpen,
  onClick,
}: {
  pillar: (typeof pillars)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  const Icon = pillar.icon;
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border p-6 cursor-pointer select-none transition-all duration-300 group ${
        isOpen
          ? 'border-brand-neon/40 bg-brand-light/[0.08] shadow-[0_0_30px_rgba(198,240,0,0.05)]'
          : 'border-brand-light/10 bg-brand-light/5 hover:border-brand-neon/20'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl transition-all duration-300 ${
              isOpen
                ? 'bg-brand-neon text-black'
                : 'bg-brand-neon/10 text-brand-neon group-hover:bg-brand-neon/20'
            }`}
          >
            <Icon size={22} />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold text-brand-light group-hover:text-brand-neon transition-colors">
              {pillar.label}
            </h4>
            <p className="text-xs text-brand-light/50 mt-0.5">{pillar.title}</p>
          </div>
        </div>
        <div
          className={`p-2 rounded-lg border transition-all duration-300 flex-shrink-0 ${
            isOpen
              ? 'bg-brand-neon/10 border-brand-neon/30 text-brand-neon'
              : 'bg-brand-light/5 border-brand-light/10 text-brand-light/60 group-hover:text-brand-neon group-hover:border-brand-neon/30'
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expandable */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="h-px bg-brand-light/10 my-5" />
            <p className="text-brand-light/70 text-sm md:text-base leading-relaxed mb-5">
              {pillar.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {pillar.highlights.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-brand-light/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-1.5 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-light/5">
              {pillar.results.map((r, i) => (
                <span
                  key={i}
                  className="text-xs bg-brand-neon text-black px-2.5 py-1 rounded font-bold shadow-[0_0_15px_rgba(198,240,0,0.2)]"
                >
                  {r}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────────────────────────────────────
const AiHomeSection = () => {
  const [openPillar, setOpenPillar] = useState<string | null>('CAC');

  const toggle = (id: string) => setOpenPillar(openPillar === id ? null : id);

  return (
    <section className="py-28 bg-black relative overflow-hidden border-t border-brand-light/5">
      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-neon/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3"
          >
            AI-Led Growth
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-brand-light leading-[1.05] mb-6"
          >
            IA sem estratégia é{' '}
            <span className="text-red-500/90 line-through decoration-brand-light/20">custo</span>.{' '}
            <br className="hidden md:inline" />
            IA bem aplicada é{' '}
            <span className="text-brand-neon">vantagem competitiva</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-light/60 text-lg md:text-xl leading-relaxed font-light"
          >
            Na Velora, só implementamos onde existe{' '}
            <span className="text-brand-light font-semibold">problema real</span>,{' '}
            <span className="text-brand-light font-semibold">dado disponível</span> e{' '}
            <span className="text-brand-light font-semibold">resultado mensurável</span>.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">

          {/* Left: Pillars accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-widest text-brand-neon font-bold mb-6">
              Onde aplicamos IA
            </p>
            {pillars.map((p) => (
              <PillarCard
                key={p.id}
                pillar={p}
                isOpen={openPillar === p.id}
                onClick={() => toggle(p.id)}
              />
            ))}
          </motion.div>

          {/* Right: Statement + Agents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Callout stat */}
            <div className="bg-brand-light/5 border border-brand-light/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none" />
              <span className="text-5xl md:text-6xl font-black text-brand-neon tracking-tight block mb-2">
                40–70%
              </span>
              <p className="text-brand-light/80 text-sm font-medium leading-snug">
                Redução do volume manual em processos operacionais e de backoffice
                com IA supervisionada.
              </p>
            </div>

            {/* Agents label */}
            <p className="text-xs uppercase tracking-widest text-brand-neon font-bold pt-2">
              Agentes & Copilotos de IA
            </p>

            {/* Agents cards */}
            {agents.map((agent, idx) => {
              const IconComp = agent.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-brand-light/5 border border-brand-light/10 hover:border-brand-neon/20 p-5 rounded-2xl transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-brand-neon/10 text-brand-neon group-hover:bg-brand-neon group-hover:text-black transition-all duration-300 flex-shrink-0 mt-0.5">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-brand-light group-hover:text-brand-neon transition-colors mb-1">
                      {agent.title}
                    </h4>
                    <p className="text-brand-light/55 text-sm leading-relaxed">{agent.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-light/5 border border-brand-light/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 to-transparent pointer-events-none rounded-3xl" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-neon rounded-tl-3xl -translate-x-px -translate-y-px" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-neon rounded-br-3xl translate-x-px translate-y-px" />

          <div className="relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-brand-neon" />
              <span className="text-brand-neon text-xs font-bold uppercase tracking-widest">
                Diagnóstico sem custo
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-light mb-2 tracking-tight">
              Pronto para aplicar IA onde ela realmente importa?
            </h3>
            <p className="text-brand-light/60 text-sm md:text-base">
              Escopo sob medida. Resultado mensurável desde o primeiro entregável.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/ia-led-growth"
              className="w-full sm:w-auto px-7 py-4 border border-brand-neon/40 text-brand-neon font-bold text-sm rounded-lg hover:bg-brand-neon/10 transition-all duration-300 text-center whitespace-nowrap"
            >
              Ver tudo sobre IA
            </Link>
            <Link
              to="/diagnostico"
              className="w-full sm:w-auto px-8 py-4 bg-brand-neon text-black font-bold text-sm rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center group shadow-[0_0_30px_rgba(198,240,0,0.15)] hover:shadow-[0_0_40px_rgba(198,240,0,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Quero crescer com IA
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AiHomeSection;
