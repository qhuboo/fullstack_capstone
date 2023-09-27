import { useEffect, useState } from "react";
import StoreNavigation from "../components/StoreNavigation";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default function EditGamePage({
  cart,
  setCart,
  currentGameEdit,
  setCurrentGameEdit,
}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [currentGame, setCurrentGame] = useState([]);

  useEffect(() => {
    async function getGame(game_id) {
      const response = await fetch(`${apiUrl}/api/games/game/title/${game_id}`);
      const game_data = await response.json();
      setCurrentGame(game_data[0]);
      setTitle(game_data[0].title);
      setPrice(game_data[0].price);
      setDescription(game_data[0].description);
    }
    getGame(currentGameEdit);
  }, []);

  async function handleDeleteGame() {
    const response = await fetch(
      `${apiUrl}/api/games/game/delete/${currentGameEdit}`,
      { method: "DELETE" }
    );
  }
  async function handleEditGame(event) {
    const response = await fetch(
      `${apiUrl}/api/games/game/update/${currentGameEdit}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, description }),
      }
    );
  }
  return (
    <div>
      <StoreNavigation cart={cart} setCart={setCart} />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Game Edit/Delete Form : {currentGame.title}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          value={title}
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder={currentGame.title}
                        />
                      </div>
                    </div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          value={price}
                          onChange={(event) => {
                            setPrice(event.target.value);
                          }}
                          type="number"
                          name="price"
                          id="price"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder={currentGame.price}
                          pattern="^\d*(\.\d{0,2})?$"
                          min="0"
                          step="0.01"
                          title="Please enter a numeric value with up to 2 decimal places."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="Description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Game Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        value={description}
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                        placeholder={currentGame.description}
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link to="/admin">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
              </Link>

              <Link to="/admin">
                <button
                  type="button"
                  onClick={handleDeleteGame}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Delete Game
                </button>
              </Link>
              <Link to="/admin">
                <button
                  type="button"
                  onClick={handleEditGame}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
