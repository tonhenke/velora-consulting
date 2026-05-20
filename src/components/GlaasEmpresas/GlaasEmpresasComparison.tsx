import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "Senioridade garantida",
    freelancer: "Variável",
    subcontratada: "Variável",
    glaas: "Sempre",
    glaasIcon: true
  },
  {
    feature: "Integração com o time da empresa",
    freelancer: false,
    subcontratada: "Parcial",
    glaas: "Total",
    glaasIcon: true
  },
  {
    feature: "Comprometimento com o cliente",
    freelancer: false,
    subcontratada: "Por entrega",
    glaas: "Contínuo",
    glaasIcon: true
  },
  {
    feature: "Visão de negócio",
    freelancer: false,
    subcontratada: "Raramente",
    glaas: "Central",
    glaasIcon: true
  },
  {
    feature: "Escalável",
    freelancer: false,
    subcontratada: false,
    glaas: "Sim",
    glaasIcon: true
  }
];

const GlaasEmpresasComparison = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('glaas-empresas-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-dark/50 border-t border-brand-light/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-brand-neon font-medium tracking-wider text-sm uppercase mb-4 block">Diferenciais</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-light mb-8">
              O que muda quando o growth tem liderança <span className="text-brand-neon">sênior de verdade</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-x-auto rounded-2xl border border-brand-light/10 bg-[#0a0a0a] shadow-2xl mb-16"
          >
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-brand-light/10 bg-brand-light/5">
                  <th className="p-6 text-brand-light font-semibold w-2/5"></th>
                  <th className="p-6 text-brand-light/70 font-semibold w-1/5">Freelancer</th>
                  <th className="p-6 text-brand-light/70 font-semibold w-1/5">Subcontratada</th>
                  <th className="p-6 text-brand-neon font-bold w-1/5 text-lg bg-brand-neon/5">GLAaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light/5">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-brand-light/[0.02] transition-colors">
                    <td className="p-6 text-brand-light font-medium">{row.feature}</td>
                    <td className="p-6 text-brand-light/60">
                      {row.freelancer === false ? (
                        <X className="w-5 h-5 text-red-500/70" />
                      ) : (
                        row.freelancer
                      )}
                    </td>
                    <td className="p-6 text-brand-light/60">
                      {row.subcontratada === false ? (
                        <X className="w-5 h-5 text-red-500/70" />
                      ) : (
                        row.subcontratada
                      )}
                    </td>
                    <td className="p-6 font-semibold text-brand-light bg-brand-neon/[0.02] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-neon" />
                      {row.glaas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlaasEmpresasComparison;
