
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load below-the-fold components to improve performance
const LogoMarquee = lazy(() => import('./components/LogoMarquee'));
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const LeadCaptureSection = lazy(() => import('./components/LeadCaptureSection'));
const TeamStructure = lazy(() => import('./components/TeamStructure'));
const AiPlaybooksSection = lazy(() => import('./components/AiPlaybooksSection'));
const Methodology = lazy(() => import('./components/Methodology'));
const Services = lazy(() => import('./components/Services'));
const GrowthLab = lazy(() => import('./components/GrowthLab'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const WhoWeAre = lazy(() => import('./components/WhoWeAre'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const SuccessPage = lazy(() => import('./components/SuccessPage'));

const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LogoMarquee />
      <PhilosophySection />
      <ProblemSection />
      <LeadCaptureSection />
      <TeamStructure />
      <Methodology />
      <Services />
      <GrowthLab />
      <CaseStudies />
      <WhoWeAre />
      <Contact />
    </Suspense>
  </>
);

const IALedGrowthPage = () => (
  <>
    <Hero 
      title={
        <>
          Consultoria<br />
          IA-Led Growth<br />
          Destrave. <span className="text-brand-neon">Cresça.</span>
        </>
      }
    />
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LogoMarquee />
      <PhilosophySection />
      <ProblemSection />
      <LeadCaptureSection />
      <TeamStructure />
      <AiPlaybooksSection />
      <Methodology />
      <Services />
      <GrowthLab />
      <CaseStudies />
      <WhoWeAre />
      <Contact />
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Suspense fallback={<div className="h-64 bg-black" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ia-led-growth" element={<IALedGrowthPage />} />
              <Route path="/contato-sucesso" element={<SuccessPage />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
