import { useEffect } from 'react';
import GlaasHero from './GlaasHero';
import GlaasProblem from './GlaasProblem';
import GlaasAbout from './GlaasAbout';
import GlaasHowItWorks from './GlaasHowItWorks';
import GlaasTargetAudience from './GlaasTargetAudience';
import GlaasComparison from './GlaasComparison';
import WhoWeAre from '../WhoWeAre';
import GlaasCTA from './GlaasCTA';

const GlaasPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Update document title
    document.title = "GLAaS - Growth Leader As a Service | Velora Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <GlaasHero />
      <GlaasProblem />
      <GlaasAbout />
      <GlaasHowItWorks />
      <GlaasTargetAudience />
      <GlaasComparison />
      <WhoWeAre />
      <GlaasCTA />
    </div>
  );
};

export default GlaasPage;
