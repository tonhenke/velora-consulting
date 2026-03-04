
import { motion } from 'framer-motion';
import { Bot, Database, MessageSquare, Zap } from 'lucide-react';

const agents = [
    {
        title: "Inteligência de Contas",
        desc: "Agentes que monitoram sinais de compra e enriquecem dados de leads automaticamente.",
        icon: Database,
        color: "bg-brand-neon/10 text-brand-neon"
    },
    {
        title: "Engenharia de Conteúdo",
        desc: "Produção de conteúdo técnico e SEO em escala, mantendo a voz da marca.",
        icon: MessageSquare,
        color: "bg-purple-500/10 text-purple-500"
    },
    {
        title: "Outbound Baseado em Sinais",
        desc: "Prospecção ativa que só aciona quando o lead demonstra intenção real.",
        icon: Zap,
        color: "bg-yellow-500/10 text-yellow-500"
    },
    {
        title: "Enriquecimento de Dados",
        desc: "Limpeza e atualização contínua do seu CRM sem intervenção manual.",
        icon: Bot,
        color: "bg-green-500/10 text-green-500"
    }
];

const AiAgents = () => {
    return (
        <section className="py-32 bg-[#080808]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light/5 rounded-full border border-brand-light/10 mb-6">
                            <Bot size={14} className="text-brand-neon" />
                            <span className="text-xs font-medium text-brand-light/80">VELORA AI AGENTS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-light tracking-tight">
                            Agentes de IA na sua equipe.
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-600 mt-2">
                            Trabalhando 24/7.
                        </h3>
                    </div>
                    <p className="text-brand-light/60 max-w-md text-right md:text-left">
                        Automatizamos o trabalho repetitivo para que seus humanos foquem apenas no fechamento e estratégia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-brand-dark border border-brand-light/10 p-8 rounded-2xl hover:border-white/20 transition-all"
                        >
                            <div className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center mb-6`}>
                                <agent.icon size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-brand-light mb-3">{agent.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {agent.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiAgents;
