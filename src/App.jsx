import "./App.css";
import Sign_IN from "./Components/Sign_In";
import Shopping_Cart from "./Components/Shopping_Cart";
import CheckoutPage from "./Components/CheckoutPage";

function App() {
  return (
    // <Shopping_Cart />
    <CheckoutPage/>
    // <Router>
    //   <Switch>
    //     <Route path="/checkout" component={CheckoutPage} />
    //     <Route path="/" component={Shopping_Cart} />
    //   </Switch>
    // </Router>
  );
}

export default App;
