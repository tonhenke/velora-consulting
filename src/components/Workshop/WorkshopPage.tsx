import CountdownBar from './CountdownBar';
import WorkshopHero from './WorkshopHero';
import WorkshopProblem from './WorkshopProblem';
import WorkshopSolution from './WorkshopSolution';
import WorkshopForWho from './WorkshopForWho';
import WorkshopCurriculum from './WorkshopCurriculum';
import WorkshopInstructor from './WorkshopInstructor';
import WorkshopLocation from './WorkshopLocation';
import WorkshopAI from './WorkshopAI';
import WorkshopDeliverables from './WorkshopDeliverables';
import WorkshopOffer from './WorkshopOffer';
import WorkshopGuarantee from './WorkshopGuarantee';
import WorkshopFAQ from './WorkshopFAQ';
import WorkshopFinalCTA from './WorkshopFinalCTA';

const WorkshopPage = () => (
  <div className="min-h-screen bg-black text-white">
    <CountdownBar />
    <WorkshopHero />
    <WorkshopProblem />
    <WorkshopSolution />
    <WorkshopForWho />
    <WorkshopCurriculum />
    <WorkshopAI />
    <WorkshopInstructor />
    <WorkshopLocation />
    <WorkshopDeliverables />
    <WorkshopOffer />
    <WorkshopGuarantee />
    <WorkshopFAQ />
    <WorkshopFinalCTA />
  </div>
);

export default WorkshopPage;
