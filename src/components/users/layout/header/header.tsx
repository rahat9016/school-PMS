"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`${pathname.startsWith("/admin") ? "" : "pb-[77px]"} `}>
      {!pathname.startsWith("/admin") && (
        <div className="lg:border-b border-white-light bg-light-gray top-0 w-full fixed z-50 shadow-sm"></div>
      )}
    </header>
  );
};

export default Header;
