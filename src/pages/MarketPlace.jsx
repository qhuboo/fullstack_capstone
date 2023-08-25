import Footer from "../components/Footer";
import StoreNavigation from "../components/StoreNavigation";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function MarketPlace({ marketList }) {
  const [page, setPage] = useState(0);
  const numPages = Math.ceil(marketList.length / 24);
  return (
    <div>
      <StoreNavigation />
      <ProductList marketList={marketList} page={page} />
      <Pagination numPages={numPages} setPage={setPage} />
      <Footer />
    </div>
  );
}
