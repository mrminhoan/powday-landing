import { Farmer } from "./farmer";
import { Logan } from "./logan";
import { Logo } from "./logo";

export const Top = () => {
  return (
    <div
      className="relative top-0 left-0 aspect-[3/4.5] w-full"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Logo />

      <Logan />

      <Farmer />
    </div>
  );
};
