import "./App.css";
import StoreNavigation from "./components/StoreNavigation";
import FeatureSection from "./components/FeatureSection";
import NintendoProductFeatures from "./components/NintendoProductFeatures";
import PlaystationProductFeatures from "./components/PlaystationProductFeatures";
import XboxProductFeatures from "./components/XboxProductFeatures";

function App() {
  return (
    <div>
      <StoreNavigation />
      <FeatureSection />
      <NintendoProductFeatures />
      <PlaystationProductFeatures />
      <XboxProductFeatures />
    </div>
  );
}

export default App;
