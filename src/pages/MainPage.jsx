import StoreNavigation from "../components/StoreNavigation";
import HeaderSection from "../components/HeaderSection";
import FeatureSection from "../components/FeatureSection";
import NintendoProductFeatures from "../components/NintendoProductFeatures";
import Logos from "../components/Logos";
import PlaystationProductFeatures from "../components/PlaystationProductFeatures";
import XboxProductFeatures from "../components/XboxProductFeatures";
import Footer from "../components/Footer";

export default function MainPage({ cart, setCart }) {
  return (
    <div>
      <StoreNavigation cart={cart} setCart={setCart} />
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
