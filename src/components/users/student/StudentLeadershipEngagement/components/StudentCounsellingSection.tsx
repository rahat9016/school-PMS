import Image from "next/image";
import SchoolCounsellingImg from "../../../../../../public/students/StudentCounsellingImg.jpg";
import shape2 from "../../../../../../public/Facilities/shape.png";
import TitleTag from "@/components/shared/TitleTag";

export default function StudentCounsellingSection() {
  return (
    <div className="bg-white py-10 xl:pt-32 xl:pb-[104px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 mt-7 lg:mt-14">
          <div className="w-full lg:w-1/2">
            <TitleTag title="Counselling" />
            <h1 className="text-3xl lg:text-5xl text-black font-poppins font-semibold mt-4 lg:mt-8">
              School Counselling
            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              Student Council is a group of elected students from grades 10
              through 12 that act as leaders for our student body, represent the
              students and their interests, aids in the monthly Character
              Education curriculum, as well as provides activities, contests,
              and fundraisers for Pan-Asia International School.
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
              In order to be elected, members of the student council were
              required to campaign, creating various speeches, posters, and
              videos to gain support. In order to campaign, student council
              members must be in good standing at PAIS. After the campaign, the
              entire student body at PAIS votes for their student council
              representative, participating in a democratic elections process,
              in order to elect their representative.
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 p-4 object-contain bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Image
              src={SchoolCounsellingImg}
              alt="School Counselling Img"
              width={590}
              height={410}
            />
          </div>
        </div>
        <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
          Each year, the Student Council organizes and manages a significant
          fundraising campaign for others in need, either locally or globally.
          The Student Council also is responsible for organizing Spirit Week
          during the fall semester, a weeklong event to celebrate diversity in a
          fun and unique way. In addition, Student Council assists teachers for
          Character Education each month, leading activities, creating videos,
          presenting at assemblies, and setting examples for the rest of the
          school. Finally, all of our members of student council manage the
          Middle School hallway duty list, exhibiting leadership skills while
          also practicing time management.
        </p>
      </div>
    </div>
  );
}
