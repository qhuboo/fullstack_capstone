import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import Shopping_Cart from "./pages/Shopping_Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";
import { useState } from "react";
import game_data from "./data/game_data";

function App() {
  const [marketList, setMarketList] = useState(game_data);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/marketplace"
          element={<MarketPlace marketList={marketList} />}
        />
        <Route path="/sign-in" element={<Sign_In />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Shopping_Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
