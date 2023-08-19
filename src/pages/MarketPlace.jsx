import Footer from "../components/Footer";
import StoreNavigation from "../components/StoreNavigation";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function MarketPlace() {
  return (
    <div>
      <StoreNavigation />
      <ProductList />
      <Pagination />
      <Footer />
    </div>
  );
}
