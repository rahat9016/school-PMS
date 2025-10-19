import TitleTag from "@/components/shared/TitleTag";
import Image from "next/image";
import shape2 from "../../../../../../public/Facilities/shape.png";
import SchoolCounsellingImg from "../../../../../../public/students/StudentCounsellingImg.jpg";

export default function StudentCounsellingSection() {
  return (
    <div className="bg-white py-10 xl:pt-32 xl:pb-[104px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 mt-7 lg:mt-14">
          <div className="w-full lg:w-1/2">
            <TitleTag title="Counselling" />
            <h1 className="text-3xl lg:text-5xl text-black font-poppins font-semibold mt-4 lg:mt-8">
              Empowering Student Leadership at PAIS
            </h1>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-6 lg:mt-14 leading-[28px]">
              The Student Council at Pan-Asia International School (PAIS) is
              made up of elected representatives from Grades 10–12 who serve as
              leaders for our student body. Acting as the voice of their peers,
              they represent student interests, support the monthly Character
              Education curriculum, and create meaningful activities, contests,
              and fundraisers that enrich school life.
            </p>
            <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
              To be elected, candidates must be in good standing at PAIS and
              participate in a democratic election process. Students campaign by
              preparing speeches, posters, and videos to share their vision,
              after which the entire student body votes for their
              representatives. This process not only ensures fairness but also
              teaches students about leadership, responsibility, and civic
              engagement.
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
          Through their initiatives, Student Council members work to strengthen
          school spirit, promote student welfare, and build a sense of
          community. They organize events and activities that bring students
          together, encourage responsibility, and celebrate diversity. From
          spirit weeks and cultural celebrations to service projects and
          fundraising, the council’s efforts reflect the creativity and
          commitment of our student leaders.
        </p>
        <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
          Being part of the Student Council also allows students to develop
          essential leadership skills such as communication, teamwork, and
          problem-solving. With guidance from faculty advisors, council members
          learn to represent their peers respectfully, plan events responsibly,
          and contribute positively to the PAIS community.
        </p>
        <p className="text-sm lg:text-base font-poppins text-darkGray font-light mt-5 lg:mt-10 leading-[28px]">
          At PAIS, the Student Council is more than just a leadership group—it
          is a driving force for student engagement, school pride, and
          meaningful change.
        </p>
      </div>
    </div>
  );
}
