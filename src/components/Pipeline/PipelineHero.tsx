import { motion } from 'framer-motion';

const PipelineHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-brand-dark selection:bg-brand-neon text-brand-dark selection:text-brand-light">
            {/* Elementos Gráficos da Identidade Visual da Velora */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Glow Neon Principal */}
                <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-brand-neon rounded-full blur-[180px] opacity-[0.12]"></div>
                {/* Glow Secundário */}
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.03]"></div>
                {/* Malha Grid Tech (sutil) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-neon/10 text-brand-neon text-sm font-medium mb-6">
                        Velora Pipeline
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-light mb-8 leading-[0.9]">
                        Geração de demanda <br />
                        <span className="text-brand-neon">para B2B Tech.</span>
                    </h1>
                    <p className="max-w-xl text-xl text-brand-light/60 mb-10 leading-relaxed font-light">
                        Serviço completo para empresas B2B que vendem contratos de alto valor e ainda dependem excessivamente de indicação.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6 w-full">
                        <a
                            href="#planos"
                            className="group flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 bg-brand-light text-brand-dark px-4 sm:px-8 py-4 sm:py-5 rounded-lg font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Ver Planos
                        </a>
                        <a
                            href="#contato"
                            className="group flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 bg-transparent text-brand-light border border-brand-light/20 px-4 sm:px-8 py-4 sm:py-5 rounded-lg font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-brand-light/10 transition-all duration-300"
                        >
                            Falar com Especialista
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PipelineHero;
