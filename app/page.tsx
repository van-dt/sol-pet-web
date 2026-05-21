import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PetsSection from "./components/PetsSection";
import CombatSection from "./components/CombatSection";
import ElementsSection from "./components/ElementsSection";
import EggsSection from "./components/EggsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PetsSection />
        <CombatSection />
        <ElementsSection />
        <EggsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
