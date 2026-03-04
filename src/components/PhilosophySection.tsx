import { motion } from 'framer-motion';

const PhilosophySection = () => {
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
                        Os trimestres passam. Os resultados seguem travados e os problemas se repetem. Ideias não faltam — falta aplicação, experiência e parceria estratégica. Você não está sozinho: essa é a realidade de muitos líderes que buscam crescer.
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-brand-light mb-8">
                        É nesse contexto que a <span className="text-brand-neon">Velora</span> atua, conectando <span className="text-brand-neon">tecnologia</span>, <span className="text-brand-neon">dados</span> e <span className="text-brand-neon">criatividade</span> para transformar estratégia em crescimento real.
                    </p>
                    <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default PhilosophySection;
