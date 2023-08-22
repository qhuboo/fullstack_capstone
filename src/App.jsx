import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";

function App() {
  return (
    <div>
      <MainPage />
      <MarketPlace />
      <ProductPage />
      <CheckoutPage />
      <Sign_In />
    </div>
  );
}

export default App;
