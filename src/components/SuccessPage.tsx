
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CALENDLY_URL = 'https://calendly.com/contato-veloraconsulting/30min';

const SuccessPage = () => {
    useEffect(() => {
        // Inject Calendly widget script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-start justify-center px-6 py-24">
            {/* Background glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-neon/3 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full max-w-3xl relative z-10"
            >
                {/* Success header card */}
                <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 p-10 md:p-12 rounded-[2rem] text-center backdrop-blur-sm mb-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                        className="w-16 h-16 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-neon/30"
                    >
                        <CheckCircle2 className="w-8 h-8 text-brand-neon" />
                    </motion.div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                        Mensagem enviada! ✅
                    </h1>

                    <p className="text-white/60 text-base leading-relaxed max-w-lg mx-auto">
                        Já recebemos suas informações. Para agilizar, escolha abaixo um horário disponível na nossa agenda:
                    </p>
                </div>

                {/* Calendly inline widget */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="rounded-[2rem] overflow-hidden border border-white/10 bg-white"
                >
                    <div
                        className="calendly-inline-widget"
                        data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=84cc16`}
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                </motion.div>

                {/* Fallback contact info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-4 bg-zinc-900/60 border border-white/10 rounded-[1.5rem] p-6 backdrop-blur-sm"
                >
                    <p className="text-white/40 text-xs text-center uppercase tracking-widest mb-4">
                        Ou fale diretamente conosco
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contato@veloraconsulting.com.br"
                            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                        >
                            <Mail size={14} className="text-brand-neon" />
                            contato@veloraconsulting.com.br
                        </a>
                        <a
                            href="https://wa.me/5554996854825"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                        >
                            <MessageCircle size={14} className="text-brand-neon" />
                            (54) 99685-4825
                        </a>
                    </div>
                </motion.div>

                {/* Back link */}
                <div className="text-center mt-6">
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white/60 border border-white/10 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar ao site
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default SuccessPage;
