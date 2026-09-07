import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const columns = [
    {
        label: 'A Ilusão da Aquisição',
        subtitle: 'CPL é métrica de mídia',
        icon: 'x',
        items: [
            'O orçamento (70%) se concentra onde a medição econômica é mais fraca.',
            'O funil cobre ineficiências que o volume esconde.',
            'Acreditam em "canal caro ou barato" sem avaliar win rate e ciclo.',
            'Quanto mais complexa a venda, menos o custo por lead explica a qualidade.',
            'Não existe canal caro ou barato sem contexto econômico.',
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
        label: 'O Problema nas Setas',
        subtitle: 'A jornada fragmentada',
        icon: 'x',
        items: [
            'O cliente compra como um grupo (5-16 pessoas), a empresa vende em silos.',
            'Marketing otimiza lead, Vendas otimiza contrato, ninguém otimiza crescimento.',
            'Cada área enxerga uma versão diferente da mesma conta.',
            'A perda de valor mora nas passagens de bastão entre os times.',
            'Operação de volume: colocar mais SDRs sem melhorar as passagens.',
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
        label: 'O Ponto Cego',
        subtitle: 'Expansão subestimada',
        icon: 'check',
        items: [
            'Closed-won é o meio da jornada, não o final.',
            'Expandir custa metade de adquirir uma nova logo (CAC Ratio 0,80 vs 1,63).',
            'No entanto, a receita mais barata recebe apenas 10% do orçamento.',
            'A decisão de ABM e priorização de contas é uma decisão de capital.',
            'Growth System: conectar aquisição a ticket, retenção e expansão.',
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
                            O crescimento continua existindo, mas ficou seletivo. Quando o mercado desacelera, as ineficiências começam a aparecer.
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
                                    {col.label === 'O Ponto Cego' && (
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
