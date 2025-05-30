"use client";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import logoIcon from "../../../../../public/logoIcon.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HeaderNavigationMenu } from "./components/navigaration";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { menuData } from "./components/data/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const excludedPaths = ["/dashboard", "/signin"];
  const shouldHideHeader = excludedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header
      className={`group ${shouldHideHeader ? "" : "pb-[70px] md:pb-[91px]"} `}
    >
      {!shouldHideHeader && (
        <div className="top-0 w-full fixed z-50 ">
          <div className="border-b bg-light-gray shadow-sm h-[70px] md:h-[91px] flex items-center group-hover:bg-main-primary duration-150 border-main-secondary">
            <div className="container py-4 ">
              <div className="grid grid-cols-3 lg:gap-4 place-content-center relative">
                <div className="flex items-center lg:gap-[30px]">
                  <div
                    onClick={() => setShowMenu(!showMenu)}
                    className="hidden w-10 h-10 lg:flex items-center cursor-pointer"
                  >
                    {!showMenu ? (
                      <Menu className="group-hover:text-white text-2xl" />
                    ) : (
                      <X className="group-hover:text-white text-2xl" />
                    )}
                  </div>
                  <div
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="lg:hidden w-10 h-10 flex items-center cursor-pointer"
                  >
                    {!showMobileMenu ? (
                      <Menu className="group-hover:text-white text-2xl" />
                    ) : (
                      <X className="group-hover:text-white text-2xl" />
                    )}
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
                    <Link href={"/"}>
                      <Image
                        src={logoIcon}
                        alt="PAN ASIA"
                        width={159}
                        height={49}
                        className="block md:hidden w-full h-[60px] group-hover:filter-white-filter"
                      />
                    </Link>
                  </div>
                  <Link href={"/"}>
                    <Image
                      src={Logo}
                      alt="PAN ASIA"
                      width={159}
                      height={59}
                      className="hidden md:block group-hover:filter-white-filter"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-end gap-8">
                  <nav className="hidden md:flex items-center space-x-5 uppercase font-poppins font-medium">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="group/nav bg-transparent text-black shadow-none hover:bg-transparent ">
                          <span className="text-base relative cursor-pointer block font-medium group-hover:text-white">
                            LMS
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/nav:w-full"></span>
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-36 bg-forestWhite p-1">
                        <Link
                          href={`https://www.schoolbaglive.com/admin/`}
                          className="hover:bg-main-primary hover:text-white w-full block px-3 py-2 rounded-md"
                        >
                          SchoolBagLive
                        </Link>
                        <Link
                          href={`https://pais.managebac.com/login`}
                          className="hover:bg-main-primary hover:text-white w-full block px-3 py-2 rounded-md"
                        >
                          ManageBAC
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href={`/faq`} className="group/nav">
                      <span className="relative cursor-pointer block font-medium group-hover:text-white">
                        FAQ
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-main-secondary transition-all duration-300 group-hover/nav:w-full"></span>
                      </span>
                    </Link>
                  </nav>
                  <div
                    onClick={() => setShowSearch(!showSearch)}
                    className="lg:hidden"
                  >
                    <Search className="w-7 h-7 text-mediumGray group-hover:text-white ml-auto" />
                  </div>
                  <div className="hidden lg:flex items-center gap-2 border rounded-xl px-4 h-[40px] w-full max-w-64">
                    <Search
                      onClick={handleSearch}
                      className="w-5 h-5 text-mediumGray group-hover:text-white"
                    />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] group-hover:placeholder:text-white group-hover:text-white"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              </div>
              {showSearch && (
                <div className="lg:hidden absolute -bottom-[40px] w-full left-0 shadow-lg">
                  <div className="flex items-center gap-2 px-4 h-[40px] w-full bg-white">
                    <Search onClick={handleSearch} className="w-5 h-5 text-mediumGray " />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] "
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {showMenu && (
            <div className="hidden lg:block bg-white shadow-md">
              <div className="container h-[60px]">
                <HeaderNavigationMenu />
              </div>
            </div>
          )}
          {showMobileMenu && (
            <div className="lg:hidden">
              <Drawer open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <DrawerTrigger asChild>
                  <button className="text-gray-700 focus:outline-none">
                    <Menu size={28} />
                  </button>
                </DrawerTrigger>

                {/* Left-side Drawer (Fixed Full Height & Scrollable) */}
                <DrawerContent className="fixed left-0 -top-[100px] h-screen w-[75%] bg-white shadow-lg p-6 flex flex-col ">
                  {/* Scrollable Menu Content */}
                  <div className="mt-8 flex-1 overflow-y-auto ">
                    {menuData.map((menu, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-lg font-semibold">{menu.title}</p>
                        <div className="ml-4 mt-2">
                          {menu.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block py-2 text-gray-700 hover:text-black"
                              onClick={() => setShowMobileMenu(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href={"/contact"}
                      className={`h-[60px] flex items-center  gap-1 transition font-poppins text-base  text-black hover:text-main-primary font-semibold pb-20`}
                    >
                      Contact
                    </Link>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
