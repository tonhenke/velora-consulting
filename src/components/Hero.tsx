
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black selection:bg-brand-accent selection:text-white">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full opacity-20 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-brand-accent rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-white rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-sm font-medium branding-text text-gray-300">
                            Estagnado no crescimento? Hora de escalar.
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                        Chegou o momento de destravar o <span className="text-brand-accent">crescimento</span> da sua operação.
                    </h1>

                    <p className="max-w-xl text-xl text-gray-400 mb-10 leading-relaxed font-light">
                        Mude o jogo. Deixe seu legado.<br />
                        Com a Velora, você desenvolve um sistema de marketing, aquisição e vendas assertivo, escalável e memorável.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="#contact"
                            className="group flex items-center gap-3 bg-white text-black px-8 py-5 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Agendar Reunião
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#services"
                            className="flex items-center gap-2 px-6 py-5 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
                        >
                            Ver Soluções
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
