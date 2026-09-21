import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import BrandGraphic from '../BrandGraphic';

const MarketingJuridicoHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden bg-brand-dark selection:bg-brand-neon text-brand-dark selection:text-brand-light">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none flex items-center justify-center opacity-40">
                <BrandGraphic className="text-brand-neon scale-150 transform translate-x-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-light mb-8 leading-[0.9]">
                        Da relação <br />
                        <span className="text-brand-neon">à receita.</span>
                    </h1>
                    <p className="max-w-xl text-xl text-brand-light/60 mb-10 leading-relaxed font-light">
                        Ajudamos escritórios de advocacia empresariais a potencializar o trabalho do marketing na aquisição de clientes e na ampliação de receita da carteira atual.
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

export default MarketingJuridicoHero;
