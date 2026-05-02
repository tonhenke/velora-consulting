import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CALENDLY_URL = 'https://calendly.com/contato-veloraconsulting/30min';

const Screen5Success = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const initCalendly = () => {
      if ((window as any).Calendly && calendlyRef.current) {
        (window as any).Calendly.initInlineWidget({
          url: `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=84cc16`,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
        });
      }
    };

    if ((window as any).Calendly) {
      initCalendly();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = initCalendly;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto relative"
    >
      <div className="absolute inset-0 bg-brand-neon/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        {/* Success Header */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 mb-4 text-center">
          <div className="w-16 h-16 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-neon border border-brand-neon/30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Diagnóstico concluído! ✅
          </h2>

          <p className="text-lg text-white/60">
            Nossa equipe já recebeu suas informações. Para agilizar a entrega da sua análise, escolha um horário na nossa agenda abaixo:
          </p>
        </div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-[2rem] overflow-hidden border border-white/10 bg-white mb-4"
        >
          <div
            ref={calendlyRef}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Fallback Contact Info */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center">
          <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-4">
            Ou fale diretamente conosco
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:contato@veloraconsulting.com.br" className="text-white/80 hover:text-brand-neon transition-colors">
              contato@veloraconsulting.com.br
            </a>
            <a href="https://wa.me/5554996854825" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-neon transition-colors">
              (54) 99685-4825
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
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
