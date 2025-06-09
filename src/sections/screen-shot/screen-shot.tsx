import { GamePlayScreenShot } from "./game-play-screen-shot";
import { Reclaim } from "./reclaim";
import { YourFarmStartHere } from "./your-farm-start-here";
import { CharactersV2 } from "./characters_v2/characters";

export const ScreenShot = () => {
  return (
    <section
      // className="relative aspect-[3/10] w-full"
      className="relative aspect-[2/5] w-ful top-[2%]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <GamePlayScreenShot />
      <Reclaim />
      <YourFarmStartHere />

      <CharactersV2 />
    </section>
  );
};
