"use client"
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isMuted, setIsMuted] = useState(true);
  const [showContent, setShowContent] = useState(true);
  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !videoRef.current.muted;
  //     setIsMuted(videoRef.current.muted);
  //   }
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 3000); // hides after 5 seconds

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
      <div className="absolute inset-0  z-0" style={{background: "radial-gradient(51.63% 55.69% at 50% 50%, rgba(6, 9, 31, 0) 0%, rgba(6, 9, 31, 0.8) 100%)"}}/>
      {showContent && (
        <div className="z-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="block w-[1px] h-[60px] lg:h-[121px] mx-auto bg-white pt-5"></span>
          <div className="w-full lg:w-5/12 mx-auto h-full flex flex-col items-center px-4 lg:px-0">
            <p className="text-white mt-6 lg:mt-12 text-base uppercase">WELCOME TO</p>
            <h1 className="text-white text-[20px] lg:text-[96px] text-center font-bold font-poppins">
              PAN-ASIA INTERNATIONAL SCHOOL
            </h1>
            <p className="text-white mt-6 lg:mt-12 text-sm lg:text-base uppercase text-center">
              Western curriculum, Eastern Culture
            </p>
          </div>
          <span className="block w-[1px] h-[121px] mx-auto bg-main-secondary"></span>
        </div>
      )}
    </div>
  );
}
