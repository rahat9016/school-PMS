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
              ISSA Membership
            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              Pan-Asia International School is a proud member of the International Association of Student Support (IASS), a global network committed to promoting excellence in student well-being, academic development, and inclusive education.
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-6 leading-[28px]">
              Through our IASS membership, we gain access to international best practices, professional development opportunities, and collaborative initiatives that help us better serve our diverse student community. This affiliation reflects our ongoing commitment to supporting the whole child—academically, socially, and emotionally.
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
