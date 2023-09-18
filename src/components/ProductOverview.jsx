import { useContext, useState } from "react";
import SignInModal from "./SignInModal";
import { UserContext } from "../UserContext";

export default function ProductOverview({ product }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const handleAddToCart = (event) => {
    event.preventDefault();
    async function getGameByTitle(game_title) {
      const response = await fetch(
        `http://localhost:3000/api/games/game/title/${game_title}`
      );
      const data = await response.json();
      const newCartItem = {
        email: user.email,
        game_id: data[0].game_id,
        title: data[0].title,
        description: data[0].description,
        price: data[0].price,
        sample_cover_image: data[0].sample_cover_image,
      };
      const anotherResponse = await fetch(
        "http://localhost:3000/api/users/user/cart/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCartItem),
        }
      );
      const userLocalStorage = JSON.parse(localStorage.getItem("user"));
      setUser(userLocalStorage);
    }
    if (user.email) {
      getGameByTitle(product[0].title);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product[0].image}
              alt={product[0].caption}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product[1].image}
                alt={product[1].caption}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product[2].image}
                alt={product[2].caption}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product[3].image}
              alt={product[3].caption}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product[0].title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product[0].price}
            </p>
            <div className="mt-6">
              <div className="flex items-center"></div>
            </div>
            <form className="mt-10">
              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Pop up modal that signals to sign in if the user wants to add items
        to the cart */}
        <SignInModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h2 className="">Please sign in to add items to the cart</h2>
        </SignInModal>
      </div>
    </div>
  );
}
