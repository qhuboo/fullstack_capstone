import Footer from "../components/Footer";
import ProductOverview from "../components/ProductOverview";
import StoreNavigation from "../components/StoreNavigation";

export default function ProductPage({ product, cart }) {
  return (
    <div>
      <StoreNavigation cart={cart} />
      <div className="h-[50px]"></div>
      <ProductOverview product={product} />
      <Footer />
    </div>
  );
}
