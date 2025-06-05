import React from "react";

const menuItems = [
  {
    title: "GAMES",
    groups: [
      {
        title: "AXIE INFINITY: ATIA’S LEGACY",
        children: [
          {
            title: "AXIE INFINITY: ATIA’S LEGACY",
            icon: (
              <img
                src="/images/img_bg1_char.png"
                alt="atia"
                className="w-6 h-6"
              />
            ),
            href: "/atia",
            tag: "PRE-REGISTER",
          },
          {
            title: "AXIE INFINITY: ORIGINS",
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
            title: "AXIE INFINITY: CLASSIC",
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
        href: "/atia",
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

const DropdownItem = ({ icon, title, href, tag }: any) => (
  <a
    href={href}
    className="flex items-center gap-3 hover:bg-gray-100 px-2 py-1 rounded"
  >
    {icon}
    <span className="text-sm font-medium">{title}</span>
    {tag && (
      <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded ml-auto">
        {tag}
      </span>
    )}
  </a>
);

const DropdownContent = ({ item }: any) => {
  if (item.children) {
    return (
      <div className="space-y-2">
        {item.children.map((child: any, idx: number) => (
          <DropdownItem key={idx} {...child} />
        ))}
      </div>
    );
  }

  if (item.groups) {
    return (
      <div className="space-y-4">
        {item.groups.map((group: any, gIdx: number) => (
          <div key={gIdx}>
            <div className="text-gray-500 font-bold uppercase border-b pb-2 text-sm">
              {group.title}
            </div>
            <div className="space-y-2 mt-2">
              {group.children.map((child: any, idx: number) => (
                <DropdownItem key={idx} {...child} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const Navbar = () => {
  return (
    <nav className="text-black px-6 py-4 flex gap-8 relative z-40">
      {menuItems?.map((item: any, index) => (
        <div className="relative group" key={index}>
          <button className="text-lg font-semibold uppercase">
            {item.title}
          </button>

          {(item.children || item.groups) && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg p-4 min-w-[300px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 border-2 border-gray-200">
              <DropdownContent item={item} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
