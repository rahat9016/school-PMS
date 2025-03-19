"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { menuData } from "./data/data";

export function HeaderNavigationMenu() {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  return (
    <nav>
      <div className="flex">
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Main Menu Button */}
            <button
              className={`h-[60px] flex items-center justify-center gap-1 transition px-3 font-poppins font-medium w-[256px] text-base ${
                openDropdown === index
                  ? "bg-[#FFE8D1] text-main-primary"
                  : "text-charcoalGray"
              }`}
            >
              {menu.title}
              {menu.items.length > 0 && <ChevronDown size={16} />}
            </button>

            {/* Dropdown Menu */}
            {menu.items.length > 0 && openDropdown === index && (
              <div className="absolute left-0 w-[256px] z-50 pt-2">
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
        <Link
          href={"/contact"}
          className={`h-[60px] flex items-center justify-center gap-1 transition px-3 font-poppins font-medium w-[256px] text-base hover:bg-[#FFE8D1] text-charcoalGray hover:text-main-primary`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
