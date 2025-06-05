interface IProps {
  image: string;
}
export const CharactersDesc = (props: IProps) => {
  const { image } = props;
  return (
    <div className="w-[70%]">
      <img
        src={image}
        alt="character"
        //   className="w-[41%] min-[400px]:w-[40%] min-[500px]:w-[37%] sm:w-[42%] lg:w-[50%]
        // transition-all duration-500 ease-in-out opacity-100"
        className="w-[100%]"
        loading="lazy"
      />
    </div>
  );
};
