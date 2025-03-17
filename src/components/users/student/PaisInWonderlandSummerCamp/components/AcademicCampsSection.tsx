import React from "react";
import Image from "next/image";
import bg from "../../../../../../public/students/bg2.png";
import img from "../../../../../../public/students/academicCamp1.png";
import img2 from "../../../../../../public/students/academicCamp2.png";
import img3 from "../../../../../../public/students/academicCamp3.png";
export default function AcademicCampsSection() {
  return (
    <div
      className=" bg-no-repeat bg-contain lg:bg-cover bg-center bg-main-primary py-10 lg:py-[120px]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div>
          <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-white text-center">
            Academic Camps
          </h1>
          <span className="block w-[47px] h-[3px] bg-main-secondary my-5 lg:my-10 mx-auto"></span>
          <h3 className="font-poppins text-lg xl:text-2xl font-semibold text-white text-center">
            Octopus Camp, March Mallow Camp & Amazing Summer Camp
          </h3>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-12 text-center">
            English Camp can enrich a child’s life. English Camps offer children
            to experience new things, gain a sense of independence, have fun and
            make new friends while participating in exciting activities and
            mastering the English language. At English Camps children develop a
            priceless ability to communicate with more people.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-[46px] mt-10 lg:mt-20">
          <Image src={img} alt="" width={351} height={303}  className="lg:w-[251px] xl:w-[351px]" />
          <Image src={img3} alt="" width={468} height={399} className="lg:w-[368px] xl:w-[468px]"  />
          <Image src={img2} alt="" width={351} height={303} className="lg:w-[251px] xl:w-[351px]"  />
        </div>
        <div>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-10 lg:mt-20 text-center">
            English Camp can enrich a child’s life. English Camps offer children
            to experience new things, gain a sense of independence, have fun and
            make new friends while participating in exciting activities and
            mastering the English language. At English Camps children develop a
            priceless ability to communicate with more people.
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-4 lg:mt-8 text-center">
            Immerse yourself in English! Octopus Camp and March Mallow Camp
            offer an effective way to learn a language. The chance to practice
            English will be all around and use the language all the time.
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-4 lg:mt-8 text-center">
            Octopus Camp and March Mallow Camp are not only educational but they
            are also fun and make learning exciting. English Camps positively
            impact children, both mentally and physically and our activities
            never stop. Programs filled with adventures, sports, games, cooking,
            field trips and a dance class offer so much fun while learning and
            playing in English!
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-4 lg:mt-8 text-center">
            Our camps help develop personal skills too. The break from home in a
            supportive environment gives children the opportunity to discover
            their strengths and abilities, conquer new challenges, think
            creatively and solve problems, build self-esteem and become
            independent thinkers. At PAIS English Camps children build
            confidence and self-esteem by learning and developing new skills,
            communicating and team working, and having the time of their lives!
            English Camp is also about finding new friends. Many children
            discover friends for life from countries all over the world through
            relationships that they build while learning and having fun. Start
            planning your child’s summer!
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-white mt-4 lg:mt-8 text-center">
          A Summer Camp in English will be a summer holiday they will not forget. Select an English Summer Camp and give your child the gift of the English language!
          </p>
        </div>
      </div>
    </div>
  );
}
