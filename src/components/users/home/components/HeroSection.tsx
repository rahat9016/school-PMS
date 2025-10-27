"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import videoIcon from "../../../../../public/videoIcon.png";
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(true);
  // const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
      // setShowGradient(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        src="/heroVideo.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
        className="w-full h-full"
      />
      <div
        className={`absolute inset-0 z-0 transition-all duration-1000`}
        // style={{
        //   background: showGradient
        //     ? "radial-gradient(51.63% 55.69% at 50% 50%, rgba(6, 9, 31, 0) 0%, rgba(6, 9, 31, 0.8) 100%)"
        //     : "#1c1e33",
        // }}
      />
      <div className="absolute left-[12%] bottom-[32%] shadow-2xl rounded-full">
        <div className="relative w-16 lg:w-[70px] h-16 lg:h-[70px] flex items-center justify-center ">
          <span className="absolute w-full h-full rounded-full bg-[#535353] animate-pulse-ring-small"></span>
          <span className="absolute w-full h-full rounded-full bg-[#6d6d6d] animate-pulse-ring-big"></span>
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#242D65]">
            <Image src={videoIcon} alt="videoIcon" width={20} height={23} />
          </div>
        </div>
      </div>
      {showContent && (
        <div className="z-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="block w-[1px] h-[60px] lg:h-[121px] mx-auto bg-white pt-5"></span>
          <div className="w-full lg:w-5/12 mx-auto h-full flex flex-col items-center px-4 lg:px-0">
            <p className="text-main-primary mt-6 lg:mt-12 text-base uppercase">
              WELCOME TO
            </p>
            <h1 className="text-main-primary text-[20px] lg:text-[96px] text-center font-bold font-poppins">
              PAN-ASIA INTERNATIONAL SCHOOL
            </h1>
            <p className="text-main-primary mt-6 lg:mt-12 text-sm lg:text-base uppercase text-center">
              Western curriculum, Eastern Culture
            </p>
          </div>
          <span className="block w-[1px] h-[121px] mx-auto bg-main-secondary"></span>
        </div>
      )}
    </div>
  );
}