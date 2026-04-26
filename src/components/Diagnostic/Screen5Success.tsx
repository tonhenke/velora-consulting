import { motion } from 'framer-motion';

const Screen5Success = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-brand-neon/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <div className="w-20 h-20 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto text-brand-neon border border-brand-neon/30">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Perfeito. Vou entrar em contato nas próximas 24 horas para agendarmos sua sessão.
        </h2>

        <p className="text-lg text-white/60">
          Se preferir, sinta-se à vontade para nos chamar nos canais abaixo:
        </p>

        <div className="h-px bg-white/10 w-full" />

        <div className="space-y-4 pt-2">
          <div>
            <span className="block text-sm text-white/40 mb-1 tracking-wider uppercase font-bold">Email</span>
            <a href="mailto:contato@veloraconsulting.com.br" className="text-xl text-white hover:text-brand-neon transition-colors">
              contato@veloraconsulting.com.br
            </a>
          </div>
          <div>
            <span className="block text-sm text-white/40 mb-1 tracking-wider uppercase font-bold">WhatsApp</span>
            <a href="https://wa.me/555198083883" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-brand-neon transition-colors">
              (51) 9808-3883
            </a>
          </div>
        </div>

        <div className="pt-8">
            <a 
                href="/" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border border-white/20 text-white hover:bg-white/10"
            >
                Voltar para a página inicial
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Screen5Success;
