import "./App.css";
import StoreNavigation from "./components/StoreNavigation";
import FeatureSection from "./components/FeatureSection";
import NintendoProductFeatures from "./components/NintendoProductFeatures";
import PlaystationProductFeatures from "./components/PlaystationProductFeatures";
import XboxProductFeatures from "./components/XboxProductFeatures";
import HeaderSection from "./components/HeaderSection";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <StoreNavigation />
      <HeaderSection />
      <FeatureSection />
      <NintendoProductFeatures />
      <Logos />
      <PlaystationProductFeatures />
      <XboxProductFeatures />
      <Footer />
    </div>
  );
}

export default App;
