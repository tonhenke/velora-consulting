import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';

const ROAS_DATA = {
  all_industries: {
    name: 'Todos os Setores',
    google: { conservative: { roas: 2.60 }, optimistic: { roas: 4.10 } },
    meta: { conservative: { roas: 1.50 }, optimistic: { roas: 2.80 } }
  },
  apparel: {
    name: 'Moda & Acessórios',
    google: { conservative: { roas: 2.50 }, optimistic: { roas: 4.00 } },
    meta: { conservative: { roas: 1.65 }, optimistic: { roas: 3.20 } }
  },
  beauty: {
    name: 'Beleza',
    google: { conservative: { roas: 1.75 }, optimistic: { roas: 2.90 } },
    meta: { conservative: { roas: 1.30 }, optimistic: { roas: 2.35 } }
  },
  health_wellness: {
    name: 'Saúde & Bem-estar',
    google: { conservative: { roas: 1.65 }, optimistic: { roas: 2.75 } },
    meta: { conservative: { roas: 1.20 }, optimistic: { roas: 2.20 } }
  },
  electronics: {
    name: 'Eletrônicos',
    google: { conservative: { roas: 2.25 }, optimistic: { roas: 3.75 } },
    meta: { conservative: { roas: 1.40 }, optimistic: { roas: 2.50 } }
  },
  food_beverage: {
    name: 'Food & Bebidas',
    google: { conservative: { roas: 2.65 }, optimistic: { roas: 4.20 } },
    meta: { conservative: { roas: 1.60 }, optimistic: { roas: 3.10 } }
  },
  lifestyle_boutique: {
    name: 'Lifestyle & Boutique',
    google: { conservative: { roas: 2.80 }, optimistic: { roas: 4.60 } },
    meta: { conservative: { roas: 1.85 }, optimistic: { roas: 3.45 } }
  },
  pets_animals: {
    name: 'Pets & Animais',
    google: { conservative: { roas: 2.65 }, optimistic: { roas: 4.30 } },
    meta: { conservative: { roas: 1.60 }, optimistic: { roas: 2.95 } }
  },
  sports_outdoors: {
    name: 'Esportes & Outdoor',
    google: { conservative: { roas: 2.75 }, optimistic: { roas: 4.40 } },
    meta: { conservative: { roas: 1.65 }, optimistic: { roas: 3.00 } }
  }
};

type SectorKey = keyof typeof ROAS_DATA;

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);
};

const MaaSRoasSimulator: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorKey>('all_industries');
  const [investment, setInvestment] = useState<number>(10000);
  const [scenario, setScenario] = useState<'conservative' | 'optimistic'>('optimistic');
  
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setInvestment(isNaN(value) ? 1000 : Math.max(1000, Math.min(100000, value)));
  };

  const getEvolutionData = () => {
    const googleData = ROAS_DATA[selectedSector].google[scenario];
    const metaData = ROAS_DATA[selectedSector].meta[scenario];
    const avgRoas = (googleData.roas + metaData.roas) / 2;

    const months = [2, 3, 4, 5, 6];
    const optimisticMultipliers = [0.375, 0.5, 0.625, 0.75, 1.0];
    const conservativeMultipliers = [0.4, 0.6, 0.6, 0.8, 1.0];
    
    const currentMultipliers = scenario === 'optimistic' ? optimisticMultipliers : conservativeMultipliers;
    const stages = ['Tração', 'Tração', 'Tração', 'Growth', 'Growth'];
    
    return months.map((m, i) => {
      const monthRoas = avgRoas * currentMultipliers[i];
      return {
        month: `Mês 0${m}`,
        stage: stages[i],
        roas: monthRoas,
        revenue: investment * monthRoas
      };
    });
  };

  const projections = getEvolutionData();
  const totalRevenue = projections.reduce((acc, curr) => acc + curr.revenue, 0);

  return (
    <section id="roas-simulator" className="bg-black text-brand-light py-32 border-t border-brand-light/5 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
            Simule o retorno <br className="md:hidden" /><span className="italic text-brand-neon">do seu investimento</span>
          </h2>
          <p className="text-xl text-brand-light/60 font-light">
            Selecione o setor e o valor de investimento mensal em mídia para ver as projeções.
          </p>
        </motion.div>

        {/* Top Controls */}
        <motion.div 
          className="bg-white/[0.02] border border-white/10 p-8 md:p-10 mb-12 flex flex-col lg:flex-row gap-10 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Sector Selection */}
          <div className="flex-1">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand-light/60 mb-6">
              1. Selecione seu Setor
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {(Object.entries(ROAS_DATA) as [SectorKey, typeof ROAS_DATA[SectorKey]][]).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSector(key)}
                  className={`px-4 py-2 text-sm transition-all duration-300 font-mono tracking-tight ${
                    selectedSector === key
                      ? 'bg-brand-neon text-black border border-brand-neon'
                      : 'bg-transparent text-brand-light/60 border border-white/10 hover:border-white/30 hover:text-brand-light'
                  }`}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>

          {/* Investment Input */}
          <div className="flex-1 lg:max-w-md">
            <div className="flex flex-col justify-between mb-6 gap-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand-light/60">
                2. Verba de Mídia Mensal
              </h3>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-light/40 font-mono text-xl">R$</span>
                <input
                  type="number"
                  value={investment}
                  onChange={handleInvestmentChange}
                  min={1000}
                  max={100000}
                  step={500}
                  className="w-full bg-transparent border-b border-white/20 py-2 pl-10 pr-0 text-brand-light font-serif text-3xl focus:outline-none focus:border-brand-neon transition-colors"
                />
              </div>
            </div>
            
            <div className="relative pt-2 pb-6">
              <input
                type="range"
                min={1000}
                max={100000}
                step={500}
                value={investment}
                onChange={handleInvestmentChange}
                className="w-full h-[2px] bg-white/10 appearance-none cursor-pointer accent-brand-neon"
              />
              <div className="flex justify-between font-mono text-[10px] tracking-widest uppercase text-brand-light/40 mt-4">
                <span>R$ 1.000</span>
                <span>R$ 50.000</span>
                <span>R$ 100.000</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projection Section */}
        <motion.div 
          className="grid lg:grid-cols-12 gap-8 items-start mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Title & Toggle */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-3xl font-serif text-brand-light/80">Projeção <span className="text-brand-light">ROAS</span></h3>
            
            <div className="flex bg-white/5 p-1 rounded-sm w-full">
              <button 
                onClick={() => setScenario('optimistic')}
                className={`flex-1 py-3 px-4 font-bold text-sm transition-all text-center ${scenario === 'optimistic' ? 'bg-brand-neon text-black' : 'text-brand-light/60 hover:text-brand-light'}`}
              >
                Otimista:
              </button>
              <button 
                onClick={() => setScenario('conservative')}
                className={`flex-1 py-3 px-4 font-bold text-sm transition-all text-center ${scenario === 'conservative' ? 'bg-brand-neon text-black' : 'text-brand-light/60 hover:text-brand-light'}`}
              >
                Conservador:
              </button>
            </div>
          </div>

          {/* Right Table */}
          <div className="lg:col-span-9 w-full overflow-x-auto">
            <div className="min-w-[600px] bg-white/[0.02] border border-white/10">
              
              {/* Header Row */}
              <div className="grid grid-cols-5 border-b border-white/10 bg-white/[0.02]">
                {projections.map((p, i) => (
                  <div key={i} className="p-4 text-center border-r border-white/5 last:border-0 font-bold text-brand-light/90">
                    {p.month}
                  </div>
                ))}
              </div>

              {/* Stage Row */}
              <div className="grid grid-cols-5 border-b border-white/5">
                {projections.map((p, i) => (
                  <div key={i} className="p-3 text-center border-r border-white/5 last:border-0 italic text-brand-light/60 font-serif">
                    {p.stage}
                  </div>
                ))}
              </div>

              {/* Investment Row */}
              <div className="grid grid-cols-5 border-b border-white/5">
                {projections.map((p, i) => (
                  <div key={i} className="p-4 text-center border-r border-white/5 last:border-0 text-brand-light/80">
                    {formatCurrency(investment)}
                  </div>
                ))}
              </div>

              {/* ROAS Row */}
              <div className="grid grid-cols-5 border-b border-white/5">
                <div className="col-span-5 grid grid-cols-5">
                  {projections.map((p, i) => (
                    <div key={i} className="p-4 text-center border-r border-white/5 last:border-0 font-bold">
                      <span className="text-brand-light/50 text-xs mr-2">ROAS</span>
                      <span className={scenario === 'optimistic' ? 'text-brand-neon' : 'text-brand-light'}>
                        {p.roas.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Header Row */}
              <div className="grid grid-cols-5 border-b border-white/5 bg-white/[0.01]">
                {projections.map((p, i) => (
                  <div key={i} className="p-3 text-center border-r border-white/5 last:border-0 text-brand-light/60 text-sm">
                    Receita
                  </div>
                ))}
              </div>

              {/* Revenue Data Row */}
              <div className="grid grid-cols-5 border-b border-white/10 bg-white/[0.01]">
                {projections.map((p, i) => (
                  <div key={i} className="p-4 text-center border-r border-white/5 last:border-0 font-bold text-brand-light">
                    {formatCurrency(p.revenue)}
                  </div>
                ))}
              </div>

              {/* Footer Total Row */}
              <div className="p-4 flex justify-end items-center bg-[#111]">
                 <span className="text-brand-light font-bold text-lg">
                   Receita Projetada: {formatCurrency(totalRevenue)}
                 </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-brand-light/40 max-w-4xl mx-auto">
            * Projeções baseadas em benchmarks medianos da combinação entre Google Ads e Meta Ads. A evolução simula o amadurecimento dos algoritmos. Resultados reais dependem significativamente da qualidade do criativo, taxa de conversão da landing page, ticket médio e margem de contribuição.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-neon text-brand-dark font-bold text-lg rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(198,240,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <TrendingUp className="w-5 h-5" />
            Quer esses resultados? Contrate agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaaSRoasSimulator;
