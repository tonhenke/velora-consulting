import { motion } from 'framer-motion';
import { Bot, Zap, TrendingUp } from 'lucide-react';

const WorkshopAI = () => (
  <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-brand-dark relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-purple-400/20 bg-purple-400/10 backdrop-blur-sm">
            <Bot size={16} className="text-purple-400" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">IA em Growth</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-brand-light mb-8">
            IA como acelerador de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-neon">
              crescimento
            </span>
          </h2>

          <p className="text-lg md:text-xl text-brand-light/60 leading-relaxed mb-12 max-w-3xl mx-auto">
            A revolução da inteligência artificial irá impactar, em alguma medida, todas as esferas 
            da sociedade. E quando pensamos em usar esse recurso para potencializar os resultados 
            dos negócios, estamos falando de agilidade, escala e maior retorno sobre o investimento.
          </p>

          <p className="text-base text-brand-light/50 leading-relaxed max-w-2xl mx-auto mb-12">
            Será abordado no workshop caminhos que a IA pode ser aplicada dentro dos negócios, 
            transformando tecnologia em resultado real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Zap, label: 'Agilidade', desc: 'Processos que levavam semanas em horas' },
            { icon: TrendingUp, label: 'Escala', desc: 'Multiplique o output sem multiplicar o custo' },
            { icon: Bot, label: 'ROI', desc: 'Maior retorno sobre cada real investido' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-purple-400/10 rounded-2xl p-6 hover:border-purple-400/30 transition-colors duration-300"
            >
              <item.icon size={28} className="text-purple-400 mb-3" />
              <h3 className="text-lg font-bold text-brand-light mb-1">{item.label}</h3>
              <p className="text-sm text-brand-light/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkshopAI;
