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
      <MainPage />
      <MarketPlace />
      <ProductPage />
      <Shopping_Cart />
      <CheckoutPage />
      <Sign_In />
    </div>
  );
}

export default App;
