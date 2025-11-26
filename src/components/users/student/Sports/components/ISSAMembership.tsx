import TitleTag from "@/components/shared/TitleTag";
import Image from "next/image";
import ISSA from "../../../../../../public/students/sports/ISSA.png";

export default function ISSAMembershipSection() {
  return (
    <div className="bg-white py-10 xl:py-20">
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row gap-6 mt-5 lg:mt-8">
          <div className="w-full lg:w-1/2">
            <TitleTag title="Membership" />
            <h1 className="text-3xl lg:text-5xl text-black font-poppins font-semibold mt-4 lg:mt-8">
              International Sports Athletic Association (ISAA)

            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              Pan-Asia International School (PAIS) is a proud member of the International Sports Athletic Association (ISAA), founded in 2009 to promote athletic excellence, teamwork, and international sportsmanship among students. Since joining, PAIS has consistently ranked as Overall Champion in ISAA events, reflecting the school’s commitment to athletics, leadership, and character development.
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-6 leading-[28px]">
              ISAA features a variety of sports, including basketball, volleyball, futsal, swimming, table tennis, badminton, and track and field, giving students the opportunity to enhance physical skills, build confidence, and learn teamwork and fair play. The association emphasizes balancing education and athletics, fostering holistic growth—physically, psychologically, and socially—while encouraging lasting friendships.

            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-6 leading-[28px]">
              As PAIS continues to grow, the school remains committed to strong performance in ISAA and contributing positively to the wider community of affiliated schools, inspiring students to reach their full potential both on and off the field.
            </p>
          </div>
          <div className="lg:w-1/2 p-10">
            <div
            className="w-full rounded-md p-4 border flex items-center justify-center"
          >
            <Image
              src={ISSA}
              alt="ISSA"
              width={404}
              height={302}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
