import { Suspense } from 'react';
import PipelineHero from './PipelineHero';
import LogoMarquee from '../LogoMarquee';
import PipelinePains from './PipelinePains';
import PipelineServices from './PipelineServices';
import PipelinePricing from './PipelinePricing';
import CaseStudies from '../CaseStudies';
import WhoWeAre from '../WhoWeAre';
import Contact from '../Contact';

const PipelinePage = () => (
    <>
        <PipelineHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <LogoMarquee />
            <PipelinePains />
            <PipelineServices />
            <CaseStudies />
            <PipelinePricing />
            <WhoWeAre />
            <div id="contato">
                <Contact />
            </div>
        </Suspense>
    </>
);

export default PipelinePage;
