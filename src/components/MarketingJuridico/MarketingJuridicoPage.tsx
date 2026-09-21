import { Suspense } from 'react';
import MarketingJuridicoHero from './MarketingJuridicoHero';
import LogoMarquee from '../LogoMarquee';
import MarketingJuridicoPains from './MarketingJuridicoPains';
import MarketingJuridicoConsequences from './MarketingJuridicoConsequences';
import MarketingJuridicoProcessSection from './MarketingJuridicoProcessSection';
import MarketingJuridicoDeliverablesSection from './MarketingJuridicoDeliverablesSection';
import MarketingJuridicoSeniority from './MarketingJuridicoSeniority';
import Methodology from '../Methodology';
import CaseStudies from '../CaseStudies';
import WhoWeAre from '../WhoWeAre';
import MarketingJuridicoScorecardQuiz from './MarketingJuridicoScorecardQuiz';
import MarketingJuridicoFinalCTA from './MarketingJuridicoFinalCTA';

const MarketingJuridicoPage = () => (
    <>
        <MarketingJuridicoHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <MarketingJuridicoPains />
            <MarketingJuridicoConsequences />
            <MarketingJuridicoProcessSection />
            <MarketingJuridicoDeliverablesSection />
            <MarketingJuridicoSeniority />
            <Methodology />
            <CaseStudies />
            <WhoWeAre />
            <MarketingJuridicoScorecardQuiz />
            <MarketingJuridicoFinalCTA />
        </Suspense>
    </>
);

export default MarketingJuridicoPage;
