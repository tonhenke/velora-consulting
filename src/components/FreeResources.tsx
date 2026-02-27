import { motion } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, LayoutTemplate, Workflow, Zap } from 'lucide-react';

const resources = [
    {
        title: "Templates de Workflow n8n",
        desc: "Automações pré-construídas para enriquecimento de leads e higiene de CRM.",
        icon: Workflow,
        link: "#"
    },
    {
        title: "Playbooks de Clay",
        desc: "Workbooks de prospecção baseada em sinais prontos para plugar no Clay.",
        icon: FileSpreadsheet,
        link: "#"
    },
    {
        title: "Canvas de Estratégia GTM",
        desc: "O framework exato de Miro que usamos com clientes.",
        icon: LayoutTemplate,
        link: "#"
    },
    {
        title: "Insights Semanais de GTM",
        desc: "Táticas acionáveis de growth e dicas de automação com IA.",
        icon: Zap,
        link: "#"
    }
];

const FreeResources = () => {
    return (
        <section className="py-32 bg-[#050505]">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ferramentas gratuitas para elevar seu GTM
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, i) => (
                        <motion.a
                            href={res.link}
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black border border-white/10 p-8 rounded-2xl hover:border-brand-accent transition-colors group flex flex-col items-start h-full"
                        >
                            <res.icon className="text-gray-400 mb-6 group-hover:text-brand-accent transition-colors" size={32} />
                            <h3 className="text-xl font-bold text-white mb-3">{res.title}</h3>
                            <p className="text-gray-500 text-sm mb-8 flex-grow">
                                {res.desc}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                                Acessar agora
                                <ArrowRight size={16} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreeResources;
