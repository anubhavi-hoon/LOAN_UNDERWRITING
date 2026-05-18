import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Stats from "./components/Stats.jsx";
import Pipeline from "./components/Pipeline.jsx";
import DocIntelligence from "./components/DocIntelligence.jsx";
import FeatureEngine from "./components/FeatureEngine.jsx";
import LiveDemo from "./components/LiveDemo.jsx";
import Results from "./components/Results.jsx";
import Enterprise from "./components/Enterprise.jsx";
import TechStack from "./components/TechStack.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-bg min-h-screen font-inter">
      <Navbar />
      <Hero />
      <Problem />
      <Stats />
      <Pipeline />
      <DocIntelligence />
      <FeatureEngine />
      <LiveDemo />
      <Results />
      <Enterprise />
      <TechStack />
      <Footer />
    </div>
  );
}
