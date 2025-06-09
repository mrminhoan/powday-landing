import { useState, useEffect, useCallback } from "react";
import { CharactersDesc } from "./characters-desc";
import { CharactersSelectButton } from "./characters-select-button";

const characters = [
  {
    id: 1,
    imageCharacter: "/images/char_tab_Blacksmith.png",
    imageDesc: "/images/img_Blacksmith.png",
    isSelected: true,
  },
  {
    id: 2,
    imageCharacter: "/images/char_tab_Farmer.png",
    imageDesc: "/images/img_Farmer.png",
    isSelected: false,
  },
  {
    id: 3,
    imageCharacter: "/images/char_tab_Fisherman.png",
    imageDesc: "/images/img_Fisherman.png",
    isSelected: false,
  },
  {
    id: 4,
    imageCharacter: "/images/char_tab_Tailor.png",
    imageDesc: "/images/img_Tailor.png",
    isSelected: false,
  },
  {
    id: 5,
    imageCharacter: "/images/char_tab_Professor.png",
    imageDesc: "/images/img_Professor.png",
    isSelected: false,
  },
];

export const CharactersV2 = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const selectNextCharacter = useCallback(() => {
    setSelectedId((currentId) => {
      if (!currentId) return 1;
      return currentId >= characters.length ? 1 : currentId + 1;
    });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(selectNextCharacter, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, selectNextCharacter]);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div
      // className="absolute bottom-[10%] aspect-[3/1] w-full bg-red-500"
      className="absolute bottom-[6%] [@media(min-width:500px)]:bottom-[6%] w-full"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="w-[90%] mx-auto  flex justify-between pt-[10%]">
        <CharactersDesc
          image={
            characters.find((character) => character.id === selectedId)
              ?.imageDesc
          }
        />
        <div className="w-fit flex flex-col items-end gap-[2%]">
          {characters.map((character) => (
            <CharactersSelectButton
              key={character.id}
              isSelected={selectedId === character.id}
              onSelect={() => handleSelect(character.id)}
              image={character.imageCharacter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
