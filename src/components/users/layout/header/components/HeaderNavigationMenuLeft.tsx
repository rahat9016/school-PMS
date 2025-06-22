"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { menuData } from "./data/data";

export function HeaderNavigationMenuLeft({mouseHover}:{mouseHover:boolean}) {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  return (
    <nav className="hidden lg:block">
      <div className="lg:flex">
        {menuData.slice(0,3).map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Main Menu Button */}
            <button
              className={`flex items-center justify-center gap-1 transition px-3 font-poppins font-medium text-base ${mouseHover ?"text-white":"text-charcoalGray"}  `}
            >
              {menu.title}
              {menu.items.length > 0 && <ChevronDown size={16} />}
            </button>

            {/* Dropdown Menu */}
            {menu.items.length > 0 && openDropdown === index && (
              <div className="absolute left-0 w-[256px] z-50 pt-9">
                <div className="bg-forestWhite shadow-lg rounded-md border border-main-primary p-1">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="font-poppins text-base font-medium block px-4 py-2 text-charcoalGray hover:bg-main-primary rounded-md hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
      </div>
    </nav>
  );
}
