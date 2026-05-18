import { motion } from 'framer-motion';

const GlaasProblem = () => {
  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-light mb-12 leading-tight">
              Planejamento é estratégico e <span className="text-brand-neon">sênior</span>, <br className="hidden md:block" />
              mas a entrega e a execução são <span className="text-brand-light/50">júnior?</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-brand-light/70 font-light leading-relaxed">
              <p>
                Chega um momento em que os clientes pedem mais profundidade estratégica e a agência precisa responder à altura. O problema é que manter um profissional sênior de growth dedicado por conta é inviável: caro, difícil de encontrar e ocioso quando a demanda cai.
              </p>
              <p>
                A saída mais comum é terceirizar. Mas terceirizar costuma criar um problema novo: falta de alinhamento, profissionais sem comprometimento real com o cliente e uma visão que fica só na superfície da operação.
              </p>
              <p className="text-brand-light font-medium pt-4 border-t border-brand-light/10">
                No fim, quem paga a conta é a entrega, e a relação com o cliente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasProblem;
