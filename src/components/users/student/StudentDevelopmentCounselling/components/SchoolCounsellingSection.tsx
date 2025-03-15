import Image from "next/image";
import SchoolCounsellingImg from "../../../../../../public/students/SchoolCounsellingImg.jpg";
import shape2 from "../../../../../../public/Facilities/shape2.png";
import TitleTag from "@/components/shared/TitleTag";

export default function SchoolCounsellingSection() {
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
              At Pan-Asia International School, school counselors are friendly
              adults who are professionally trained to actively listen to
              concerns of students, parents, teachers, and school
              administrators. Within their competence, our school counselors
              provide guidance lessons, individual counseling, and build a
              referral network of community resources for students. Besides,
              they help teachers, parents, and school administrators have better
              understanding of student’s challenges and needs. From this
              understanding, we build a strong team to provide the best support
              for our students.
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
      </div>
    </div>
  );
}
