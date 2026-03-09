
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import PhilosophySection from './components/PhilosophySection';
import ProblemSection from './components/ProblemSection';
import LeadCaptureSection from './components/LeadCaptureSection';
import TeamStructure from './components/TeamStructure';
import Methodology from './components/Methodology';
import Services from './components/Services';
import GrowthLab from './components/GrowthLab';
import CaseStudies from './components/CaseStudies';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage';

const HomePage = () => (
  <>
    <Hero />
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
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contato-sucesso" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
