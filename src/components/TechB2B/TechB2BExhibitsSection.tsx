import { motion } from 'framer-motion';

type ExhibitData = {
  label: string;
  value: string;
  color: string;
  barWidth?: string;
};

type Exhibit = {
  id: string;
  title: string;
  source: string;
  layout?: 'comparison';
  data: ExhibitData[];
  annotation?: string;
};

const exhibits: Exhibit[] = [
  {
    id: 'EXHIBIT 01',
    title: 'Na compra Tech B2B, a decisão já aconteceu quando você entra na conversa.',
    source: '6SENSE, BUYER EXPERIENCE REPORT (2025); GARTNER (2025)',
    data: [
      { label: 'Shortlist do Dia 1', value: '95%', color: 'bg-brand-neon', barWidth: '95%' },
      { label: 'Preferem comprar sem vendedor', value: '67%', color: 'bg-brand-light/20', barWidth: '67%' },
    ],
  },
  {
    id: 'EXHIBIT 02',
    title: 'A projeção de crescimento do mercado de TI em 2026 vale um terço de 2025.',
    source: 'ABES/IDC, MERCADO BRASILEIRO DE SOFTWARE (2026)',
    layout: 'comparison',
    data: [
      { label: 'CRESCIMENTO 2025', value: '18,5%', color: 'text-brand-light' },
      { label: 'PROJEÇÃO 2026', value: '5,3%', color: 'text-brand-neon' },
    ],
    annotation: '▼ -13,2 p.p.',
  },
  {
    id: 'EXHIBIT 04',
    title: 'O orçamento se concentra onde a medição econômica é mais fraca.',
    source: 'BENCHMARKIT, B2B MARKETING BENCHMARKS (2026)',
    data: [
      { label: 'Orçamento em Demand Gen', value: '70%', color: 'bg-brand-light/20', barWidth: '70%' },
      { label: 'Medem CAC Ratio', value: '15%', color: 'bg-brand-neon', barWidth: '15%' },
    ],
  },
];

const TechB2BExhibitsSection = () => {
  return (
    <section className="py-32 bg-brand-dark border-t border-brand-light/5 text-brand-light overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight"
          >
            Mais capacidade instalada não produziu <span className="text-brand-neon">mais crescimento.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-light/60 mt-6 max-w-2xl"
          >
            A operação Tech B2B ficou mais cara e menos explicável. O problema deixou de ser volume e passou a ser eficiência econômica.
          </motion.p>
        </div>

        <div className="grid gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={exhibit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-dark border border-brand-light/10 rounded-xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-brand-light/40 uppercase tracking-widest">{exhibit.id}</span>
                <div className="h-[1px] flex-1 bg-brand-light/10" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
                {exhibit.title}
              </h3>

              {exhibit.layout === 'comparison' ? (
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                  <div className="text-center md:text-left">
                    <div className={`text-6xl md:text-8xl font-bold mb-2 ${exhibit.data[0].color}`}>
                      {exhibit.data[0].value}
                    </div>
                    <div className="text-xs font-mono text-brand-light/40 tracking-widest uppercase">
                      {exhibit.data[0].label}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-[1px] w-16 md:w-32 bg-brand-light/10 mb-2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark px-4 text-brand-neon text-sm font-mono whitespace-nowrap">
                            {exhibit.annotation}
                        </div>
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <div className={`text-6xl md:text-8xl font-bold mb-2 ${exhibit.data[1].color}`}>
                      {exhibit.data[1].value}
                    </div>
                    <div className="text-xs font-mono text-brand-light/40 tracking-widest uppercase">
                      {exhibit.data[1].label}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 mb-12">
                  {exhibit.data?.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="w-full md:w-1/3 text-sm font-medium text-brand-light/80">
                        {item.label}
                      </div>
                      <div className="flex-1 flex items-center gap-4">
                        <div className="flex-1 h-6 bg-brand-light/5 relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.barWidth }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`absolute top-0 left-0 h-full ${item.color}`} 
                          />
                        </div>
                        <div className="w-16 text-right font-bold text-xl">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-6 border-t border-brand-light/10">
                <p className="text-[10px] md:text-xs font-mono text-brand-light/40 tracking-widest uppercase">
                  {exhibit.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechB2BExhibitsSection;
