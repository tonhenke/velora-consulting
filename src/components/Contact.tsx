
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-brand-gray/20 border-t border-brand-dark/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-brand-gray to-black border border-brand-dark/10 p-6 md:p-12 rounded-[2.5rem]"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para acelerar seu crescimento?</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Seja para um diagnóstico completo, um squad dedicado ou liderança estratégica, estamos aqui para ajudar você a escalar.
                    </p>

                    {/* Brevo (Brave) Integrated Form */}
                    <div className="flex justify-center w-full overflow-hidden rounded-xl bg-white p-4 border border-white/10">
                        <iframe
                            width="540"
                            height="850"
                            src="https://88bfd1c8.sibforms.com/serve/MUIFAKXPzr3Oinuo78iic8A0FuDYg7wfqEnrD4KLy-RSNw9IanHflp1CVqmgmsv-CG1ECv2S6hbaC-T-kK9Y2Cr_nl0ZAimJ72D7RpfEQBb9uC9_htCq-zxb2Nd057wx458HPDvv9Wsj0Tn0NQ1wUP5hQKIVV3vScSeugAvsE2_EYfrRzxjqtiN3mWZtOxKGU5yt4PoOVi-9OjLVcg=="
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                            className="max-w-full"
                            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
