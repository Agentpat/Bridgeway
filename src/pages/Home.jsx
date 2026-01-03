import FeatureStrip from "../components/FeatureStrip";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip/>
      <Services/>
      <HowItWorks/>
      <FinalCTA/>
      <Footer/>
    </>
  );
}
