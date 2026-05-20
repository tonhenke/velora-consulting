import { useEffect } from 'react';
import GlaasEmpresasHero from './GlaasEmpresasHero';
import GlaasEmpresasProblem from './GlaasEmpresasProblem';
import GlaasEmpresasAbout from './GlaasEmpresasAbout';
import GlaasEmpresasHowItWorks from './GlaasEmpresasHowItWorks';
import GlaasEmpresasTargetAudience from './GlaasEmpresasTargetAudience';
import GlaasEmpresasComparison from './GlaasEmpresasComparison';
import WhoWeAre from '../WhoWeAre';
import GlaasEmpresasCTA from './GlaasEmpresasCTA';

const GlaasEmpresasPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Update document title
    document.title = "GLAaS - Growth Leader As a Service para Empresas | Velora Consulting";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <GlaasEmpresasHero />
      <GlaasEmpresasProblem />
      <GlaasEmpresasAbout />
      <GlaasEmpresasHowItWorks />
      <GlaasEmpresasTargetAudience />
      <GlaasEmpresasComparison />
      <WhoWeAre />
      <GlaasEmpresasCTA />
    </div>
  );
};

export default GlaasEmpresasPage;
