import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, CreditCard, Shield, Video, FileText, Calendar, Sparkles } from 'lucide-react';

const WorkshopOffer = () => (
  <section id="oferta" className="py-24 md:py-32 bg-black relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-neon/5 rounded-full blur-[200px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-4">
          Garanta sua <span className="text-brand-neon">vaga</span>
        </h2>
        <p className="text-brand-light/60 text-lg max-w-xl mx-auto">
          Participe do workshop presencial ou adicione um acompanhamento individual estratégico para acelerar seus resultados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Tier 1: Workshop Growth Engine */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <div className="relative flex flex-col h-full bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:border-brand-neon/20 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/10 border border-white/20 text-brand-light text-xs font-semibold uppercase tracking-widest px-5 py-1.5 rounded-full whitespace-nowrap">
              Primeiros 5 inscritos
            </div>

            <div className="mb-6 pt-4 text-center">
              <h3 className="text-2xl font-black text-brand-light uppercase tracking-wider mb-2">
                Imersão Growth Engine
              </h3>
              <p className="text-brand-light/40 text-sm min-h-[40px] leading-relaxed">
                Imersão intensiva de 8 horas com Everton Henke. Sai com um plano pronto.
              </p>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8 pb-8 border-b border-white/5">
              <p className="text-brand-light/40 line-through text-base mb-1">De R$ 997</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-brand-light/60 text-lg">5x</span>
                <span className="text-5xl md:text-6xl font-black text-brand-light">R$ 158</span>
                <span className="text-2xl font-bold text-brand-light/80">,61</span>
              </div>
              <p className="text-brand-light/40 text-sm mt-2">ou R$ 697 à vista</p>
            </div>

            {/* Info */}
            <div className="space-y-4 mb-8 flex-grow">
              {[
                { icon: Clock, text: 'Data: 20/06/2026 — 08h30 às 17h30' },
                { icon: Users, text: 'Apenas 12 vagas para manter a qualidade' },
                { icon: CreditCard, text: 'Cartão, Pix ou boleto' },
                { icon: Shield, text: 'Garantia de 7 dias — risco zero' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-brand-light/70 text-sm">
                  <item.icon size={18} className="text-brand-neon flex-shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-3 mb-8 pb-6 border-b border-white/5">
              {['Visa', 'Master', 'Pix', 'Boleto'].map((m) => (
                <span
                  key={m}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-semibold text-brand-light/40 uppercase tracking-wider"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://pay.cakto.com.br/7qsg8qc"
              className="group flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 border border-white/20 text-brand-light px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Garantir minha vaga
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>

        {/* Tier 2: Imersão + Consultoria 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col h-full"
        >
          <div className="relative flex flex-col h-full bg-gradient-to-b from-brand-neon/10 to-brand-neon/[0.02] border-2 border-brand-neon rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-[0_0_40px_rgba(198,240,0,0.1)]">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-brand-dark text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles size={12} />
              Mentoria Exclusiva
            </div>

            <div className="mb-6 pt-4 text-center">
              <h3 className="text-2xl font-black text-brand-light uppercase tracking-wider mb-2">
                Imersão + Consultoria 1:1
              </h3>
              <p className="text-brand-light/70 text-sm min-h-[40px] leading-relaxed">
                Workshop presencial + 1 hora de conversa exclusiva individual com Everton Henke.
              </p>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8 pb-8 border-b border-white/10">
              <div className="mb-4 space-y-1.5">
                <div className="text-xs text-brand-light/50 flex justify-center gap-2">
                  <span>Workshop: <span className="line-through">De R$ 997</span> por <span className="text-brand-neon font-semibold">R$ 697</span></span>
                </div>
                <div className="text-xs text-brand-light/50 flex justify-center gap-2">
                  <span>Consultoria 1:1: <span className="line-through">De R$ 500</span> por <span className="text-brand-neon font-semibold">R$ 250</span> <span className="text-brand-neon font-black">(50% OFF)</span></span>
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-brand-light/60 text-lg">10x</span>
                <span className="text-5xl md:text-6xl font-black text-brand-light">R$ 114</span>
                <span className="text-2xl font-bold text-brand-light/80">,71</span>
              </div>
              <p className="text-brand-light/40 text-sm mt-2">ou R$ 947 à vista</p>
            </div>

            {/* Info */}
            <div className="space-y-4 mb-8 flex-grow">
              {[
                { icon: Shield, text: 'Tudo do Workshop Presencial incluso' },
                { icon: Sparkles, text: '1 hora de mentoria individual focada nos seus desafios' },
                { icon: Calendar, text: 'Data e horário flexíveis (a combinar)' },
                { icon: Video, text: 'Encontro individual via videoconferência online' },
                { icon: FileText, text: 'PDF com diagnóstico estratégico e plano de ações em 15 dias' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-brand-light/90 text-sm">
                  <item.icon size={18} className="text-brand-neon flex-shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center justify-center gap-3 mb-8 pb-6 border-b border-white/10">
              {['Visa', 'Master', 'Pix', 'Boleto'].map((m) => (
                <span
                  key={m}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-semibold text-brand-light/40 uppercase tracking-wider"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://pay.cakto.com.br/u45zbn7_902922"
              className="group flex items-center justify-center gap-3 w-full bg-brand-neon text-brand-dark px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-[0_0_30px_rgba(198,240,0,0.35)] hover:shadow-[0_0_50px_rgba(198,240,0,0.5)]"
            >
              Garantir Imersão + Mentoria
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default WorkshopOffer;
