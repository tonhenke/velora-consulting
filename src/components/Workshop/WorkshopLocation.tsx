import { motion } from 'framer-motion';
import { MapPin, Building2, Coffee } from 'lucide-react';

const WorkshopLocation = () => (
  <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-light/10 bg-brand-light/5 text-sm text-brand-light/60 font-medium">
          <MapPin size={16} className="text-brand-neon" />
          Onde acontece o Workshop
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light">
          Ambiente <span className="text-brand-neon">Inspirador</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h3 className="text-3xl font-bold text-brand-light mb-6">Co.lab</h3>
          <p className="text-lg text-brand-light/80 leading-relaxed mb-6">
            Coworking referência na cidade de Ijuí. Ambiente profissional com estrutura completa.
          </p>
          <p className="text-lg text-brand-light/80 leading-relaxed mb-8">
            Tudo o que você precisa para ter uma experiência confortável e memorável.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-brand-light/70 bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
              <MapPin className="text-brand-neon flex-shrink-0" size={24} />
              <span className="text-sm font-medium">
                Rua 14 de Julho, 231 - Sala 02 - Centro, Ijuí - RS, 98700-000
              </span>
            </div>
            <div className="flex items-center gap-4 text-brand-light/70 bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
              <Building2 className="text-brand-neon flex-shrink-0" size={24} />
              <span className="text-sm font-medium">
                Estrutura completa e climatizada
              </span>
            </div>
            <div className="flex items-center gap-4 text-brand-light/70 bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
              <Coffee className="text-brand-neon flex-shrink-0" size={24} />
              <span className="text-sm font-medium">
                Coffee break incluso para networking
              </span>
            </div>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-brand-neon/10 rounded-3xl blur-3xl scale-90 -z-10" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-light/10 group">
            <img
              src="/workshop-location.jpg"
              alt="Ambiente Co.lab Ijuí"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WorkshopLocation;
