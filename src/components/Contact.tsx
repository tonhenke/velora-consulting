
import { motion } from 'framer-motion';
import { useEffect } from 'react';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ml: any;
    }
}

const Contact = () => {
    useEffect(() => {
        const scriptId = 'mailerlite-universal-script';

        const initMailerLite = () => {
            if (window.ml) {
                // If already loaded, just re-trigger to ensure it finds the new div
                window.ml('account', '2162261');
                // Some MailerLite universal scripts use 'show' or just auto-detect.
                // Re-calling account often triggers a fresh scan of the DOM.
            }
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.async = true;
            script.innerHTML = `
                (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            `;
            script.onload = initMailerLite;
            document.head.appendChild(script);
        }

        initMailerLite();

        // Note: No cleanup that removes the script, as we want it to stay global.
        // We only want the div to be populated when this component mounts.
    }, []);

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

                    {/* MailerLite Embedded Form */}
                    <div className="ml-embedded" data-form="7XaT9b"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
