import { Link } from "react-router-dom";
import StoreNavigation from "../components/StoreNavigation";
import Footer from "../components/Footer";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { CartChangeContext } from "../CartChangeContext";

export default function Shopping_Cart({
  cart,
  setCart,
  marketList,
  setProduct,
}) {
  const { user, setUser } = useContext(UserContext);
  const { cartChange, setCartChange } = useContext(CartChangeContext);

  const handleCartProductClick = (event) => {
    async function fetchGameScreenshots(game_id) {
      const response = await fetch(
        `http://localhost:3000/api/games/game/${game_id}`
      );
      const data = await response.json();
      setProduct(data);
    }
    async function getGameByTitle(game_title) {
      const response = await fetch(
        `http://localhost:3000/api/games/game/title/${game_title}`
      );
      const data = await response.json();
      fetchGameScreenshots(data[0].game_id);
    }
    getGameByTitle(event.target.textContent);
  };

  const handleRemoveFromCart = (event) => {
    const cart_item_id = event.target.getAttribute("cart-item-id");
    async function deleteCartItem(cartItemId) {
      const response = await fetch(
        "http://localhost:3000/api/users/user/cart/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({ cartItemId: cartItemId }),
        }
      );
      const data = await response.json();
      console.log(data);
    }
    deleteCartItem(cart_item_id);
    setCartChange((prevCartChange) => {
      return prevCartChange + 1;
    });
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
              <div
                key={product.cart_item_id}
                className="flex py-6 items-center"
              >
                <div className="w-36 h-36 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.sample_cover_image}
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
                      cart-item-id={product.cart_item_id}
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
