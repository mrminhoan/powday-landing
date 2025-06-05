interface IProps {
  isSelected: boolean;
  onSelect: () => void;
  src: string;
}

export const Characters = (props: IProps) => {
  const { isSelected, onSelect, src } = props;
  return (
    <>
      {isSelected ? (
        <div className="relative items-end" onClick={onSelect}>
          <img
            src="/images/char_tab_select.png"
            alt="character"
            className="w-[20vw] max-w-none min-[400px]:w-[20vw]  min-[500px]:w-[18vw] sm:w-[23vw] min-[1024px]:w-[21vw]"
          />

          <img
            src={src}
            alt="character"
            className="absolute top-0 right-0 w-[16vw] min-[400px]:w-[16vw] min-[500px]:w-[14.5vw] sm:w-[18vw] min-[1024px]:w-[17vw]"
          />
        </div>
      ) : (
        <div className=" relative items-end" onClick={onSelect}>
          <img
            src="/images/char_tab.png"
            alt="character"
            className="w-[18vw] min-[400px]:w-[18vw] min-[500px]:w-[16vw] sm:w-[20.8vw] min-[1024px]:w-[19.1vw]"
          />

          <img
            src={src}
            alt="character"
            className="absolute top-0 right-0 w-[90%]"
          />
        </div>
      )}
    </>
  );
};
