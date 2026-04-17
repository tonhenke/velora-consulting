import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    title?: ReactNode;
}

const Hero = ({ title }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark selection:bg-brand-neon text-brand-dark selection:text-brand-light">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full opacity-20 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-brand-neon text-brand-dark rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-brand-light text-brand-dark rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >


                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-light mb-8 leading-[0.9]">
                        {title || (
                            <>
                                Crescimento com <span className="text-brand-neon">ROI positivo</span> em até 90 dias — ou menos
                            </>
                        )}
                    </h1>
                    <p className="max-w-xl text-xl text-brand-light/60 mb-10 leading-relaxed font-light">
                        Com a Velora, você desenvolve um sistema de marketing, aquisição e vendas assertivo, escalável e memorável.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="#contact"
                            className="group flex items-center gap-3 bg-brand-light text-brand-dark text-brand-dark px-8 py-5 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Agendar Reunião
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#services"
                            className="flex items-center gap-2 px-6 py-5 rounded-lg border border-white/20 text-brand-light font-medium hover:bg-brand-light/5 transition-all"
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
