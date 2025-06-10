import { ChevronDown } from "lucide-react";

const DropdownItem = ({ icon, title, href, tag, target = "" }: any) => (
  <a
    href={href}
    className="flex items-center gap-3 hover:bg-gray-100 px-2 py-1 rounded"
    target={target}
  >
    {icon}
    <span className="text-[100%] font-medium">{title}</span>
    {tag && (
      <span className="bg-orange-400 text-white text-[90%] px-2 py-0.5 rounded ml-auto">
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
            <div className="font-bold uppercase border-b pb-2 text-[100%]">
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

const Navbar = (props: any) => {
  const { menuItems } = props;
  return (
    <nav className="px-6 py-2 flex gap-8 relative z-40 flex-1 flex-row justify-center">
      {menuItems?.map((item: any, index) => (
        <div className="relative group flex items-center gap-2" key={index}>
          <button className="text-[120%] font-semibold uppercase">
            {item.title}
          </button>
          {(item?.children?.length > 0 || item?.groups?.length > 0) && (
            <div className="group-hover:rotate-180 transition-transform duration-200">
              <ChevronDown className="w-5 h-5" />
            </div>
          )}

          {(item.children || item.groups) && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[300px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 border-2 border-gray-200">
              <DropdownContent item={item} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
