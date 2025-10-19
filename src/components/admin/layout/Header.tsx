"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import profile from "../../../../public/profile.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { clearUserInformation } from "@/lib/redux/features/auth/authSlice";
import { clearCookie } from "@/lib/cookie";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter()
  const dispatch = useAppDispatch()
   const { userInformation } = useAppSelector(state => state.auth)
  return (
    <header className={`pb-[70px] md:pb-[91px] `}>
      {
        <div className="top-0 w-full fixed z-50 ">
          <div className="border-b bg-light-gray shadow-sm h-[70px] md:h-[91px] flex items-center  duration-150 border-main-secondary">
            <div className="py-4 px-6 lg:px-20 w-full">
              <div className="flex items-center justify-between lg:gap-4 relative">
                <div className="flex items-center justify-center">
                  <Link href={"/"}>
                    <Image
                      src={Logo}
                      alt="PAN ASIA"
                      width={159}
                      height={59}
                      className=""
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-end gap-8">
                  <div
                    onClick={() => setShowSearch(!showSearch)}
                    className="lg:hidden"
                  >
                    <Search className="w-7 h-7 text-mediumGray ml-auto" />
                  </div>
                  <div className="hidden lg:flex items-center gap-2 border rounded-xl px-4 h-[40px] w-full max-w-64">
                    <Search className="w-5 h-5 text-mediumGray" />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] "
                      // onChange={(event) => setSearch && setSearch(event.target.value)}
                    />
                  </div>
                  <nav className="hidden md:flex items-center space-x-5 uppercase font-poppins font-medium">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 focus:outline-none bg-transparent">
                          <div className="relative w-10 h-10 rounded-full border-2 border-blue-900 overflow-hidden">
                            <Image
                              src={profile} // Replace with your profile image path
                              alt="profile"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-gray-800 font-medium">
                            {userInformation?.fullName}
                          </span>
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                          onClick={() => console.log("Profile clicked")}
                        >
                          Account
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => {
                            clearCookie('accessToken')
                            clearCookie('refreshToken')
                            clearCookie('user')
                            dispatch(clearUserInformation())
                            router.push('/')
                        }}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </nav>
                </div>
              </div>

              {showSearch && (
                <div className="lg:hidden absolute -bottom-[40px] w-full left-0 shadow-lg">
                  <div className="flex items-center gap-2 px-4 h-[40px] w-full bg-white">
                    <Search className="w-5 h-5 text-mediumGray " />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="border-none bg-transparent placeholder-gray-400 shadow-none py-1 placeholder:text-[#646464] "
                      // onChange={(event) => setSearch && setSearch(event.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </header>
  );
};

export default Header;
