import Footer from "../components/Footer";
import StoreNavigation from "../components/StoreNavigation";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function MarketPlace({
  marketList,
  setMarketList,
  setProduct,
  cart,
  setCart,
}) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/games/available`);
      const data = await response.json();
      setMarketList(data);
    };
    fetchData();
  }, []);
  const [page, setPage] = useState(0);
  const numPages = Math.ceil(marketList.length / 24);
  return (
    <div>
      <StoreNavigation
        marketList={marketList}
        setMarketList={setMarketList}
        setPage={setPage}
        cart={cart}
        setCart={setCart}
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
