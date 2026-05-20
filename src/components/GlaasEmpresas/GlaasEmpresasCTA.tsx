import { motion } from 'framer-motion';

const GlaasEmpresasCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5554996854825";
    const message = encodeURIComponent("Olá! Gostaria de conversar sobre o modelo GLAaS para minha empresa.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="glaas-empresas-cta" className="py-32 bg-brand-neon relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-8 leading-tight">
              Pronto para ter um líder de growth dentro do seu negócio?
            </h2>
            
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Vamos entender o momento da sua empresa e ver se o GLAaS é o que você precisa agora. Sem pitch, sem enrolação, só uma conversa honesta sobre onde você está e para onde quer crescer.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="px-10 py-5 bg-black text-brand-neon text-lg font-bold rounded-lg hover:bg-black/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Quero conversar com a Velora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasCTA;
