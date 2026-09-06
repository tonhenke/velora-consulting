import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Compass, LineChart, Briefcase } from 'lucide-react';

const modules = [
  {
    num: "01",
    title: "Agente de atendimento supervisionado",
    desc: "Responde, triagem e encaminha demandas de clientes com IA - o humano valida exceções e situações sensíveis. Integra com WhatsApp, email e helpdesk existente.",
    stack: ["WhatsApp API", "Zendesk", "Freshdesk", "LLM API", "n8n"],
    icon: Bot
  },
  {
    num: "02",
    title: "Copiloto de qualificação comercial",
    desc: "Recebe leads, faz perguntas de qualificação, pontua e entrega ao vendedor com um briefing completo: nome, dor, fit e próximo passo sugerido.",
    stack: ["HubSpot", "RD Station", "Formulários", "Landing Pages", "LLM Scoring"],
    icon: Briefcase
  },
  {
    num: "03",
    title: "Copiloto de apoio à decisão operacional",
    desc: "Consolida dados de múltiplas fontes (ERP, planilhas, CRM) e responde perguntas operacionais em linguagem natural - estoque, performance, gargalos.",
    stack: ["Google Sheets", "Airtable", "ERP via API", "Webhooks", "RAG / LLM"],
    icon: Compass
  },
  {
    num: "04",
    title: "Automação de tarefas repetitivas de backoffice",
    desc: "Mapeia e automatiza fluxos manuais, reclassificação de documentos, preenchimento de dados e relatórios periódicos, liberando o time para trabalho de valor.",
    stack: ["Make", "n8n", "OCR", "LLM", "Google Drive"],
    icon: LineChart
  }
];

const AiLedGrowthOS = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden border-t border-brand-light/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title, Intro & Stat Card */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3">
                Velora OS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-light tracking-tight mb-6">
                Efficiency Layer
              </h2>
              <p className="text-brand-light/70 text-lg leading-relaxed font-light">
                Capacidade operacional com IA supervisionada, sem aumentar o headcount.
              </p>
            </div>

            <p className="text-brand-light/60 text-sm md:text-base leading-relaxed">
              Para médias empresas que precisam escalar atendimento, qualificação e decisão operacional sem contratar mais pessoas, o **Velora OS** é uma camada de agentes e copilotos de IA embarcada na operação, projetada para ser supervisionada pelo time existente, não para substituí-lo.
            </p>

            {/* Stat Callout Widget */}
            <div className="bg-brand-light/5 border border-brand-light/10 p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-neon/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-5xl md:text-6xl font-black text-brand-neon tracking-tight block mb-2">
                40–70%
              </span>
              <p className="text-brand-light/80 text-sm font-medium leading-snug">
                Redução do volume manual em processos operacionais e de backoffice repetitivos com IA.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/diagnostico"
                className="w-full sm:w-auto px-8 py-4 bg-brand-neon text-black font-bold rounded-lg hover:bg-brand-neon/90 transition-all duration-300 flex items-center justify-center group shadow-[0_0_30px_rgba(198,240,0,0.1)]"
              >
                Desbloquear crescimento com IA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Modules List */}
          <div className="lg:col-span-7 space-y-6">
            {modules.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-brand-light/5 border border-brand-light/10 hover:border-brand-neon/20 p-6 md:p-8 rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Badge and Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <span className="text-3xl font-extrabold text-brand-neon/20 group-hover:text-brand-neon/80 transition-colors block mb-2 leading-none">
                        {mod.num}
                      </span>
                      <div className="p-2 bg-brand-light/5 border border-brand-light/10 text-brand-light rounded-lg">
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-brand-light group-hover:text-brand-neon transition-colors">
                        {mod.title}
                      </h3>
                      
                      <p className="text-brand-light/70 text-sm md:text-base leading-relaxed">
                        {mod.desc}
                      </p>

                      {/* Technical Pill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-light/5">
                        {mod.stack.map((item, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] md:text-xs bg-brand-light/5 text-brand-light/50 border border-brand-light/10 px-2 py-0.5 rounded font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiLedGrowthOS;
