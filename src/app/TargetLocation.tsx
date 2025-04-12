"use client";
import React from "react";
import Image from "next/image";
import bag from "../../public/bag.png";
import { useRouter } from "next/navigation";
export default function TargetLocation() {
  const router = useRouter();
  return (
    <div>
      <Image
        src={bag}
        alt="bag"
        className="fixed right-0 top-1/2 w-[156px] cursor-pointer "
        onClick={() => router.push("/open-house-school-tour#openHouse")}
      />
    </div>
  );
}
