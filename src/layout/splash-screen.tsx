import { LoadingText } from "../components/loading/loading";
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [hideScreen, setHideScreen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const slideTimer = setTimeout(() => {
      setHideScreen(true);
      setTimeout(onFinish, 1500);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(slideTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[url('/images/bg_1.png')] bg-cover flex flex-col justify-center items-center transition-transform duration-[1500ms] ease-in-out ${
        hideScreen ? "translate-x-full" : ""
      }`}
    >
      <img
        src="/images/Logo.png"
        alt="Game Logo"
        className={`mb-10 transition-opacity duration-500 w-[90%] sm:w-[60%] ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <LoadingText />
      </div>
    </div>
  );
};

export default SplashScreen;
