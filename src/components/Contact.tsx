
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-brand-gray/20 border-t border-brand-dark/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-brand-gray to-black border border-brand-dark/10 p-12 rounded-[2.5rem]"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para acelerar seu crescimento?</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Seja para um diagnóstico completo, um squad dedicado ou liderança estratégica, estamos aqui para ajudar você a escalar.
                    </p>

                    <a
                        href="mailto:hello@velora.com"
                        className="inline-flex items-center gap-3 bg-zinc-100 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-neon text-brand-dark hover:text-brand-dark transition-all duration-300"
                    >
                        <Mail size={20} />
                        hello@velora.com
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
