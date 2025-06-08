import { Items } from "./sections/items/items";
import { GameFlow } from "./sections/game-flow/game-flow";
import { ScreenShot } from "./sections/screen-shot/screen-shot";
import { Top } from "./sections/top/top";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Header } from "./layout/header/header";
import Footer from "./layout/footer/footer";
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
      <div className="bg-[url('/images/bg_landing_full.png')] bg-cover bg-top min-h-screen w-vw relative">
        {/* <MobileNavbar /> */}
        <Header />
        <Top />
        <ScreenShot />
        {/* <GameFlow />
        <Items />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
