import MobileNavbar from "../navbar/mobileNavbar";
import DesktopNavbar from "../navbar/desktopNavbar";
import { LogIn } from "lucide-react";

const menuItems = [
  {
    title: "GAMES",
    groups: [
      {
        title: "POWDAY: ATIA’S LEGACY",
        children: [
          {
            title: "POWDAY: ATIA’S LEGACY",
            icon: (
              <img
                src="/images/img_bg1_char.png"
                alt="atia"
                className="w-6 h-6"
              />
            ),
            href: "/atia",
            // tag: "PRE-REGISTER",
          },
          {
            title: "POWDAY: ORIGINS",
            icon: (
              <img
                src="/images/img_bg1_char.png"
                alt="origins"
                className="w-6 h-6"
              />
            ),
            href: "/origins",
          },
          {
            title: "POWDAY: CLASSIC",
            icon: null,
            href: "/classic",
          },
        ],
      },
    ],
  },
  {
    title: "SOCIAL",
    groups: [
      {
        title: "COMMUNITY",
        children: [
          { title: "Twitter", icon: null, href: "/twitter" },
          { title: "Discord", icon: null, href: "/discord" },
          { title: "Youtube", icon: null, href: "/youtube" },
          { title: "Tiktok", icon: null, href: "/tiktok" },
        ],
      },
      {
        title: "SUPPORTS",
        children: [
          { title: "COMMUNITY SUPPORT", icon: null, href: "/twitter" },
          { title: "POWDAY WIKI", icon: null, href: "/discord" },
        ],
      },
      {
        title: "NEWS",
        children: [{ title: "BLOGS", icon: null, href: "/twitter" }],
      },
    ],
  },
  {
    title: "MORE",
    children: [
      {
        title: "WHITEPAPAER",
        icon: (
          <img src="/images/img_bg1_char.png" alt="atia" className="w-6 h-6" />
        ),
        href: "https://the-powday.gitbook.io/the-powday",
      },
      {
        title: "CODE OF CONDUCT",
        icon: (
          <img
            src="/images/img_bg1_char.png"
            alt="origins"
            className="w-6 h-6"
          />
        ),
        href: "/origins",
      },
      {
        title: "PRIVACY POLICY",
        icon: (
          <img src="/images/img_bg1_char.png" alt="atia" className="w-6 h-6" />
        ),
        href: "/classic",
      },
    ],
  },
];

export const Header = () => {
  return (
    <>
      <div className=" flex items-center px-10 py-3 bg-[#ffffff] bg-opacity-90 justify-between fixed top-0 left-0 right-0 z-50 text-[#00aae1]">
        <div className="min-[1000px]:flex items-center justify-between gap-4 w-full hidden ">
          {/* <img src="/images/Logo.png" alt="logo" className="w-[6rem] " /> */}
          <DesktopNavbar menuItems={menuItems} />
          <p className="font-bold text-lg cursor-pointer hover:text-gray-500 ">
            LOG IN
          </p>
        </div>

        <div className="flex items-center gap-4 min-[1000px]:hidden justify-end w-full">
          {/* <img src="/images/Logo.png" alt="logo" className="w-[14%]" /> */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg cursor-pointer hover:text-gray-500">
              LOG IN
            </p>
            <MobileNavbar menuItems={menuItems} />
          </div>
        </div>
      </div>
    </>
  );
};
