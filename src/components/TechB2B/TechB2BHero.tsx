import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TechB2BHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-brand-dark selection:bg-brand-neon text-brand-dark selection:text-brand-light">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full opacity-20 pointer-events-none">
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-light mb-8 leading-[0.9]">
                        Da demanda <br />
                        <span className="text-brand-neon">à receita.</span>
                    </h1>
                    <p className="max-w-xl text-xl text-brand-light/60 mb-10 leading-relaxed font-light">
                        Para Software e SaaS B2B, ERP/vertical software, plataformas, fintech/data e tech services com produto validado, base ativa e venda consultiva para contas médias e grandes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6 w-full">
                        <a
                            href="#contact"
                            className="group flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 bg-brand-light text-brand-dark px-4 sm:px-8 py-4 sm:py-5 rounded-lg font-bold text-[15px] sm:text-lg whitespace-nowrap hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Conversar com a Velora
                            <ArrowRight className="group-hover:translate-x-1 transition-transform min-w-[18px]" size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechB2BHero;
