
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] height-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] height-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl w-full bg-gradient-to-br from-brand-gray/40 to-black border border-brand-primary/10 p-12 md:p-16 rounded-[2.5rem] text-center relative z-10 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-primary/30"
                >
                    <CheckCircle2 className="w-10 h-10 text-brand-primary" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent italic">
                    Mensagem Enviada!
                </h1>

                <p className="text-white/70 text-lg mb-12 leading-relaxed">
                    Obrigado pelo seu interesse. Nossa equipe de especialistas já recebeu suas informações e entrará em contato em breve para agendar seu diagnóstico estratégico.
                </p>

                <Link to="/">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-black font-semibold rounded-full hover:bg-brand-primary/90 transition-all shadow-[0_0_20px_rgba(151,255,102,0.3)]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Voltar para a Home
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default SuccessPage;
