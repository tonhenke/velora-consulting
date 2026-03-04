import { motion } from 'framer-motion';
import { Search, Mail, MessageSquare, Share2, Megaphone, Users, Layout, Zap } from 'lucide-react';

const channels = [
    { name: "SEO & Content", icon: Search },
    { name: "Cold Outreach", icon: Mail },
    { name: "LinkedIn Organic", icon: Share2 },
    { name: "Paid Ads", icon: Megaphone },
    { name: "Community", icon: Users },
    { name: "Landing Pages", icon: Layout },
    { name: "Email Marketing", icon: MessageSquare },
    { name: "Automations", icon: Zap },
];

const Channels = () => {
    return (
        <section className="py-24 bg-brand-dark border-b border-brand-light/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-brand-neon font-mono text-sm mb-4 uppercase tracking-widest">
                        Agnósticos de Canal
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-6">
                        Escolhemos o que funciona. <br />
                        <span className="text-gray-500">Não o que é comum ao mercado.</span>
                    </h2>
                    <p className="text-brand-light/60 max-w-2xl mx-auto text-lg">
                        A maioria das agências empurra o que vende. Nós diagnosticamos o seu cenário e ativamos os canais certos para o seu momento.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {channels.map((channel, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                            className="bg-brand-light/5 border border-brand-light/10 rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 cursor-default"
                        >
                            <channel.icon className="text-brand-light/80" size={24} />
                            <span className="text-sm font-medium text-gray-200">{channel.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Channels;
