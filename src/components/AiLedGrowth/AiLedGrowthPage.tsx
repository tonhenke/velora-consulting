import { useEffect } from 'react';
import AiLedGrowthHero from './AiLedGrowthHero';
import AiLedGrowthStatement from './AiLedGrowthStatement';
import AiLedGrowthSolutions from './AiLedGrowthSolutions';
import AiLedGrowthOS from './AiLedGrowthOS';
import AiLedGrowthStudio from './AiLedGrowthStudio';
import AiLedGrowthHowWeWork from './AiLedGrowthHowWeWork';
import AiLedGrowthFAQ from './AiLedGrowthFAQ';

const AiLedGrowthPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Update document title for SEO
    document.title = "AI-Led Growth - Consultoria de Inteligência Artificial | Velora Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-black text-brand-light">
      <AiLedGrowthHero />
      <AiLedGrowthStatement />
      <AiLedGrowthSolutions />
      <AiLedGrowthOS />
      <AiLedGrowthStudio />
      <AiLedGrowthHowWeWork />
      <AiLedGrowthFAQ />
    </div>
  );
};

export default AiLedGrowthPage;
