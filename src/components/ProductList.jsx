import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const apiUrl = import.meta.env.VITE_API_URL;

export default function ProductList({ marketList, page, setProduct }) {
  const { user, setUser } = useContext(UserContext);
  // The marketList prop is the current category of games which should be displayed in the marketplace
  // The page prop is the current [index] of the pages array that should be displayed in the marketplace
  // The setProduct prop is used to set the current product that should be diplayed in the product page
  // *********************************************************************************
  // Creates pages by slicing the marketList array into smaller arrays of length 24
  let pages = [];
  for (let i = 0; i < marketList.length; i += 24) {
    pages.push(marketList.slice(i, i + 24));
  }
  // When someone clicks the picture of a game in the marketplace the handle function finds the game object from which
  // the image source came from and then calls the fetchGameScreenshots function using the game_id to get an array of screenshots
  // along the rest of the information needed
  async function fetchGameScreenshots(game_id) {
    const response = await fetch(`${apiUrl}/api/games/game/${game_id}`);
    const data = await response.json();
    setProduct(data);
  }
  const handleProductClick = (event) => {
    for (let i = 0; i < marketList.length; i++) {
      if (marketList[i].sample_cover_image == event.target.src) {
        fetchGameScreenshots(marketList[i].game_id);
      }
    }
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pages[page] &&
            pages[page].map((game) => (
              <Link
                to="/product"
                key={game.game_id}
                className="group"
                onClick={handleProductClick}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={game.sample_cover_image}
                    alt={game.description}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{game.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${game.price}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
