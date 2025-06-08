import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import clsx from "clsx";



const MobileNavbar = ({ menuItems }: any) => {
  // const { menuItems } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title));
  };

  return (
    <div className="relative z-50">
      {/* Hamburger icon */}
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(true)} className="px-4 py-2">
          <Menu size={20} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[100%] bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4">
          {/* <span className="text-xl font-bold">Menu</span> */}
          <img src={"/images/Logo.png"} alt="logo" className="w-[6rem]" />
          <button onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          {menuItems.map((item) => {
            const isExpanded = openAccordion === item.title;
            return (
              <>
                <div key={item.title} className="mb-2">
                  <button
                    className="w-full flex justify-between items-center py-2 font-semibold text-left"
                    onClick={() =>
                      (item.children || item.groups) &&
                      toggleAccordion(item.title)
                    }
                  >
                    {item.title}
                    {(item.children || item.groups) &&
                      (isExpanded ? <ChevronUp /> : <ChevronDown />)}
                  </button>

                  {item.children && (
                    <div
                      className={clsx(
                        "pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-3",
                        isExpanded
                          ? "max-h-60 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.title}
                          href={child.href}
                          className="flex items-center gap-2 text-sm  hover:text-black  font-semibold text-[#00aae1]"
                        >
                          {child.icon && child.icon}
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Groups */}
                  {item.groups && (
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded
                          ? "max-h-96 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.groups.map((group) => (
                        <div key={group.title} className="pl-4 mb-2">
                          <div className="text-xs font-bold  text-[#00aae1] uppercase mt-2 mb-1">
                            {group.title}
                          </div>
                          <div className="space-y-1 pl-4">
                            {group.children?.map((child) => (
                              <a
                                key={child.title}
                                href={child.href}
                                className="flex items-center gap-2 text-sm  font-semibold hover:text-black text-[#00aae1]"
                              >
                                {child.icon && child.icon}
                                {child.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
