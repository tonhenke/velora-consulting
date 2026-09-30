import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react';

const pains = [
  {
    icon: Users,
    title: 'Dependência de Indicações',
    desc: 'O crescimento está travado porque a principal fonte de novos clientes é o boca a boca, o que não é escalável nem previsível.'
  },
  {
    icon: TrendingDown,
    title: 'Falta de Previsibilidade',
    desc: 'Sem uma máquina de vendas estruturada, você não sabe de onde virá o próximo contrato ou quanto a empresa vai faturar no trimestre.'
  },
  {
    icon: Clock,
    title: 'Ciclos de Venda Longos',
    desc: 'Contratos de alto valor exigem confiança, mas a falta de um processo de aquisição claro faz com que os negócios fiquem parados no funil.'
  },
  {
    icon: AlertTriangle,
    title: 'CAC Elevado e Ineficiente',
    desc: 'Tentativas frustradas de outbound ou tráfego pago gerando leads desqualificados que desperdiçam o tempo do seu time de vendas.'
  }
];

const PipelinePains = () => {
  return (
    <section className="py-32 bg-zinc-50 text-brand-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Por que o crescimento <span className="text-red-600">travou?</span>
              </h2>
              <p className="text-lg text-brand-dark/70 font-medium mb-8">
                Empresas de tecnologia B2B com tickets altos não podem depender da sorte para bater a meta.
              </p>
              <div className="w-16 h-1 bg-red-600 rounded-full" />
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {pains.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-brand-dark/5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PipelinePains;
