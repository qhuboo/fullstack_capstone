import Footer from "../components/Footer";
import StoreNavigation from "../components/StoreNavigation";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function MarketPlace({ marketList, setMarketList, setProduct }) {
  const [page, setPage] = useState(0);
  const numPages = Math.ceil(marketList.length / 24);
  return (
    <div>
      <StoreNavigation
        marketList={marketList}
        setMarketList={setMarketList}
        setPage={setPage}
      />
      <ProductList
        marketList={marketList}
        page={page}
        setProduct={setProduct}
      />
      <Pagination numPages={numPages} page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}
