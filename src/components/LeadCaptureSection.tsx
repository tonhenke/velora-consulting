
import { motion } from 'framer-motion';

const LeadCaptureSection = () => {
    return (
        <section className="py-24 bg-black overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tight">
                            Pronto para acelerar seu <br />
                            <span className="text-brand-neon">crescimento?</span>
                        </h2>
                        <div className="space-y-6 max-w-xl">
                            <p className="text-xl text-white/90 leading-relaxed font-medium">
                                Seja para um diagnóstico completo, um squad dedicado ou liderança estratégica, estamos aqui para ajudar você a escalar.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Preencha as informações para um diagnóstico personalizado e sem compromisso · 30 min · Diagnóstico de crescimento.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-0.5 w-12 bg-brand-neon" />
                            <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Diagnóstico Estratégico</span>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-neon/5 blur-[100px] rounded-full" />
                        <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border border-white/10 overflow-hidden">
                            <iframe
                                width="540"
                                height="850"
                                src="https://88bfd1c8.sibforms.com/serve/MUIFAKXPzr3Oinuo78iic8A0FuDYg7wfqEnrD4KLy-RSNw9IanHflp1CVqmgmsv-CG1ECv2S6hbaC-T-kK9Y2Cr_nl0ZAimJ72D7RpfEQBb9uC9_htCq-zxb2Nd057wx458HPDvv9Wsj0Tn0NQ1wUP5hQKIVV3vScSeugAvsE2_EYfrRzxjqtiN3mWZtOxKGU5yt4PoOVi-9OjLVcg=="
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                                className="w-full"
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadCaptureSection;
