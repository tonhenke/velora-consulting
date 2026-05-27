import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, CreditCard, Shield } from 'lucide-react';

const WorkshopOffer = () => (
  <section id="oferta" className="py-24 md:py-32 bg-black relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-neon/8 rounded-full blur-[180px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-4">
          Garanta sua <span className="text-brand-neon">vaga</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-brand-neon/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-brand-dark text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full">
            Primeiros 5 inscritos
          </div>

          {/* Pricing */}
          <div className="text-center mb-8 pt-4">
            <p className="text-brand-light/40 line-through text-lg mb-1">De R$ 997</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-brand-light/60 text-lg">5x</span>
              <span className="text-5xl md:text-6xl font-black text-brand-light">R$ 139</span>
              <span className="text-2xl font-bold text-brand-light/80">,40</span>
            </div>
            <p className="text-brand-light/40 text-sm mt-2">ou R$ 697 à vista</p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Clock, text: 'Data: a definir — 9h às 18h' },
              { icon: Users, text: 'Apenas 12 vagas para manter a qualidade' },
              { icon: CreditCard, text: 'Cartão, Pix ou boleto' },
              { icon: Shield, text: 'Garantia de 7 dias — risco zero' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-brand-light/70 text-sm">
                <item.icon size={16} className="text-brand-neon flex-shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex items-center justify-center gap-4 mb-8 pb-8 border-b border-white/10">
            {['Visa', 'Master', 'Pix', 'Boleto'].map((m) => (
              <span
                key={m}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-semibold text-brand-light/40 uppercase tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://pay.cakto.com.br/u45zbn7_902922"
            className="group flex items-center justify-center gap-3 w-full bg-brand-neon text-brand-dark px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-[0_0_30px_rgba(198,240,0,0.25)] hover:shadow-[0_0_50px_rgba(198,240,0,0.4)]"
          >
            Garantir minha vaga
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkshopOffer;
