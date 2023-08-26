import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import Shopping_Cart from "./pages/Shopping_Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";
import { useState } from "react";
import game_data from "./data/game_data";

function App() {
  const [marketList, setMarketList] = useState(game_data);
  const [product, setProduct] = useState({
    description:
      '<p>As an extension of one of the most long-running television series of all time, <em>The X-Files</em>, play through the eyes of Special Agent Craig Willmore, a new FBI field investigator brought in to locate missing agents Fox Mulder and Dana Scully whose last location was the Everett, Washington, area. In this "movie quality" video production, characters are played by the actors and actresses from the show, including <a href="https://www.mobygames.com/person/9411/gillian-anderson/">Gillian Anderson</a> (Scully) and <a href="https://www.mobygames.com/person/9412/david-duchovny/">David Duchovny</a> (Mulder).</p>\n<p>As the game begins, you are given a briefing of your mission. Gather up all state-of-the-art spy tools (night vision goggles, a digital camera, PDA, lock picks, evidence kit, a standard issue revolver, handcuffs and badge) and then head out to follow their trail. As you explore the various locations, take photographs, pick up pieces of evidence and talk with people. Use your Newton PDA to access the navigational map, to make notes and send/receive e-mail. Trace telephone numbers, run background checks and license plate ids and even post an All Points Bulletin on missing persons using the computer network at your home or office. By using photo viewer software, download field photographs to the computer where they can be enlarged and studied more closely for clues.</p>\n<p>Features include emotion icons for interjecting different tones during conversations (mean, humorous or technical) which effect the answer given. An in-game hint system, Artificial Intelligence, can be set on or off. In addition, there are multiple endings as a direct result of actions you take.</p>',
    game_id: 1,
    moby_score: 7.1,
    platforms: [
      {
        first_release_date: "1998",
        platform_id: 3,
        platform_name: "Windows",
      },
      {
        first_release_date: "1999",
        platform_id: 6,
        platform_name: "PlayStation",
      },
      {
        first_release_date: "1998-06",
        platform_id: 74,
        platform_name: "Macintosh",
      },
    ],
    sample_cover: {
      height: 800,
      image:
        "https://cdn.mobygames.com/covers/4062982-the-x-files-game-windows-front-cover.jpg",
      platforms: ["Windows", "Macintosh"],
      thumbnail_image:
        "https://cdn.mobygames.com/872aed6c-aba4-11ed-a188-02420a00019a.webp",
      width: 690,
    },
    sample_screenshots: [
      {
        caption: "Outside FBI Field Office",
        height: 480,
        image:
          "https://cdn.mobygames.com/screenshots/11075560-the-x-files-game-windows-outside-fbi-field-office.jpg",
        thumbnail_image:
          "https://cdn.mobygames.com/991435f8-ac15-11ed-81c5-02420a00012f.webp",
        width: 640,
      },
      {
        caption: "Main menu",
        height: 480,
        image:
          "https://cdn.mobygames.com/screenshots/11076037-the-x-files-game-windows-main-menu.jpg",
        thumbnail_image:
          "https://cdn.mobygames.com/9981e58a-ac15-11ed-b075-02420a00012f.webp",
        width: 640,
      },
      {
        caption: "Missing agents case file",
        height: 480,
        image:
          "https://cdn.mobygames.com/screenshots/11075557-the-x-files-game-windows-missing-agents-case-file.jpg",
        thumbnail_image:
          "https://cdn.mobygames.com/98ed4344-ac15-11ed-81c5-02420a00012f.webp",
        width: 640,
      },
      {
        caption: "You own a nokia mobile phone.",
        height: 480,
        image:
          "https://cdn.mobygames.com/screenshots/11075551-the-x-files-game-windows-you-own-a-nokia-mobile-phone.jpg",
        thumbnail_image:
          "https://cdn.mobygames.com/988f5a90-ac15-11ed-81c5-02420a00012f.webp",
        width: 640,
      },
      {
        caption: "Craig Willmore",
        height: 480,
        image:
          "https://cdn.mobygames.com/screenshots/11076735-the-x-files-game-windows-craig-willmore.jpg",
        thumbnail_image:
          "https://cdn.mobygames.com/945dcd80-ac15-11ed-9899-02420a000134.webp",
        width: 640,
      },
    ],
    title: "The X-Files Game",
    price: "90.63",
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/marketplace"
          element={
            <MarketPlace
              marketList={marketList}
              setMarketList={setMarketList}
              setProduct={setProduct}
            />
          }
        />
        <Route path="/sign-in" element={<Sign_In />} />
        <Route path="/cart" element={<Shopping_Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<ProductPage product={product} />} />
      </Routes>
    </div>
  );
}

export default App;
