import { motion } from 'framer-motion';
import { FlaskConical, Lightbulb, Zap, Rocket, BarChart2 } from 'lucide-react';

const columns = [
    {
        id: 1,
        label: 'Backlog',
        color: '#a855f7',
        icon: Lightbulb,
        cards: [
            { title: 'Teste de benefício', tag: 'Retenção', tagColor: '#a855f7' },
            { title: 'Teste de Título', tag: 'Aquisição', tagColor: '#3b82f6' },
            { title: 'Teste botão CTA', tag: 'Ativação', tagColor: '#22c55e' },
        ],
    },
    {
        id: 2,
        label: 'Brainstorm',
        color: '#f59e0b',
        icon: FlaskConical,
        cards: [
            { title: 'Teste de formulário', tag: 'Ativação', tagColor: '#22c55e' },
            { title: 'Otimizar o CPA', tag: 'Aquisição', tagColor: '#3b82f6' },
        ],
    },
    {
        id: 3,
        label: 'Experimento',
        color: '#3b82f6',
        icon: Zap,
        cards: [
            { title: 'Reduzir o CPL', tag: 'Aquisição', tagColor: '#3b82f6' },
        ],
    },
    {
        id: 4,
        label: 'Implementar',
        color: '#ef4444',
        icon: Rocket,
        cards: [
            { title: 'Teste de fluxo de cadastro', tag: 'Ativação', tagColor: '#22c55e' },
            { title: 'Otimizar taxa de conversão', tag: 'Ativação', tagColor: '#22c55e' },
        ],
    },
    {
        id: 5,
        label: 'Analisar',
        color: '#22c55e',
        icon: BarChart2,
        cards: [
            { title: 'Teste de avatar', tag: 'Aquisição', tagColor: '#3b82f6' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const GrowthLab = () => {
    return (
        <section id="growthlab" className="py-32 bg-brand-light relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-neon/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-dark/10 bg-zinc-100/5 text-sm text-brand-dark/60 font-medium"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                        Plataforma Proprietária
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tighter leading-tight"
                    >
                        Ferramenta proprietária para uma{' '}
                        <span className="text-gray-500">gestão profissional</span>{' '}
                        do fluxo de experimentação
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-brand-dark/60 max-w-2xl"
                    >
                        Gerencie experimentos de growth com um fluxo visual completo — do problema à análise de resultados. Tudo em um só lugar.
                    </motion.p>
                </div>

                {/* Kanban Board */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {columns.map((col) => {
                        const Icon = col.icon;
                        return (
                            <motion.div
                                key={col.id}
                                variants={columnVariants}
                                className="flex flex-col gap-3"
                            >
                                {/* Column Header */}
                                <div className="flex items-center gap-2 mb-1">
                                    <div
                                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: col.color }}
                                    />
                                    <span className="text-sm font-semibold text-brand-dark/70 tracking-wide uppercase">
                                        {col.id}. {col.label}
                                    </span>
                                </div>

                                {/* Divider line */}
                                <div
                                    className="h-0.5 w-full rounded-full mb-2 opacity-60"
                                    style={{ backgroundColor: col.color }}
                                />

                                {/* Cards */}
                                {col.cards.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-zinc-100/5 border border-brand-dark/10 rounded-xl p-4 backdrop-blur-sm hover:bg-zinc-100/8 hover:border-white/20 transition-all duration-200 group"
                                    >
                                        <p className="text-brand-dark text-sm font-medium leading-snug mb-3 group-hover:text-brand-dark/90">
                                            {card.title}
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <Icon size={11} style={{ color: card.tagColor }} className="flex-shrink-0" />
                                            <span
                                                className="text-xs font-semibold"
                                                style={{ color: card.tagColor }}
                                            >
                                                {card.tag}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {/* Empty slot placeholder */}
                                <div className="border border-dashed border-brand-dark/10 rounded-xl p-4 h-16 opacity-30" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center text-sm text-gray-600"
                >
                    GrowthLab · Plataforma exclusiva para clientes Velora
                </motion.p>
            </div>
        </section>
    );
};

export default GrowthLab;
