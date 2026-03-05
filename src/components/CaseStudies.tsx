import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
    {
        id: 1,
        client: "KPMG",
        results: [
            { label: "KPMG Watch - Meta superada em +31%", value: "+31%" },
            { label: "KPMG Krast - Meta superada em +37%", value: "+37%" },
            { label: "KPMG Upright - Meta superada em +19%", value: "+19%" },
            { label: "KPMG NPL - Meta superada em +370%", value: "+370%" },
        ],
        description: "Projeto envolvia estratégia de GTM e geração de demanda para o time comercial de produtos B2B Enterprise. Superamos todas as metas estabelecidas no ano para MQL, SQL e agendamento de reuniões."
    },
    {
        id: 2,
        client: "LA MODA",
        results: [
            { label: "de receita com automação de recuperação de boleto", value: "+R$1,6MM" },
            { label: "share de pedidos via Pix", value: "+15%" },
            { label: "aumento de pedidos faturados", value: "+3,9%" },
            { label: "redução de pedidos via boleto bancário", value: "-12%" },
        ],
        description: "O foco do projeto La Moda era a ampliação de vendas e receita para a loja virtual. Através de uma operação de Growth orientada por dados, encontramos alavancas de crescimento de baixo custo e elevado retorno."
    },
    {
        id: 3,
        client: "PREMMIA",
        results: [
            { label: "de aumento na taxa de abertura de e-mails", value: "+60%" },
            { label: "reengajamento de base de usuários", value: "+5%" },
            { label: "usuários realizando o primeiro resgate", value: "+2,7%" },
            { label: "experimentos realizados no projeto", value: "+70" },
        ],
        description: "Estruturação de automação de marketing para toda a jornada de interações com o programa de fidelidade e com o engajamento com as comunicações. Condução de operação de Growth com foco em métricas de negócio e performance."
    },
    {
        id: 4,
        client: "SABEMI",
        results: [
            { label: "crescimento da receita no período do projeto", value: "+9X" },
            { label: "aumento na taxa de conversão", value: "+4%" },
            { label: "retorno sobre o investimento", value: "ROI +7,2" },
            { label: "no custo de aquisição de clientes (CAC)", value: "-64%" },
        ],
        description: "O time da Velora apoiou o desenvolvimento de um novo super app para a Sabemi, com o objetivo de ampliar as vendas no canal digital. Em 9 meses de projeto, os resultados atingiram níveis exponenciais:"
    }
];

const CaseStudies = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="py-32 bg-brand-light text-black">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                        O resultado fala por si
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Alguns cases recentes de onde o jogo virou com nossos clientes.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
                    {cases.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            onClick={() => setActiveId(item.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-gray-300 ${activeId === item.id
                                ? 'flex-none lg:flex-[3] bg-[#f5f5f5] min-h-[500px] lg:min-h-0'
                                : 'flex-none lg:flex-[0.5] hover:lg:flex-[0.7] bg-[#d4d4d4] h-[80px] lg:h-auto'
                                }`}
                        >
                            {/* Content for Active State */}
                            {activeId === item.id ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="p-8 h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-4xl font-black uppercase tracking-tighter">{item.client}</h3>
                                            <div className="bg-brand-light text-brand-dark p-2 rounded-full">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                        {item.results.map((res, idx) => (
                                            <div key={idx} className="bg-zinc-100 p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
                                                <div className="text-3xl font-bold mb-1">{res.value}</div>
                                                <div className="text-sm text-gray-500 font-medium leading-tight">{res.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                /* Content for Inactive State */
                                <div className="h-full w-full flex items-center justify-center p-4">
                                    <h3
                                        className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-gray-500 whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
                                    >
                                        {item.client}
                                    </h3>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
