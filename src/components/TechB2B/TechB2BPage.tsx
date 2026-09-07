import { Suspense } from 'react';
import TechB2BHero from './TechB2BHero';
import LogoMarquee from '../LogoMarquee';
import TechB2BPhilosophySection from './TechB2BPhilosophySection';
import TechB2BProblemSection from './TechB2BProblemSection';
import TeamStructure from '../TeamStructure';
import LeadCaptureSection from '../LeadCaptureSection';
import TechB2BMethodology from './TechB2BMethodology';
import TechB2BAiSection from './TechB2BAiSection';
import Services from '../Services';
import TechB2BDiagnosticCTA from './TechB2BDiagnosticCTA';
import CaseStudies from '../CaseStudies';
import WhoWeAre from '../WhoWeAre';
import Contact from '../Contact';

const TechB2BPage = () => (
    <>
        <TechB2BHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <TechB2BPhilosophySection />
            <TechB2BProblemSection />
            <TeamStructure />
            <LeadCaptureSection />
            <TechB2BMethodology />
            <TechB2BAiSection />
            <Services />
            <TechB2BDiagnosticCTA />
            <CaseStudies />
            <WhoWeAre />
            <Contact />
        </Suspense>
    </>
);

export default TechB2BPage;
