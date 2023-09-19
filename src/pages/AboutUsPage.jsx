import StoreNavigation from "../components/StoreNavigation";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";

export default function MainPage({ cart, setCart }) {
  return (
    <div>
      <StoreNavigation cart={cart} setCart={setCart} />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
