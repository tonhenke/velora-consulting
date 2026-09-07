import { motion } from 'framer-motion';

const TechB2BPhilosophySection = () => {
    return (
        <section className="py-32 bg-brand-dark relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-neon text-brand-dark/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-brand-light mb-6">
                        Na venda Tech B2B, a decisão já aconteceu quando o fornecedor entra na conversa. Cerca de <span className="text-brand-neon">95% do shortlist</span> é definido no Dia 1.
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-brand-light mb-10">
                        O comprador pesquisa, consulta canais e forma preferência antes da primeira reunião. Medir a aquisição só a partir do formulário é avaliá-la no trecho em que <span className="text-brand-neon">você já perdeu ou já ganhou.</span>
                    </p>
                    <div className="mb-12">
                        <a
                            href="#scorecard"
                            className="group inline-flex items-center gap-2 text-lg md:text-xl font-bold text-brand-neon hover:text-white transition-colors duration-300 border-b-2 border-brand-neon/30 hover:border-white pb-1"
                        >
                            Veja as 10 perguntas antes do próximo real investido
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </div>
                    <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default TechB2BPhilosophySection;
