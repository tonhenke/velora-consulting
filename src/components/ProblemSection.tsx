import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const columns = [
    {
        label: 'Agências',
        subtitle: 'Execução com baixa estratégia',
        icon: 'x',
        items: [
            'Foco excessivo em tarefas e campanhas isoladas.',
            'Times juniores operando playbooks padronizados.',
            'Alta rotatividade, pouca continuidade estratégica.',
            'Olhar fragmentado: mídia, outbound ou social — raramente o sistema completo.',
            'Ênfase em geração de leads, não em geração de receita.',
        ],
        style: {
            wrapper: 'bg-brand-dark border border-brand-light/5',
            title: 'text-brand-light',
            subtitle: 'text-red-400',
            text: 'text-brand-light/60',
            icon: 'text-red-500',
        },
    },
    {
        label: 'Outras Consultorias',
        subtitle: 'Alta estratégia, zero execução',
        icon: 'x',
        items: [
            'Criam modelos ideais que não enfrentam as fricções do mercado.',
            'Projetos conceituais, pouco implementáveis.',
            'Recomendações desconectadas da operação diária.',
            'Ausência de ownership sobre resultado.',
            'Longos ciclos de análise, pouca ativação prática.',
        ],
        style: {
            wrapper: 'bg-brand-dark border border-brand-light/5',
            title: 'text-brand-light',
            subtitle: 'text-red-400',
            text: 'text-brand-light/60',
            icon: 'text-red-500',
        },
    },
    {
        label: 'Velora',
        subtitle: 'Estratégia real, execução sênior',
        icon: 'check',
        items: [
            'Estratégia desenhada para resistir à realidade do mercado.',
            'Implementação liderada por senioridade real.',
            'Integração entre marketing, vendas e revenue operations.',
            'Foco absoluto em previsibilidade e geração de resultado.',
            'Adaptabilidade contínua sem perder direção estratégica.',
        ],
        style: {
            wrapper: 'bg-gray-900/50 border border-blue-900/30 relative overflow-hidden',
            title: 'text-brand-light',
            subtitle: 'text-brand-neon',
            text: 'text-gray-200 font-medium',
            icon: 'text-brand-neon',
        },
        glow: true,
    },
];

const ProblemSection = () => {
    return (
        <section className="py-32 bg-brand-dark text-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Geramos resultados reais e <br className="hidden md:block" />
                            <span className="text-gray-400">conhecemos os problemas</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {columns.map((col, i) => (
                        <motion.div
                            key={col.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-3xl p-10 flex flex-col ${col.style.wrapper}`}
                        >
                            {col.glow && (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none" />
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 flex items-center gap-3 ${col.style.title}`}>
                                    {col.label === 'Velora' && (
                                        <span className="w-1.5 h-6 bg-brand-neon rounded-full" />
                                    )}
                                    {col.label}
                                </h3>
                                <h4 className={`text-base ${col.style.subtitle}`}>{col.subtitle}</h4>
                            </div>

                            <ul className="space-y-5">
                                {col.items.map((item) => (
                                    <li key={item} className="flex gap-4 items-start">
                                        {col.icon === 'x' ? (
                                            <X className={`mt-1 flex-shrink-0 ${col.style.icon}`} size={18} />
                                        ) : (
                                            <Check className={`mt-1 flex-shrink-0 ${col.style.icon}`} size={18} />
                                        )}
                                        <p className={`text-sm md:text-base ${col.style.text}`}>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
