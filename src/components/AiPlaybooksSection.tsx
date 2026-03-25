import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Workflow, Figma, Sparkles, MessageSquare, LineChart, Code2, Database, Zap } from 'lucide-react';

const playbooksData = {
    STRATEGY: {
        current: [
            {
                title: "Estratégia e Prototipagem Acelerada",
                items: [
                    "Da hipótese ao protótipo MVP (Replit)",
                    "Alertas de changelog de concorrentes via IA agêntica com Zapier e Browse AI"
                ]
            },
            {
                title: "Personalização e Segmentação",
                items: [
                    "Segmentação guiada por IA, personalização preditiva e Multi-Armed Bandits Contextuais"
                ]
            }
        ],
        exploring: [
            {
                title: "Documentação e Relatórios",
                items: [
                    "Assistentes de input alimentados por IA",
                    "Gems baseados em POPs para criação de briefings, formatação e síntese temática em calls e apresentações de testes"
                ]
            },
            {
                title: "Testes Aprimorados por IA",
                items: [
                    "Copiloto de IA (ex: geração de variantes)",
                    "Omniconvert, Pulse, Reveal, Explore (ex: mapeamento de jornada)",
                    "BigSur (ex: orquestração de experiências)"
                ]
            }
        ],
        logos: [
            { name: "Gemini", icon: Sparkles },
            { name: "ChatGPT", icon: MessageSquare },
            { name: "Zapier", icon: Zap },
        ]
    },
    "UI/DESIGN": {
        current: [
            {
                title: "Auditorias",
                items: [
                    "Auditorias de UI baseadas em LLM para pontos de vista adicionais"
                ]
            },
            {
                title: "Conteúdo",
                items: [
                    "Recursos nativos de IA do Figma",
                    "Geração e edição de imagens por IA",
                    "Substituição de conteúdo por IA",
                    "OCR/LLM para processar materiais de origem",
                    "Ideias de variantes geradas por IA",
                    "Usando IA para transformar ideias abstratas em inputs construtivos"
                ]
            },
            {
                title: "UI / UX",
                items: [
                    "Do briefing por IA para designs de estudo de interface/protótipos",
                    "Substituição de conteúdo por IA"
                ]
            }
        ],
        exploring: [
            {
                title: "O QUE ESTAMOS EXPLORANDO NO MOMENTO:",
                items: [
                    "Workflows para manipulação baseada em prompts / criação de variantes com base em importações de UI em JSON. Página ativa -> Demoway JSON -> Figma -> Bolt.new",
                    "Workflows para geração de UI usando design systems personalizados. Figma -> UX pilot.",
                    "Gerador de design system alimentado por IA. URL da página da web -> Design system gerado por IA."
                ]
            }
        ],
        logos: [
            { name: "Figma", icon: Figma },
            { name: "Claude", icon: Sparkles },
            { name: "Demoway", icon: Code2 },
        ]
    },
    ANALYSIS: {
        current: [
            {
                title: "Motor de Relatórios de Teste A/B Automático",
                items: [
                    "Análise pós-teste assistida com criação automática de Google Sheets usando n8n."
                ]
            },
            {
                title: "GA4 com AI Insights",
                items: [
                    "Investigação mais profunda de tendências e padrões de dados."
                ]
            },
            {
                title: "Análise de Sentimento Baseada em LLM",
                items: [
                    "Pontuação de sentimento qualitativo e segmentação usando LLM, n8n e Gsheets."
                ]
            }
        ],
        exploring: [
            {
                title: "Análise de dados guiada por IA",
                items: [
                    "Gemini no BigQuery para análise guiada por IA de grandes conjuntos de dados de várias fontes."
                ]
            },
            {
                title: "Análise de teste A/B em ferramentas de teste",
                items: [
                    "Assistentes de IA para análise inicial de testes como Optimize, Optimizely"
                ]
            }
        ],
        logos: [
            { name: "Gemini", icon: Sparkles },
            { name: "n8n", icon: Workflow },
            { name: "Optimizely", icon: LineChart },
        ]
    },
    RESEARCH: {
        current: [
            {
                title: "Briefings de Pesquisa",
                items: [
                    "GPTs customizados para criação de briefings de pesquisa."
                ]
            },
            {
                title: "Sumarização de Dados",
                items: [
                    "GPTs customizados e Miro AI para análise de dados qualitativos; e análise temática."
                ]
            },
            {
                title: "Insights Profundos de Clientes",
                items: [
                    "GPTs customizados para extrair insights de conjuntos de dados específicos de clientes;",
                    "Coletar dados de intenção e fricção do cliente a partir de dados de chatbot."
                ]
            }
        ],
        exploring: [
            {
                title: "Insights Profundos de Clientes",
                items: [
                    "Identificar jornadas de usuários, sinalizar anomalias com Heap Illuminate e Glassbox GIA.",
                    "Combinar Heap ou Glassbox com insights de IA do GA4 para entender as tendências dos clientes.",
                    "Auto-tagueamento e análise de sentimento com Looppanel."
                ]
            },
            {
                title: "Automações",
                items: [
                    "Hotjar AI para automação e análise de pesquisas."
                ]
            }
        ],
        logos: [
            { name: "ChatGPT", icon: MessageSquare },
            { name: "NotebookLM", icon: Database },
        ]
    }
};

type TabKeys = keyof typeof playbooksData;
const tabs: TabKeys[] = ["STRATEGY", "UI/DESIGN", "ANALYSIS", "RESEARCH"];

const AiPlaybooksSection = () => {
    const [activeTab, setActiveTab] = useState<TabKeys>("STRATEGY");

    return (
        <section className="py-24 bg-brand-dark/95 border-t border-brand-light/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 md:text-left text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-6">
                        Inteligência Artificial que potencializa o <span className="text-brand-neon">ciclo de experimentação</span>
                    </h2>
                    <p className="text-brand-light/60 text-lg max-w-3xl leading-relaxed">
                        Na Velora, a IA não é apenas um recurso: é o motor que impulsiona e acelera a experimentação em toda a organização.
                    </p>
                </div>

                {/* Tabs / Lâminas */}
                <div className="flex overflow-x-auto hide-scrollbar border-b border-brand-light/10 mb-8 pb-px">
                    <div className="flex space-x-2 md:space-x-4 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 rounded-t-xl
                                    ${activeTab === tab 
                                        ? 'bg-brand-light text-brand-dark shadow-[0_-4px_15px_rgba(255,255,255,0.1)]' 
                                        : 'text-brand-light/50 hover:text-brand-light hover:bg-brand-light/5'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-brand-light/5 border border-brand-light/10 rounded-xl rounded-tl-none p-6 md:p-12 min-h-[500px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-24 flex-grow"
                        >
                            {/* Left Column: Current AI Playbooks */}
                            <div>
                                <h3 className="text-brand-light font-bold text-lg mb-8 uppercase tracking-wide border-b border-brand-light/10 pb-4">
                                    CURRENT AI PLAYBOOKS:
                                </h3>
                                <div className="space-y-8">
                                    {playbooksData[activeTab].current.map((section, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-brand-neon font-semibold mb-4 text-sm md:text-base">{section.title}</h4>
                                            <ul className="space-y-3">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start text-brand-light/70 text-sm md:text-base leading-relaxed">
                                                        <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-brand-neon/50 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Exploring */}
                            <div className="flex flex-col">
                                <h3 className="text-brand-light font-bold text-lg mb-8 uppercase tracking-wide border-b border-brand-light/10 pb-4">
                                    {activeTab === 'UI/DESIGN' ? 'WHAT WE\'RE EXPLORING ATM:' : 'WHAT WE\'RE EXPLORING:'}
                                </h3>
                                <div className="space-y-8 flex-grow">
                                    {playbooksData[activeTab].exploring.map((section, idx) => (
                                        <div key={idx}>
                                            {section.title !== 'O QUE ESTAMOS EXPLORANDO NO MOMENTO:' && (
                                                <h4 className="text-brand-light/90 font-semibold mb-4 text-sm md:text-base">{section.title}</h4>
                                            )}
                                            <ul className="space-y-3">
                                                {section.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start text-brand-light/70 text-sm md:text-base leading-relaxed">
                                                        <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-brand-light/30 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Logos (Bottom Right) */}
                                <div className="mt-12 flex flex-wrap justify-end gap-6 items-center border-t border-brand-light/5 pt-8">
                                    {playbooksData[activeTab].logos.map((logo, idx) => {
                                        const IconComponent = logo.icon;
                                        return (
                                            <div key={idx} className="flex items-center text-brand-light/60 hover:text-brand-neon transition-colors">
                                                <IconComponent size={24} className="mr-2" />
                                                <span className="font-bold text-lg">{logo.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
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

export default AiPlaybooksSection;
