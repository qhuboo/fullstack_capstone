import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import Shopping_Cart from "./pages/Shopping_Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Sign_In from "./pages/Sign_In";
import { useEffect, useState } from "react";
import game_data from "./data/game_data";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  });

  const [marketList, setMarketList] = useState(game_data);
  const [cart, setCart] = useState([
    {
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
    },
    {
      description:
        "<p>A young boy named Link was raised in the village of the elf-like Kokiri people. One day a fairy named Navi introduces him to the village's guardian, the Great Deku Tree. It appears that a mysterious man has cursed the tree, and Link is sent to the Hyrule Castle to find out more. Princess Zelda tells Link that Ganondorf, the leader of the Gerudo tribe, seeks to obtain the Triforce, a holy relic that grants immense power to the one who possesses it. Link must do everything in his power to obtain the Triforce before Ganondorf does, and save Hyrule.</p>\n<p><em>Ocarina of Time</em> is the first 3D installment of the Legend of Zelda series. Like most of its predecessors, it is an action game with puzzle-solving and light role-playing elements. Gameplay is similar to the previous games, allowing Link to explore the world and complete dungeons to obtain key items and advance the plot. Sword combat as well as many familiar items such as boomerang, bombs, the series' currency (rupees) of various values, heart containers, and their collectible fragments permanently increasing Link's health, etc., return in this installment. Link can now lock on enemies for melee and ranged combat, actively use a shield to deflect projectiles, as well as use various magic items. Dungeon exploration is somewhat more puzzle-oriented than in earlier games. Link can climb certain surfaces, dive underwater, as well as automatically jump.</p>\n<p>The game begins with the player controlling the child Link, but later on, an adult Link becomes a playable character as well. Each of them has certain unique abilities: for example, only adult Link can use a bow and arrows, but only the child Link can crawl through narrow spaces. During the course of the game, the player obtains the Ocarina of Time. Learning and playing melodies on that ocarina is needed to advance the plot, complete certain side quests, or travel in time, switching between the two versions of Link. It is also possible to befriend and ride a horse named Epona to facilitate travel between areas.</p>",
      game_id: 3549,
      moby_score: 8.7,
      platforms: [
        {
          first_release_date: "1998",
          platform_id: 9,
          platform_name: "Nintendo 64",
        },
        {
          first_release_date: "2007-02-26",
          platform_id: 82,
          platform_name: "Wii",
        },
        {
          first_release_date: "2015-07-02",
          platform_id: 132,
          platform_name: "Wii U",
        },
        {
          first_release_date: "2021-10-25",
          platform_id: 203,
          platform_name: "Nintendo Switch",
        },
      ],
      sample_cover: {
        height: 800,
        image:
          "https://cdn.mobygames.com/covers/4756691-the-legend-of-zelda-ocarina-of-time-nintendo-64-front-cover.jpg",
        platforms: ["Nintendo 64"],
        thumbnail_image:
          "https://cdn.mobygames.com/d4e20cc8-abbf-11ed-8048-02420a000198.webp",
        width: 1145,
      },
      sample_screenshots: [
        {
          caption: "Kokiri's village, the game's first area",
          height: 240,
          image:
            "https://cdn.mobygames.com/screenshots/1604755-the-legend-of-zelda-ocarina-of-time-nintendo-64-kokiris-village-.jpg",
          thumbnail_image:
            "https://cdn.mobygames.com/9a5878ba-ab76-11ed-9d05-02420a000198.webp",
          width: 320,
        },
        {
          caption: "Shopping",
          height: 240,
          image:
            "https://cdn.mobygames.com/screenshots/15709894-the-legend-of-zelda-ocarina-of-time-nintendo-64-shopping.png",
          thumbnail_image:
            "https://cdn.mobygames.com/049ff55e-becd-11ed-9c42-02420a000140.webp",
          width: 320,
        },
        {
          caption: "Link has a special attraction for chicks",
          height: 240,
          image:
            "https://cdn.mobygames.com/screenshots/15709783-the-legend-of-zelda-ocarina-of-time-nintendo-64-link-has-a-speci.png",
          thumbnail_image:
            "https://cdn.mobygames.com/fb2d8248-becc-11ed-9c42-02420a000140.webp",
          width: 320,
        },
        {
          caption: "Title screen",
          height: 476,
          image:
            "https://cdn.mobygames.com/screenshots/16332738-the-legend-of-zelda-ocarina-of-time-wii-title-screen.png",
          thumbnail_image:
            "https://cdn.mobygames.com/f8782262-c1f9-11ed-ab6b-02420a000194.webp",
          width: 848,
        },
        {
          caption: "Ladder. Leaving your house",
          height: 240,
          image:
            "https://cdn.mobygames.com/screenshots/9880237-the-legend-of-zelda-ocarina-of-time-nintendo-64-ladder-leaving-y.jpg",
          thumbnail_image:
            "https://cdn.mobygames.com/02856972-ac0b-11ed-b83f-02420a000135.webp",
          width: 320,
        },
      ],
      title: "The Legend of Zelda: Ocarina of Time",
      price: "57.08",
    },
  ]);
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
        <Route path="/" element={<MainPage cart={cart} setCart={setCart} />} />
        <Route
          path="/marketplace"
          element={
            <MarketPlace
              marketList={marketList}
              setMarketList={setMarketList}
              setProduct={setProduct}
              cart={cart}
              setCart={setCart}
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
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/product"
          element={
            <ProductPage product={product} cart={cart} setCart={setCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
