import { Suspense } from 'react';
import TechB2BHero from './TechB2BHero';
import LogoMarquee from '../LogoMarquee';
import TechB2BPains from './TechB2BPains';
import TechB2BConsequences from './TechB2BConsequences';
import TechB2BProcessSection from './TechB2BProcessSection';
import TechB2BDeliverablesSection from './TechB2BDeliverablesSection';
import TechB2BSeniority from './TechB2BSeniority';
import Methodology from '../Methodology';
import CaseStudies from '../CaseStudies';
import WhoWeAre from '../WhoWeAre';
import TechB2BFAQSection from './TechB2BFAQSection';
import TechB2BFinalCTA from './TechB2BFinalCTA';

const TechB2BPage = () => (
    <>
        <TechB2BHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <TechB2BPains />
            <TechB2BConsequences />
            <TechB2BProcessSection />
            <TechB2BDeliverablesSection />
            <TechB2BSeniority />
            <Methodology />
            <CaseStudies />
            <WhoWeAre />
            <TechB2BFAQSection />
            <TechB2BFinalCTA />
        </Suspense>
    </>
);

export default TechB2BPage;
