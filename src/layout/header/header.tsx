import DesktopNavbar from "../navbar/desktopNavbar";

export const Header = () => {
  return (
    <div className="flex  items-center px-10 py-4 bg-[#ffffff] bg-opacity-80 justify-between">
      <img src="/images/Logo.png" alt="logo" className="w-[6rem] " />
      <DesktopNavbar />

      <p>LOG IN</p>
    </div>
  );
};
