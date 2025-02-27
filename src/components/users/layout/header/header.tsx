"use client";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Logo2 from "../../../../../public/logoWhite.png";
import logoIcon from "../../../../../public/logoIcon.png";
import logoIconWhite from "../../../../../public/logoIconWhite.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

const navlinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Academic",
    href: "/curriculumOverview",
  },
  {
    label: "Admission",
    href: "/admission-overview",
  },
];
// const navlinks2 = [
//   {
//     label: "About",
//     children: [
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//     ],
//   },
//   {
//     label: "About",
//     children: [
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//     ],
//   },
//   {
//     label: "About",
//     children: [
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//       {
//         label: "Academic",
//         href: "/",
//       },
//     ],
//   },
// ];

const Header = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header
      className={`group ${pathname.startsWith("/admin") ? "" : "pb-[70px] md:pb-[91px]"} `}
    >
      {!pathname.startsWith("/admin") && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="border-b bg-light-gray top-0 w-full fixed z-50 shadow-sm h-[70px] md:h-[91px] flex items-center group-hover:bg-main-primary duration-150 border-main-secondary"
        >
          <div className="container py-4 ">
            <div className="grid grid-cols-3 lg:gap-4 place-content-center relative">
              <div className="flex items-center lg:gap-[30px]">
                <div className="w-10 h-10 flex items-center ">
                  <Menu className="group-hover:text-white text-2xl" />
                </div>
                <nav className="hidden lg:flex space-x-5 uppercase font-poppins font-medium">
                  {navlinks.map((link, index) => (
                    <Link key={index} href={link.href} className="group/nav">
                      <span className="relative cursor-pointer block font-medium group-hover:text-white">
                        {link.label}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/nav:w-full"></span>
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[60px]">
                  <Link href={'/'}>
                  <Image
                    src={isHovered ? logoIconWhite : logoIcon}
                    alt="PAN ASIA"
                    width={159}
                    height={49}
                    className="block md:hidden w-full h-[60px]"
                  /></Link>
                </div>
                <Link href={'/'}>
                <Image
                  src={isHovered ? Logo2 : Logo}
                  alt="PAN ASIA"
                  width={159}
                  height={59}
                  className="hidden md:block"
                />
                </Link>
                
              </div>
              <div className="flex items-center justify-end gap-8">
                <nav className="hidden md:flex space-x-5 uppercase font-poppins font-medium">
                  <Link href={`/`} className="group/nav">
                    <span className="relative cursor-pointer block font-medium group-hover:text-white">
                      LMS
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/nav:w-full"></span>
                    </span>
                  </Link>
                  <Link href={`/`} className="group/nav">
                    <span className="relative cursor-pointer block font-medium group-hover:text-white">
                      FAQ
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/nav:w-full"></span>
                    </span>
                  </Link>
                </nav>
                <div onClick={() => setShowSearch(!showSearch)} className="lg:hidden">
                  <Search className="w-7 h-7 text-mediumGray group-hover:text-white ml-auto" />
                </div>
                <div className="hidden lg:flex items-center gap-2 border rounded-xl px-4 h-[40px] w-full max-w-64">
                  <Search className="w-5 h-5 text-mediumGray group-hover:text-white" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] group-hover:placeholder:text-white"
                    // onChange={(event) => setSearch && setSearch(event.target.value)}
                  />
                </div>
              </div>
            </div>
            {showSearch && <div className="lg:hidden absolute -bottom-[40px] w-full left-0 shadow-lg">
              <div className="flex items-center gap-2 px-4 h-[40px] w-full bg-white">
                <Search className="w-5 h-5 text-mediumGray " />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] "
                  // onChange={(event) => setSearch && setSearch(event.target.value)}
                />
              </div>
            </div>}
            {/* <NavigationMenu
              className={`md:flex ${
                menuOpen ? "flex" : "hidden"
              } flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6`}
            >
              <NavigationMenuList className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                {navlinks2.map((navItem, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    <NavigationMenuTrigger>
                      {navItem.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 top-full mt-2 p-4 bg-white shadow-lg rounded-md">
                      <ul className="space-y-2">
                        {navItem.children.map((child, idx) => (
                          <li key={idx}>
                            <Link
                              href={child.href}
                              className="block hover:text-orange-500"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
