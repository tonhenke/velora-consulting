import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const columns = [
    {
        label: 'Visão Fragmentada',
        subtitle: 'Foco em métricas isoladas',
        icon: 'x',
        items: [
            'Marketing e Vendas divergem sobre o que é um lead qualificado.',
            'O pipeline cobre ineficiências que o volume esconde.',
            'Cada área entrega o seu indicador, mas a empresa perde eficiência.',
            'O vazamento acontece na passagem de bastão entre os times.',
            'Alta dependência de aquisição, baixa retenção e expansão.',
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
        label: 'Operação de Volume',
        subtitle: 'Crescimento custoso',
        icon: 'x',
        items: [
            'Acreditar que crescer significa apenas contratar mais vendedores.',
            'CAC de novos logos aumenta, enquanto expansão é negligenciada.',
            'Inserir novas ferramentas sem consertar processos quebrados.',
            'Desperdício de capital gerando oportunidades que não convertem.',
            'Dificuldade de relacionar investimento à receita realizada.',
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
        label: 'Growth System',
        subtitle: 'O modelo Velora',
        icon: 'check',
        items: [
            'Crescimento coordenado: Demanda, Conversão, Valor e Expansão.',
            'Visão única que conecta aquisição a retenção e margem.',
            'Combinação economicamente mais eficiente dos motores de crescimento.',
            'Diagnóstico das setas (fricções entre áreas) e não apenas das caixas.',
            'Estratégia desenhada para eficiência, implementada por seniores.',
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

const TechB2BProblemSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % columns.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + columns.length) % columns.length);
    };

    return (
        <section className="py-32 bg-brand-dark text-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Depois de certo estágio, crescer deixa de ser um problema de aquisição. <br className="hidden md:block" />
                            <span className="text-brand-neon">Passa a ser um problema de sistema.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            O objetivo não é escolher entre aquisição e expansão. É construir a combinação economicamente mais eficiente.
                        </p>
                    </motion.div>
                </div>

                {/* Mobile Carousel Controls */}
                <div className="flex justify-center items-center gap-6 mb-8 lg:hidden">
                    <button onClick={prevSlide} className="p-2 border border-brand-light/20 rounded-full hover:bg-brand-light/10 text-brand-light transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="flex gap-3">
                        {columns.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? 'bg-brand-neon' : 'bg-brand-light/20'}`}
                                aria-label={`Ir para o slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="p-2 border border-brand-light/20 rounded-full hover:bg-brand-light/10 text-brand-light transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {columns.map((col, i) => (
                        <motion.div
                            key={col.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-3xl p-10 flex-col ${col.style.wrapper} ${i === activeIndex ? 'flex' : 'hidden'} lg:flex`}
                        >
                            {col.glow && (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none" />
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 flex items-center gap-3 ${col.style.title}`}>
                                    {col.label === 'Growth System' && (
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

export default TechB2BProblemSection;
