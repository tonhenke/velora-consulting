
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import PhilosophySection from './components/PhilosophySection';
import ProblemSection from './components/ProblemSection';
import TeamStructure from './components/TeamStructure';
import Methodology from './components/Methodology';
import Services from './components/Services';
import GrowthLab from './components/GrowthLab';
import CaseStudies from './components/CaseStudies';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <LogoMarquee /> {/* Section 2: Logo Scroll */}
        <PhilosophySection />
        <ProblemSection /> {/* Section 4: Problem/Solution */}
        <TeamStructure /> {/* Original Section 5 - keeping as is for now or slightly adapting */}
        <Methodology /> {/* Section 6 */}
        <Services /> {/* Section 7 */}
        <GrowthLab /> {/* Section: Plataforma GrowthLab */}
        <CaseStudies /> {/* Section 8: Results/Cases */}
        <WhoWeAre /> {/* Section 3: Quem faz acontecer */}
        <Contact /> {/* Section 11 */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
