import TitleTag from "@/components/shared/TitleTag";
import React from "react";
import chairmanImg from "../../../../../public/about/chairman.jpeg";
import comaLeft from "../../../../../public/coma1.png";
import comaRight from "../../../../../public/coma2.png";
import Image from "next/image";
export default function ChairmanMessageSection() {
  return (
    <div className="py-12 xl:py-[140px] bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-32">
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <TitleTag title="Message" />
            <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-black mt-4 lg:mt-8 lg:mb-10">
              Message from the Head of School
            </h1>
            <div>
              <Image
                src={comaLeft}
                alt="comaLeft"
                className="w-[69px] h-[55px] -ml-3 xl:-ml-7"
              />
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray -mt-7">
                It is with great delight that I am back at Pan-Asia
                International School to be once again dedicated to serving our
                community. I was away five years, but our school never left my
                heart. In fact, I was working hard to complete my Ph.D. program
                in educational leadership to strengthen my skills in this
                capacity. It was a wonderful experience; I had the opportunity
                to learn what the world considers to be the best educational
                approaches based on the latest research. With each new approach,
                I was continually envisioning how one day it could benefit the
                children of Pan-Asia International School.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <Image src={chairmanImg} alt="chairman" className="rounded-lg" />
          </div>
        </div>
        <div>
          <p className="text-sm xl:text-base font-light font-poppins text-darkGray mt-6 lg:mt-12">
            For my goal has always been to lead Pan-Asia International School
            into the future for the new generation; a generation that seeks
            commitment from caring and supportive educators and staff equipped
            with the best skills and mindset to offer quality international
            education in English. A school where parents are confident that a
            safe and nurturing environment is provided at all times. A school
            that teaches critical thinking, creativity, collaboration and
            communication skills that will serve their children well for facing
            the unknown challenges of the future. Our school has measurable
            objectives for ensuring we achieve these results.
          </p>
          <p className="text-sm xl:text-base font-light font-poppins text-darkGray mt-6 lg:mt-12">
            Do you wish to belong to a school community that will guide, support
            and care for your children to ensure that they learn, grow and
            discover their fullest potential? Are you a parent looking for an
            affordable, quality international education where your child will
            grow not only academically but morally as global citizens in a safe
            multi-cultural environment where all faiths are respected? Or, are
            you a student looking for teachers to serve as facilitators to help
            challenge your multiple intelligences as they guide you to acquire
            the knowledge and skills needed to help achieve your aspirations?
            Students, are you ready to become a global citizen and take your
            responsible place in the world?
          </p>
          <p className="text-sm xl:text-base font-light font-poppins text-darkGray mt-6 lg:mt-12">
            If you are, then you are ready for my promise, for my word …
          </p>
          <div className="flex items-end">
            <p className="text-sm xl:text-base font-medium font-poppins text-black-dark mt-6 lg:mt-12">
              “Pan-Asia International School is the right choice for you.”
            </p>
            <Image
              src={comaRight}
              alt="comaLeft"
              className="w-[69px] h-[55px]"
            />
          </div>
          <p className="text-base xl:text-lg font-medium font-poppins text-black-dark mt-8 lg:mt-[65px]">
            Dr. Husni Hamad,
          </p>
          <p className="text-sm xl:text-base font-light font-poppins text-darkGray">
            School Chairman
          </p>
        </div>
      </div>
    </div>
  );
}
