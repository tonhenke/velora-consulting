import { Suspense } from 'react';
import TechB2BHero from './TechB2BHero';
import LogoMarquee from '../LogoMarquee';
import TechB2BExhibitsSection from './TechB2BExhibitsSection';
import TechB2BFrameworkSection from './TechB2BFrameworkSection';
import TechB2BScorecardQuiz from './TechB2BScorecardQuiz';
import TechB2BProcessSection from './TechB2BProcessSection';
import LeadCaptureSection from '../LeadCaptureSection';
import TechB2BDeliverablesSection from './TechB2BDeliverablesSection';
import CaseStudies from '../CaseStudies';
import Methodology from '../Methodology';
import WhoWeAre from '../WhoWeAre';
import TechB2BFAQSection from './TechB2BFAQSection';
import TechB2BFinalCTA from './TechB2BFinalCTA';

const TechB2BPage = () => (
    <>
        <TechB2BHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <TechB2BExhibitsSection />
            <TechB2BFrameworkSection />
            <TechB2BScorecardQuiz />
            <TechB2BProcessSection />
            <LeadCaptureSection />
            <TechB2BDeliverablesSection />
            <CaseStudies />
            <Methodology />
            <WhoWeAre />
            <TechB2BFAQSection />
            <TechB2BFinalCTA />
        </Suspense>
    </>
);

export default TechB2BPage;
