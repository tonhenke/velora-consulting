
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load below-the-fold components to improve performance
const LogoMarquee = lazy(() => import('./components/LogoMarquee'));
const AiHomeSection = lazy(() => import('./components/AiHomeSection'));
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const LeadCaptureSection = lazy(() => import('./components/LeadCaptureSection'));
const TeamStructure = lazy(() => import('./components/TeamStructure'));

const Methodology = lazy(() => import('./components/Methodology'));
const Services = lazy(() => import('./components/Services'));
const DiagnosticCTA = lazy(() => import('./components/DiagnosticCTA'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const WhoWeAre = lazy(() => import('./components/WhoWeAre'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const SuccessPage = lazy(() => import('./components/SuccessPage'));
const Diagnostic = lazy(() => import('./components/Diagnostic/Diagnostic'));
const WorkshopPage = lazy(() => import('./components/Workshop/WorkshopPage'));
const GlaasPage = lazy(() => import('./components/Glaas/GlaasPage'));
const GlaasEmpresasPage = lazy(() => import('./components/GlaasEmpresas/GlaasEmpresasPage'));
const ImersaoGrowthPage = lazy(() => import('./components/ImersaoGrowth/ImersaoGrowthPage'));
const AiLedGrowthPage = lazy(() => import('./components/AiLedGrowth/AiLedGrowthPage'));

// Standalone pages that render without Header/Footer/WhatsApp
const STANDALONE_PAGES = ['/workshop'];

const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LogoMarquee />
      <AiHomeSection />
      <PhilosophySection />
      <ProblemSection />
      <LeadCaptureSection />
      <TeamStructure />
      <Methodology />
      <Services />
      <DiagnosticCTA />
      <CaseStudies />
      <WhoWeAre />
      <Contact />
    </Suspense>
  </>
);

function AppLayout() {
  const location = useLocation();
  const isDotsDomain = window.location.hostname.includes('dotsdc.com.br');
  const isStandalone = STANDALONE_PAGES.includes(location.pathname) || (isDotsDomain && location.pathname === '/');

  return (
    <div className="min-h-screen bg-black text-white">
      {!isStandalone && <Header />}
      <main>
        <Suspense fallback={<div className="h-64 bg-black" />}>
          <Routes>
            <Route path="/" element={isDotsDomain ? <WorkshopPage /> : <HomePage />} />
            <Route path="/ia-led-growth" element={<AiLedGrowthPage />} />
            <Route path="/ai-led-growth" element={<AiLedGrowthPage />} />
            <Route path="/contato-sucesso" element={<SuccessPage />} />
            <Route path="/diagnostico/*" element={<Diagnostic />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/glaas-agencias" element={<GlaasPage />} />
            <Route path="/glaas-empresas" element={<GlaasEmpresasPage />} />
            <Route path="/imersao-de-growth" element={<ImersaoGrowthPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isStandalone && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
      {!isStandalone && <WhatsAppButton />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
