import { motion } from 'framer-motion';
import { Award, Bot, Crown, DollarSign } from 'lucide-react';

const benefits = [
    {
        icon: Crown,
        title: "Especialistas Escolhidos a Dedo",
        desc: "Experts best-in-class para cada canal, não juniores generalistas.",
        color: "text-amber-400"
    },
    {
        icon: DollarSign,
        title: "Sem Custo de Overhead",
        desc: "Pague por resultados, não pelo aluguel do escritório da agência.",
        color: "text-green-400"
    },
    {
        icon: Award,
        title: "Liderança Sênior",
        desc: "Nossas soluções são lideradas por perfis sênios com larga experiência de mercado.",
        color: "text-blue-400"
    },
    {
        icon: Bot,
        title: "IA como Suporte",
        desc: "Utilizamos Inteligência Artificial para apoiar na condução de desdobramento estratégico.",
        color: "text-purple-400"
    }
];

const TeamStructure = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <p className="text-brand-accent font-mono text-sm mb-4 uppercase tracking-widest">
                        ESTRUTURA
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl tracking-tight">
                        Os perfis mais estratégicos do mercado. <br />
                        <span className="text-gray-600">Nada de terceirização júnior.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        A maioria das agências vende expertise sênior no pitch, e depois passa sua conta para juniores aprenderem com o seu dinheiro. Nós fazemos o oposto.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
                        >
                            <div className={`p-4 rounded-xl bg-white/5 w-fit mb-6 ${item.color} group-hover:bg-white/10 transition-colors`}>
                                <item.icon size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors duration-300">
                        Quero gerar mais resultado
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamStructure;
