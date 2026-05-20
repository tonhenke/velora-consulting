import { useEffect } from 'react';
import { 
  ImersaoHero, 
  ImersaoAbout, 
  ImersaoTarget, 
  ImersaoWhatWeAnalyze, 
  ImersaoMethodology, 
  GrowthDiscoveryCanvas, 
  ImersaoPrioritization, 
  ImersaoDeliverables, 
  ImersaoDifferentials, 
  ImersaoResults, 
  ImersaoFinalCTA 
} from './ImersaoComponents';
import WhoWeAre from '../WhoWeAre';

const ImersaoGrowthPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Update document title
    document.title = "Imersão de Growth | Velora Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ImersaoHero />
      <ImersaoAbout />
      <ImersaoTarget />
      <ImersaoWhatWeAnalyze />
      <ImersaoMethodology />
      <GrowthDiscoveryCanvas />
      <ImersaoPrioritization />
      <ImersaoDeliverables />
      <ImersaoDifferentials />
      <ImersaoResults />
      <WhoWeAre />
      <ImersaoFinalCTA />
    </div>
  );
};

export default ImersaoGrowthPage;
