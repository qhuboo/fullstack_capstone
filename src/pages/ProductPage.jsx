import Footer from "../components/Footer";
import ProductOverview from "../components/ProductOverview";
import StoreNavigation from "../components/StoreNavigation";

export default function ProductPage({ product, cart, setCart }) {
  return (
    <div>
      <StoreNavigation cart={cart} setCart={setCart} />
      <div className="h-[50px]"></div>
      <ProductOverview product={product} cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}
