import { Suspense } from 'react';
import MarketingFinanceiroHero from './MarketingFinanceiroHero';
import LogoMarquee from '../LogoMarquee';
import MarketingFinanceiroPains from './MarketingFinanceiroPains';
import MarketingFinanceiroConsequences from './MarketingFinanceiroConsequences';
import MarketingFinanceiroProcessSection from './MarketingFinanceiroProcessSection';
import MarketingFinanceiroDeliverablesSection from './MarketingFinanceiroDeliverablesSection';
import MarketingFinanceiroSeniority from './MarketingFinanceiroSeniority';
import Methodology from '../Methodology';
import CaseStudies from '../CaseStudies';
import WhoWeAre from '../WhoWeAre';
import MarketingFinanceiroScorecardQuiz from './MarketingFinanceiroScorecardQuiz';
import MarketingFinanceiroFinalCTA from './MarketingFinanceiroFinalCTA';

const MarketingFinanceiroPage = () => (
    <>
        <MarketingFinanceiroHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <MarketingFinanceiroPains />
            <MarketingFinanceiroConsequences />
            <MarketingFinanceiroProcessSection />
            <MarketingFinanceiroDeliverablesSection />
            <MarketingFinanceiroSeniority />
            <Methodology />
            <CaseStudies />
            <WhoWeAre />
            <MarketingFinanceiroScorecardQuiz />
            <MarketingFinanceiroFinalCTA />
        </Suspense>
    </>
);

export default MarketingFinanceiroPage;
