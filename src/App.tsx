import { Items } from "./sections/items/items";
import { GameFlow } from "./sections/game-flow/game-flow";
import { ScreenShot } from "./sections/screen-shot/screen-shot";
import { Top } from "./sections/top/top";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Header } from "./layout/header/header";
import Footer from "./layout/footer/footer";
import SplashScreen from "./layout/splash-screen";
import PresaleCard from "./sections/presale/presale";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div
      // className={`w-full bg-black transition-opacity duration-700 ${
      //   splashDone ? "opacity-100" : "opacity-0"
      // }`}
      >
        <div className="bg-[url('/images/bg_landing_full.png')] bg-cover bg-top min-h-screen aspect-[1/6] relative">
          <Header />
          <Top />
          <ScreenShot />
          <GameFlow />
          <Items />

          <div className="bg-primary py-10 px-5 flex items-center justify-end">
            <PresaleCard />
          </div>
          <Footer />
        </div>
      </div>

      {/* Splash screen luôn render đè lên, và tự slide ra sau 3s */}
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
    </>
  );
}

export default App;
