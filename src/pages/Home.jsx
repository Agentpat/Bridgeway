import FeatureStrip from "../components/FeatureStrip";
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
    </>
  );
}
