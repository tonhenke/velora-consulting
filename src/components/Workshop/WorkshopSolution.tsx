import { motion } from 'framer-motion';
import { Clock, Users, Wrench, Lightbulb, BarChart3, FlaskConical } from 'lucide-react';

const learns = [
  { icon: Lightbulb, text: 'Origem do Growth Hacking' },
  { icon: BarChart3, text: 'Métricas de Crescimento' },
  { icon: FlaskConical, text: 'Funil AARRR' },
  { icon: Wrench, text: 'O que é e como criar experimentos' },
  { icon: Users, text: 'Método de Growth aplicável' },
];

const WorkshopSolution = () => (
  <section className="py-24 md:py-32 bg-brand-light text-brand-dark relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-dark/10 bg-white text-sm font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
            A Solução
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            O que é o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#5c5c5c]">
              Growth Engine?
            </span>
          </h2>
          <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
            Um workshop presencial e intensivo de 1 dia, 100% hands-on, onde você aprende na prática 
            o método que empresas de alto crescimento usam para escalar resultados de forma previsível.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white border border-brand-dark/10 rounded-full px-4 py-2 shadow-sm">
              <Clock size={16} className="text-brand-dark/60" />
              <span className="text-sm font-semibold">8 horas de imersão</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-brand-dark/10 rounded-full px-4 py-2 shadow-sm">
              <Users size={16} className="text-brand-dark/60" />
              <span className="text-sm font-semibold">Presencial & hands-on</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-neon/20 to-brand-neon/5 border border-brand-neon/30 rounded-xl p-5">
            <p className="text-base font-semibold text-brand-dark">
              💡 O Growth Engine te leva da teoria à prática em 1 dia de imersão.
            </p>
          </div>
        </motion.div>

        {/* Right - What you'll learn */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-brand-dark/80">O que você vai aprender:</h3>
          <div className="space-y-4">
            {learns.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white border border-brand-dark/10 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-brand-neon/30 transition-all duration-300"
              >
                <div className="p-2.5 bg-brand-neon/20 rounded-lg flex-shrink-0">
                  <item.icon size={20} className="text-brand-dark" />
                </div>
                <span className="text-base font-semibold text-brand-dark">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WorkshopSolution;
