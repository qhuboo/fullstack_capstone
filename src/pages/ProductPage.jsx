import Footer from "../components/Footer";
import ProductOverview from "../components/ProductOverview";
import StoreNavigation from "../components/StoreNavigation";

export default function ProductPage() {
  const [page, setPage] = useState(0);
  return (
    <div>
      <StoreNavigation />
      <div className="h-[50px]"></div>
      <ProductOverview />
      <Footer />
    </div>
  );
}
