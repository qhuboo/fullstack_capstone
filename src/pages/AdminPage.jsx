import StoreNavigation from "../components/StoreNavigation";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default function AdminPage({
  cart,
  setCart,
  currentGameEdit,
  setCurrentGameEdit,
}) {
  const { user, setUser } = useContext(UserContext);
  const [usersButton, setUsersButton] = useState(true);
  const [gamesButton, setGamesButton] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [adminChange, setAdminChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/games/`);
      const data = await response.json();
      setGamesList(data);
    };
    fetchData();
  }, []);

  function handleGameClick(game_id) {
    setCurrentGameEdit(game_id);
  }

  async function handleAdmin(event) {
    const response = await fetch(`${apiUrl}/api/users/user/admin/change`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: event.target.id }),
    });
    setAdminChange((n) => n + 1);
  }

  useEffect(() => {
    async function getUsers(email) {
      if (!user || !user.accessToken) {
        // Exit the function if user or its accessToken doesn't exist
        return;
      }
      const response = await fetch(`${apiUrl}/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({ email: email }),
      });
      const userData = await response.json();
      setUsersList(userData);
    }
    getUsers(user.email);
  }, [user, adminChange]);
  return (
    <div>
      <StoreNavigation cart={cart} setCart={setCart} />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <button
            onClick={() => {
              setUsersButton(true);
              setGamesButton(false);
            }}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Users
          </button>
          <button
            onClick={() => {
              setUsersButton(false);
              setGamesButton(true);
            }}
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Games
          </button>
          <br />
          <br />
          <br />
          {usersButton && (
            <div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                All Users
              </p>
              <br />
              <br />
              <ul role="list" className="divide-y divide-gray-100">
                {/* This is the users list */}
                {/* ******************************************************************************************
                 ******************************************************************************************
                 ****************************************************************************************** */}
                {usersList.map((person) => (
                  <li
                    key={person.email}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-24 w-24 flex-none rounded-full bg-gray-50"
                        src="/assets/user.png"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {person.email}
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          Admin: {person.admin.toString()}
                        </p>
                        {!person.admin && (
                          <button
                            id={person.email}
                            onClick={handleAdmin}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Make Admin
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* This is the games list */}
          {/* ******************************************************************************************
           ******************************************************************************************
           ****************************************************************************************** */}
          {gamesButton && (
            <div className="bg-white">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                All Games
              </p>
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {gamesButton &&
                    gamesList &&
                    gamesList.map((game) => (
                      <Link
                        to="/edit"
                        key={game.game_id}
                        className="group"
                        onClick={() => {
                          handleGameClick(game.game_id);
                        }}
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={game.sample_cover_image}
                            alt={game.description}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">
                          {game.title}
                        </h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">
                          ${game.price}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
