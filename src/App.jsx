import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import Shopping_Cart from "./pages/Shopping_Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";
import { useEffect, useState, useMemo } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState({});
  const [marketList, setMarketList] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([
    {
      game_id: 276,
      description:
        "Based upon the Pod Racing scenes of Star Wars: Episode I - The Phantom Menace, your mission as young Anakin Skywalker or as one of a collection of strange characters from around the Galaxy is to compete, survive and win in the high speed challenge of Pod Racing.\nEach character has a unique Pod that can be upgraded with the credits you win after each race. Finish first to gain the most prestige and compete in greater and more challenging tracks, including the now famous race along the sand dunes of Tatooine that determined the destiny of many lives.",
      title: "Star Wars: Episode I - Racer",
      price: "61.08",
      sample_cover_image:
        "https://cdn.mobygames.com/covers/4034634-star-wars-episode-i-racer-windows-front-cover.jpg",
      caption: "Pick a pod. And no I will not make all the titles rhyme.",
      image:
        "https://cdn.mobygames.com/screenshots/4170929-star-wars-episode-i-racer-windows-pick-a-pod-and-no-i-will-not-m.png",
    },
    {
      game_id: 276,
      description:
        "Based upon the Pod Racing scenes of Star Wars: Episode I - The Phantom Menace, your mission as young Anakin Skywalker or as one of a collection of strange characters from around the Galaxy is to compete, survive and win in the high speed challenge of Pod Racing.\nEach character has a unique Pod that can be upgraded with the credits you win after each race. Finish first to gain the most prestige and compete in greater and more challenging tracks, including the now famous race along the sand dunes of Tatooine that determined the destiny of many lives.",
      title: "Star Wars: Episode I - Racer",
      price: "61.08",
      sample_cover_image:
        "https://cdn.mobygames.com/covers/4034634-star-wars-episode-i-racer-windows-front-cover.jpg",
      caption:
        "They come in here they look around, they no buy. Why nobody buy ?",
      image:
        "https://cdn.mobygames.com/screenshots/10864635-star-wars-episode-i-racer-windows-they-come-in-here-they-look-ar.png",
    },
    {
      game_id: 276,
      description:
        "Based upon the Pod Racing scenes of Star Wars: Episode I - The Phantom Menace, your mission as young Anakin Skywalker or as one of a collection of strange characters from around the Galaxy is to compete, survive and win in the high speed challenge of Pod Racing.\nEach character has a unique Pod that can be upgraded with the credits you win after each race. Finish first to gain the most prestige and compete in greater and more challenging tracks, including the now famous race along the sand dunes of Tatooine that determined the destiny of many lives.",
      title: "Star Wars: Episode I - Racer",
      price: "61.08",
      sample_cover_image:
        "https://cdn.mobygames.com/covers/4034634-star-wars-episode-i-racer-windows-front-cover.jpg",
      caption: "Tatooine Finish",
      image:
        "https://cdn.mobygames.com/screenshots/10418988-star-wars-episode-i-racer-dreamcast-tatooine-finish.jpg",
    },
    {
      game_id: 276,
      description:
        "Based upon the Pod Racing scenes of Star Wars: Episode I - The Phantom Menace, your mission as young Anakin Skywalker or as one of a collection of strange characters from around the Galaxy is to compete, survive and win in the high speed challenge of Pod Racing.\nEach character has a unique Pod that can be upgraded with the credits you win after each race. Finish first to gain the most prestige and compete in greater and more challenging tracks, including the now famous race along the sand dunes of Tatooine that determined the destiny of many lives.",
      title: "Star Wars: Episode I - Racer",
      price: "61.08",
      sample_cover_image:
        "https://cdn.mobygames.com/covers/4034634-star-wars-episode-i-racer-windows-front-cover.jpg",
      caption: "Snow tunnel",
      image:
        "https://cdn.mobygames.com/screenshots/10869612-star-wars-episode-i-racer-windows-snow-tunnel.png",
    },
    {
      game_id: 276,
      description:
        "Based upon the Pod Racing scenes of Star Wars: Episode I - The Phantom Menace, your mission as young Anakin Skywalker or as one of a collection of strange characters from around the Galaxy is to compete, survive and win in the high speed challenge of Pod Racing.\nEach character has a unique Pod that can be upgraded with the credits you win after each race. Finish first to gain the most prestige and compete in greater and more challenging tracks, including the now famous race along the sand dunes of Tatooine that determined the destiny of many lives.",
      title: "Star Wars: Episode I - Racer",
      price: "61.08",
      sample_cover_image:
        "https://cdn.mobygames.com/covers/4034634-star-wars-episode-i-racer-windows-front-cover.jpg",
      caption: "Fire Mountain - Racing a Lava Cave",
      image:
        "https://cdn.mobygames.com/screenshots/3612474-star-wars-episode-i-racer-windows-fire-mountain-racing-a-lava-ca.jpg",
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userLocalStorage = JSON.parse(localStorage.getItem("user"));
      setUser(userLocalStorage);
    }
  }, []);

  useEffect(() => {
    async function getCart(email) {
      const response = await fetch(
        "http://localhost:3000/api/users/user/cart/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email }),
        }
      );
      const cartItems = await response.json();
      setCart(cartItems);
    }
    if (localStorage.getItem("user")) {
      const userLocalStorage = JSON.parse(localStorage.getItem("user"));
      getCart(userLocalStorage.email);
    }
  }, [user]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <UserContext.Provider value={value}>
        <Routes>
          <Route
            path="/"
            element={<MainPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/marketplace"
            element={
              <MarketPlace
                marketList={marketList}
                setMarketList={setMarketList}
                setProduct={setProduct}
                cart={cart}
              />
            }
          />
          <Route path="/sign-in" element={<Sign_In />} />
          <Route
            path="/cart"
            element={
              <Shopping_Cart
                cart={cart}
                setCart={setCart}
                marketList={marketList}
                setProduct={setProduct}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route
            path="/product"
            element={<ProductPage product={product} cart={cart} />}
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
