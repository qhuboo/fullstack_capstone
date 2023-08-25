import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import Shopping_Cart from "./pages/Shopping_Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/sign-in" element={<Sign_In />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Shopping_Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
