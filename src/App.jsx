import "./App.css";
import StoreNavigation from "./components/StoreNavigation";
import FeatureSection from "./components/FeatureSection";
import NintendoProductFeatures from "./components/NintendoProductFeatures";
import PlaystationProductFeatures from "./components/PlaystationProductFeatures";
import XboxProductFeatures from "./components/XboxProductFeatures";
import HeaderSection from "./components/HeaderSection";
import NintendoLogos from "./components/NintendoLogos";

function App() {
  return (
    <div>
      <StoreNavigation />
      <HeaderSection />
      <FeatureSection />
      <NintendoProductFeatures />
      <NintendoLogos />
      <PlaystationProductFeatures />
      <XboxProductFeatures />
    </div>
  );
}

export default App;
