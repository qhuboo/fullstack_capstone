import StoreNavigation from "../components/StoreNavigation";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";

export default function AdminPage({ cart, setCart }) {
  const { user, setUser } = useContext(UserContext);
  const [usersButton, setUsersButton] = useState(true);
  const [gamesButton, setGamesButton] = useState(false);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function getUsers(email) {
      if (!user || !user.accessToken) {
        // Exit the function if user or its accessToken doesn't exist
        return;
      }
      const response = await fetch("http://localhost:3000/api/users/", {
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
  }, [user]);
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
                {usersList.map((person) => (
                  <li
                    key={person.email}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-24 w-24 flex-none rounded-full bg-gray-50"
                        src="../src/assets/user.png"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {person.email}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        {person.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
