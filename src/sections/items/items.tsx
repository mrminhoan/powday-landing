import PresaleCard from "../presale/presale";

export const Items = () => {
  return (
    <div
      className="relative aspect-[4/6] w-full top-0"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src="/images/img_items.png"
        alt="claim-here"
        className="absolute w-[70%] top-[3%]   left-1/2 -translate-x-1/2"
        loading="lazy"
      />
    </div>
  );
};
