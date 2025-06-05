interface IProps {
  isSelected: boolean;
  onSelect: () => void;
  image: string;
}
export const CharactersSelectButton = (props: IProps) => {
  const { isSelected, onSelect, image } = props;
  return (
    <div className="relative" onClick={onSelect}>
      {isSelected ? (
        <>
          <img
            src="/images/char_tab_select.png"
            alt="character"
            className="w-[25vw] max-w-none"
            loading="lazy"
          />
          <img
            src={image}
            alt="character"
            className="absolute top-[1%] right-[2%] w-[77%]"
            loading="lazy"
          />
        </>
      ) : (
        <>
          <img
            src="/images/char_tab.png"
            alt="character"
            className="w-[22.5vw]"
            loading="lazy"
          />
          <img
            src={image}
            alt="character"
            className="absolute top-[0] right-[2%] w-[85%]"
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};
