import { Suspense } from 'react';
import MaaSHero from './MaaSHero';
import MaaSProblem from './MaaSProblem';
import MaaSSolution from './MaaSSolution';
import MaaSWhyVelora from './MaaSWhyVelora';
import MaaSWhySelfService from './MaaSWhySelfService';
import MaaSPricing from './MaaSPricing';
import MaaSRoasSimulator from './MaaSRoasSimulator';
import MaaSFAQ from './MaaSFAQ';

const MaaSPage = () => (
    <>
        <MaaSHero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <MaaSProblem />
            <MaaSSolution />
            <MaaSWhyVelora />
            <MaaSWhySelfService />
            <MaaSPricing />
            <MaaSRoasSimulator />
            <MaaSFAQ />
        </Suspense>
    </>
);

export default MaaSPage;
