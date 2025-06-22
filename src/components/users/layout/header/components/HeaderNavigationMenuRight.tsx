"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { menuData } from "./data/data";

export function HeaderNavigationMenuRight({mouseHover}:{mouseHover:boolean}) {
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);
  const menuItem = menuData.slice(-1)[0]
  return (
    <nav className="hidden lg:block">
      <div className="flex">
        <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              className={`flex items-center justify-center gap-1 transition font-poppins font-medium  text-base  ${mouseHover ?"text-white ":"text-charcoalGray"} `}
            >
              {menuItem.title}
              {menuItem.items.length > 0 && <ChevronDown size={16} />}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/last:w-full"></span>
            </button>

            {/* Dropdown menuItem */}
            {openDropdown && (
              <div className="absolute left-0 w-[256px] z-50 pt-9">
                <div className="bg-forestWhite shadow-lg rounded-md border border-main-primary p-1">
                  {menuItem.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`font-poppins text-base font-medium block px-4 py-2 text-charcoalGray hover:bg-main-primary rounded-md hover:text-white`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
    </nav>
  );
}
