import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const WorkshopHero = () => (
  <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-brand-dark">
    {/* Background glows */}
    <div className="absolute top-0 right-0 w-3/4 h-full opacity-20 pointer-events-none">
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-brand-neon rounded-full blur-[150px]" />
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-brand-neon/50 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-brand-neon/30 bg-brand-neon/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
          <span className="text-sm font-bold text-brand-neon uppercase tracking-widest">Workshop Presencial</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-brand-light mb-4 leading-[0.9]">
          Growth <span className="text-brand-neon">Engine</span>
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-light/90 mb-4 max-w-3xl leading-snug tracking-tight">
          Aprenda a escalar os resultados do seu negócio sem precisar gastar mais com marketing
        </p>

        {/* Subheadline */}
        <p className="text-lg text-brand-light/50 mb-10 max-w-2xl leading-relaxed font-light">
          Em 8 horas, você sai com um plano de crescimento pronto para executar na semana seguinte.
        </p>

        {/* CTA + proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#oferta"
            className="group flex items-center justify-center gap-3 bg-brand-neon text-brand-dark px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-[0_0_30px_rgba(198,240,0,0.3)] hover:shadow-[0_0_50px_rgba(198,240,0,0.5)]"
          >
            Reservar meu lugar
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <div className="flex items-center gap-3 text-brand-light/50">
            <TrendingUp size={20} className="text-brand-neon" />
            <span className="text-sm font-medium">+218 negócios impactados</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkshopHero;
