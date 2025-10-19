import Image from "next/image";
import React from "react";
import img1 from "../../../../../public/gallery/img1.jpg";
import img2 from "../../../../../public/gallery/img2.jpg";
import img3 from "../../../../../public/gallery/img3.jpg";
import img4 from "../../../../../public/gallery/img4.jpg";
import img5 from "../../../../../public/gallery/img5.jpg";
import img6 from "../../../../../public/gallery/img6.jpg";
import img7 from "../../../../../public/gallery/img7.jpg";
import img8 from "../../../../../public/gallery/img8.jpg";
import img9 from "../../../../../public/gallery/img9.jpg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function GallerySection() {
  return (
    <div className="py-32">
      <div className="flex gap-9 justify-between flex-wrap ">
        {images.map((imgSrc, idx) => (
          <Image
            key={idx}
            src={imgSrc}
            alt="Gallery"
            width={120}
            height={120}
            // className="rounded-xl"
            className={`relative w-auto h-32 overflow-hidden rounded-lg ${
              idx === 4 && "pb-10"
            }  ${
              idx % 2 === 0 ? "animate-moveUp" : "animate-moveDown"
            }`}
          />
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-black text-5xl font-semibold mb-5 font-poppins">Gallery</h2>
        <p className="mb-[72px] text-mediumGray font-light font-poppins text-base">
          Here you can review some statistics about our School
        </p>
        <Link
            href={'/'}
            className="shadow-none border border-main-primary hover:bg-main-primary text-main-primary hover:text-white font-medium font-poppins text-sm duration-300 flex items-center justify-center text-center rounded-xl px-6 py-3 mt-12 w-fit gap-2 mx-auto"
          >
            View More <ChevronRight size={16} />
          </Link>
      </div>
    </div>
  );
}
