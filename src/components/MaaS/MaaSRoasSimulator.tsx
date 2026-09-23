import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, BarChart3, ArrowRight } from 'lucide-react';

const ROAS_DATA = {
  all_industries: {
    name: 'Todos os Setores',
    google: {
      conservative: { cpc: 1.05, ctr: 1.40, cvr: 2.50, roas: 2.60, cpa: 35.00 },
      optimistic: { cpc: 0.75, ctr: 2.10, cvr: 3.80, roas: 4.10, cpa: 22.00 }
    },
    meta: {
      conservative: { cpc: 0.78, ctr: 1.75, cvr: 1.30, roas: 1.50, cpa: 46.00 },
      optimistic: { cpc: 0.52, ctr: 2.80, cvr: 2.20, roas: 2.80, cpa: 29.00 }
    }
  },
  apparel: {
    name: 'Moda & Acessórios',
    google: {
      conservative: { cpc: 0.88, ctr: 1.35, cvr: 2.50, roas: 2.50, cpa: 33.00 },
      optimistic: { cpc: 0.60, ctr: 2.20, cvr: 3.90, roas: 4.00, cpa: 21.00 }
    },
    meta: {
      conservative: { cpc: 0.72, ctr: 1.80, cvr: 1.35, roas: 1.65, cpa: 44.00 },
      optimistic: { cpc: 0.48, ctr: 2.95, cvr: 2.40, roas: 3.20, cpa: 27.00 }
    }
  },
  beauty: {
    name: 'Beleza',
    google: {
      conservative: { cpc: 1.15, ctr: 1.40, cvr: 1.90, roas: 1.75, cpa: 36.00 },
      optimistic: { cpc: 0.78, ctr: 2.15, cvr: 3.20, roas: 2.90, cpa: 23.00 }
    },
    meta: {
      conservative: { cpc: 0.82, ctr: 1.65, cvr: 1.20, roas: 1.30, cpa: 46.00 },
      optimistic: { cpc: 0.54, ctr: 2.70, cvr: 2.10, roas: 2.35, cpa: 28.50 }
    }
  },
  health_wellness: {
    name: 'Saúde & Bem-estar',
    google: {
      conservative: { cpc: 1.55, ctr: 1.45, cvr: 1.95, roas: 1.65, cpa: 42.00 },
      optimistic: { cpc: 1.05, ctr: 2.30, cvr: 3.10, roas: 2.75, cpa: 26.00 }
    },
    meta: {
      conservative: { cpc: 0.86, ctr: 1.60, cvr: 1.15, roas: 1.20, cpa: 49.00 },
      optimistic: { cpc: 0.58, ctr: 2.65, cvr: 1.95, roas: 2.20, cpa: 31.00 }
    }
  },
  electronics: {
    name: 'Eletrônicos',
    google: {
      conservative: { cpc: 1.40, ctr: 1.30, cvr: 1.15, roas: 2.25, cpa: 54.00 },
      optimistic: { cpc: 0.92, ctr: 2.05, cvr: 2.10, roas: 3.75, cpa: 32.00 }
    },
    meta: {
      conservative: { cpc: 1.02, ctr: 1.55, cvr: 0.95, roas: 1.40, cpa: 58.00 },
      optimistic: { cpc: 0.68, ctr: 2.45, cvr: 1.75, roas: 2.50, cpa: 37.00 }
    }
  },
  food_beverage: {
    name: 'Food & Bebidas',
    google: {
      conservative: { cpc: 1.02, ctr: 1.35, cvr: 2.05, roas: 2.65, cpa: 34.00 },
      optimistic: { cpc: 0.70, ctr: 2.10, cvr: 3.40, roas: 4.20, cpa: 21.00 }
    },
    meta: {
      conservative: { cpc: 0.70, ctr: 1.85, cvr: 1.30, roas: 1.60, cpa: 40.00 },
      optimistic: { cpc: 0.46, ctr: 3.00, cvr: 2.30, roas: 3.10, cpa: 25.00 }
    }
  },
  lifestyle_boutique: {
    name: 'Lifestyle & Boutique',
    google: {
      conservative: { cpc: 0.98, ctr: 1.40, cvr: 2.55, roas: 2.80, cpa: 32.00 },
      optimistic: { cpc: 0.68, ctr: 2.25, cvr: 4.10, roas: 4.60, cpa: 19.50 }
    },
    meta: {
      conservative: { cpc: 0.64, ctr: 1.95, cvr: 1.45, roas: 1.85, cpa: 37.00 },
      optimistic: { cpc: 0.40, ctr: 3.20, cvr: 2.50, roas: 3.45, cpa: 22.00 }
    }
  },
  pets_animals: {
    name: 'Pets & Animais',
    google: {
      conservative: { cpc: 0.92, ctr: 1.40, cvr: 3.50, roas: 2.65, cpa: 31.00 },
      optimistic: { cpc: 0.64, ctr: 2.20, cvr: 5.40, roas: 4.30, cpa: 19.00 }
    },
    meta: {
      conservative: { cpc: 0.72, ctr: 1.90, cvr: 1.35, roas: 1.60, cpa: 39.00 },
      optimistic: { cpc: 0.46, ctr: 3.10, cvr: 2.40, roas: 2.95, cpa: 24.50 }
    }
  },
  sports_outdoors: {
    name: 'Esportes & Outdoor',
    google: {
      conservative: { cpc: 1.05, ctr: 1.38, cvr: 2.50, roas: 2.75, cpa: 33.00 },
      optimistic: { cpc: 0.72, ctr: 2.15, cvr: 4.00, roas: 4.40, cpa: 20.00 }
    },
    meta: {
      conservative: { cpc: 0.80, ctr: 1.70, cvr: 1.20, roas: 1.65, cpa: 43.00 },
      optimistic: { cpc: 0.52, ctr: 2.80, cvr: 2.15, roas: 3.00, cpa: 26.50 }
    }
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

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 0
  }).format(value);
};

const USD_TO_BRL_RATE = 5.5;

interface MetricCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, highlight }) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm text-brand-light/60">{label}</span>
    <span className={`text-lg font-bold ${highlight ? 'text-brand-neon' : 'text-brand-light'}`}>
      {value}
    </span>
  </div>
);


const getMetrics = (selectedSector: SectorKey, investment: number, platform: 'google' | 'meta', scenario: 'conservative' | 'optimistic') => {
  const data = ROAS_DATA[selectedSector][platform][scenario];
  const investmentUSD = investment / USD_TO_BRL_RATE;
  const clicks = investmentUSD / data.cpc;
  const conversions = clicks * (data.cvr / 100);
  const revenue = investment * data.roas;
  const netReturn = revenue - investment;

  return {
    roas: data.roas.toFixed(2) + 'x',
    revenue: formatCurrency(revenue),
    clicks: '~' + formatNumber(clicks),
    conversions: '~' + formatNumber(conversions),
    netReturn: formatCurrency(netReturn)
  };
};

const ResultColumn = ({ title, platform, selectedSector, investment }: { title: string, platform: 'google' | 'meta', selectedSector: SectorKey, investment: number }) => {
  const cons = getMetrics(selectedSector, investment, platform, 'conservative');
  const opt = getMetrics(selectedSector, investment, platform, 'optimistic');

  return (
    <motion.div 
      className="bg-white/[0.01] border border-white/5 p-8 md:p-10 flex flex-col gap-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
        <BarChart3 className={`w-6 h-6 text-brand-light`} strokeWidth={1.5} />
        <h3 className="text-3xl font-serif text-brand-light">{title}</h3>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-8">
        {/* Conservative Scenario */}
        <div className="flex flex-col gap-6">
          <h4 className="text-brand-light/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light/40"></span>
            Cenário Conservador
          </h4>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSector}-${investment}-${platform}-cons`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="border-b border-white/5 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light/40 block mb-2">ROAS Projetado</span>
                <span className="text-4xl font-serif text-brand-light/80">{cons.roas}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <MetricCard label="Receita Bruta" value={cons.revenue} />
                <MetricCard label="Retorno Líquido" value={cons.netReturn} />
                <MetricCard label="Cliques Estimados" value={cons.clicks} />
                <MetricCard label="Conversões" value={cons.conversions} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Optimistic Scenario */}
        <div className="flex flex-col gap-6 xl:border-l xl:border-white/5 xl:pl-8">
          <h4 className="text-brand-neon font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon shadow-[0_0_8px_rgba(198,240,0,0.6)]"></span>
            Cenário Otimista
          </h4>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSector}-${investment}-${platform}-opt`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="border-b border-brand-neon/20 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-neon block mb-2">ROAS Projetado</span>
                <span className="text-4xl font-serif text-brand-neon">{opt.roas}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <MetricCard label="Receita Bruta" value={opt.revenue} highlight />
                <MetricCard label="Retorno Líquido" value={opt.netReturn} highlight />
                <MetricCard label="Cliques Estimados" value={opt.clicks} />
                <MetricCard label="Conversões" value={opt.conversions} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const MaaSRoasSimulator: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorKey>('all_industries');
  const [investment, setInvestment] = useState<number>(10000);
  
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setInvestment(isNaN(value) ? 1000 : Math.max(1000, Math.min(100000, value)));
  };

  return (
    <section id="roas-simulator" className="bg-black text-brand-light py-32 border-t border-brand-light/10 overflow-hidden relative">
      {/* Background glow */}
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
            Selecione o setor e o valor de investimento mensal em mídia para ver as projeções de retorno.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="bg-white/[0.02] border border-white/10 p-8 md:p-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col gap-10">
            {/* Sector Selection */}
            <div>
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
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-brand-light/60">
                  2. Investimento Mensal (Verba de Mídia)
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
                    className="w-40 bg-transparent border-b border-white/20 py-2 pl-10 pr-0 text-brand-light font-serif text-3xl focus:outline-none focus:border-brand-neon transition-colors"
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
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ResultColumn title="Google Ads" platform="google" selectedSector={selectedSector} investment={investment} />
          <ResultColumn title="Meta Ads" platform="meta" selectedSector={selectedSector} investment={investment} />
        </div>

        {/* Disclaimer */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-brand-light/40 max-w-4xl mx-auto">
            * Projeções baseadas em benchmarks medianos de 21.000+ contas de e-commerce (Triple Whale, 2025-2026). Resultados reais dependem significativamente da qualidade do criativo, taxa de conversão da landing page, ticket médio, margem de contribuição e maturidade da conta de anúncios. Valores de conversão de moeda simulados a R$ 5,50/USD.
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
