"use client";
import React from "react";
import Image from "next/image";
import bag from "../../public/bag.png";
import { usePathname, useRouter } from "next/navigation";
export default function TargetLocation() {
  const pathname = usePathname();
  const router = useRouter();
  const excludedPaths = ["/dashboard", "/signin"];

  const shouldHideHeader = excludedPaths.some(path => pathname.startsWith(path));
  return (
    <div>
      {!shouldHideHeader && <Image
        src={bag}
        alt="bag"
        className="fixed right-0 top-1/2 w-[156px] cursor-pointer z-50 "
        onClick={() => router.push("/open-house-school-tour#openHouse")}
      />}
    </div>
  );
}
