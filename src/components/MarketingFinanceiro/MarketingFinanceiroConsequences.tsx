import { motion } from 'framer-motion';

const MarketingFinanceiroConsequences = () => {
  return (
    <section className="py-24 bg-brand-light text-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            >
              A jornada invisível e a <br className="hidden md:block"/>
              <span className="text-gray-400">economia da captação</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-dark/70 mb-8 leading-relaxed"
            >
              A captação no mercado financeiro raramente começa em um formulário. Uma relação pode levar meses até virar cliente, e a capacidade de explicar o efeito do Marketing sobre o AuM captado continua sendo uma dor para 9 em 10 gestoras.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                'O canal não é a unidade final de análise. A leitura deve integrar origem, jornada, ticket médio de captação, custo de aquisição e LTV do cliente.',
                'Priorizar vale mais do que volume. ABM financeiro é escolher onde investir relacionamento com base em perfil, potencial, momento e acesso.',
                'A base também é captação. Clientes atuais têm espaço para aportar mais, mas o potencial raramente é mapeado e trabalhado.',
                'O mesmo cliente precisa ser reconhecido de ponta a ponta, do marketing ao backoffice, sem perda de contexto.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2.5 shrink-0" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-100 rounded-3xl p-8 md:p-12 relative border border-gray-200"
            >
              <div className="text-6xl text-brand-dark/10 font-serif absolute top-6 left-6">"</div>
              <p className="text-xl md:text-2xl font-bold leading-relaxed relative z-10 pt-4">
                "O primeiro passo não é substituir o relacionamento. É torná-lo visível e conectá-lo a uma operação sistêmica de captação."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-bold text-gray-500">VG</span>
                </div>
                <div>
                  <p className="font-bold">Velora Growth</p>
                  <p className="text-sm text-brand-dark/60">Perspectiva Estratégica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFinanceiroConsequences;
