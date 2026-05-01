import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import diagnosticDashboard from '../assets/diagnostic-dashboard.png';

const DiagnosticCTA = () => {
    return (
        <section id="diagnostico-cta" className="py-32 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-neon/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Text Content */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-light/10 bg-brand-light/5 text-sm text-brand-light/60 font-medium"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                            Diagnóstico Gratuito
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-brand-light mb-6 tracking-tighter leading-tight"
                        >
                            Descubra onde seu crescimento{' '}
                            <span className="text-brand-light/40">está travado</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-brand-light/60 max-w-lg mb-10"
                        >
                            Responda algumas perguntas sobre sua operação e receba uma análise
                            personalizada do seu maior gargalo de growth — seja Aquisição,
                            Ativação, Retenção, Receita ou Indicação. Sem enrolação, sem custo.
                        </motion.p>

                        {/* Perks */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <div className="flex items-center gap-2 text-brand-light/50 text-sm font-medium">
                                <Clock size={16} className="text-brand-neon flex-shrink-0" />
                                Leva apenas 3 minutos
                            </div>
                            <div className="flex items-center gap-2 text-brand-light/50 text-sm font-medium">
                                <Zap size={16} className="text-brand-neon flex-shrink-0" />
                                Resultado imediato e personalizado
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a
                                href="https://www.veloraconsulting.com.br/diagnostico"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="diagnostic-cta-button"
                                className="group inline-flex items-center gap-3 bg-brand-light text-brand-dark font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl hover:shadow-brand-light/10"
                            >
                                Fazer meu diagnóstico gratuito
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right — Dashboard Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        className="relative"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 bg-brand-neon/10 rounded-3xl blur-3xl scale-90 -z-10" />

                        <img
                            src={diagnosticDashboard}
                            alt="Dashboard do Diagnóstico de Growth da Velora Consulting mostrando os 5 pilares AARRR"
                            className="w-full rounded-2xl shadow-2xl border border-brand-light/10 object-cover"
                        />

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute -bottom-4 -left-4 bg-brand-dark border border-brand-light/10 rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3"
                        >
                            <span className="text-2xl">🎯</span>
                            <div>
                                <p className="text-xs text-brand-light/50 font-medium">Resultado em</p>
                                <p className="text-sm font-bold text-brand-light">3 minutos</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DiagnosticCTA;
