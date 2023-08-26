import { Link } from "react-router-dom";
import StoreNavigation from "../components/StoreNavigation";
import Footer from "../components/Footer";

export default function Shopping_Cart({
  cart,
  setCart,
  marketList,
  setProduct,
}) {
  const handleCartProductClick = (event) => {
    for (let i = 0; i < marketList.length; i++) {
      if (marketList[i].title == event.target.textContent) {
        setProduct(marketList[i]);
      }
    }
  };

  const handleRemoveFromCart = (event) => {
    let removed = false; // flag to track if an item has been removed
    const newCart = cart.filter((game) => {
      if (game.game_id == event.target.getAttribute("game-id") && !removed) {
        removed = true; // set the flag to true since we're removing this instance
        return false; // don't include this game in the new array
      }
      return true; // include all other games
    });
    setCart(newCart);
  };

  return (
    <div>
      <StoreNavigation cart={cart} setCart={cart} />
      <div className="h-24"></div>
      <div className="min-h-screen bg-white">
        <header className="bg-white">
          <div className="max-w-6xl mx-auto py-07 px6 sm:px-6 lg:px-4">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Shopping Cart
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 divide-y divide-gray-200">
            {cart.map((product) => (
              <div key={product.game_id} className="flex py-6 items-center">
                <div className="w-36 h-36 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.sample_cover.image}
                    alt={product.description}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link to="/product" onClick={handleCartProductClick}>
                        {product.title}
                      </Link>
                    </h3>
                    <p>${product.price}</p>
                  </div>
                  <div className="flex justify-between items-end text-sm mt-2 text-gray-500">
                    <button
                      game-id={product.game_id}
                      onClick={handleRemoveFromCart}
                      type="button"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>
                $
                {parseFloat(
                  cart
                    .reduce(
                      (accumulatedPrice, currentGame) =>
                        accumulatedPrice + parseFloat(currentGame.price),
                      0
                    )
                    .toFixed(2)
                )}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                or{" "}
                <button
                  type="button"
                  className="text-orange-600 hover:text-indigo-500"
                >
                  <Link to="/marketplace">Continue Shopping &rarr;</Link>
                </button>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
