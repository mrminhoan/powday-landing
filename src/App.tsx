import { Items } from "./sections/items/items";
import { GameFlow } from "./sections/game-flow/game-flow";
import { ScreenShot } from "./sections/screen-shot/screen-shot";
import { Top } from "./sections/top/top";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import MobileNavbar from "./layout/navbar/mobileNavbar";
import { Header } from "./layout/header/header";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      // duration: 600,
      // easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="w-full bg-black ">
      <div className=" bg-[url('/images/bg_landing_full.png')] bg-cover bg-top min-h-screen w-vw">
        {/* <MobileNavbar /> */}
        <Header />
        <Top />
        <ScreenShot />
        <GameFlow />
        <Items />
      </div>
    </div>
  );
}

export default App;
