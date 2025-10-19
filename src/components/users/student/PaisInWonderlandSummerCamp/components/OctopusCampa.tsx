import Carousel from "@/components/shared/Carousel";
import shape2 from "../../../../../../public/Facilities/shape2.png";
import camp1 from "../../../../../../public/students/camp/camp1.png";
import camp2 from "../../../../../../public/students/camp/camp2.png";
import camp3 from "../../../../../../public/students/camp/camp3.png";
export default function OctopusCamp() {
  return (
    <div className="bg-white py-10 lg:pt-[140px] lg:pb-[110px]">
      <div className="container">
        <div>
          <h1 className="font-poppins text-xl xl:text-2xl font-semibold text-main-primary mt-4 ">
            PAIS Summer Camp
          </h1>
          <span className="bg-main-secondary h-[3px] w-[140px] block"> </span>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
            The PAIS Summer Camp is a 3-week program held between June and July,
            designed to give children an unforgettable holiday while helping
            them strengthen their English through engaging, real-life
            experiences.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-14">
          <div className="w-full lg:w-1/2">
            <div className="mt-7">
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                At Summer Camp, children will:
                <ul className="list-disc pl-5 text-sm lg:text-base font-light font-poppins text-darkGray mt-7 space-y-2">
                  <li>
                    Improve their English naturally through fun and interactive
                    activities
                  </li>
                  <li>
                    Develop creativity, problem-solving, and teamwork skills
                  </li>
                  <li>Build self-confidence and independence</li>
                  <li>
                    Make lasting friendships with peers from around the world
                  </li>
                </ul>
              </p>
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                Our program is filled with exciting opportunities, including
                sports, arts and crafts, cooking, dance, games, and field
                trips—all conducted in English to ensure language growth in an
                enjoyable way.
              </p>
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                More than just a camp, PAIS Summer Camp helps children discover
                their strengths, explore new interests, and create memories that
                will last a lifetime.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className="w-full p-4 object-contain bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${shape2.src})`,
              }}
            >
              <Carousel slides={[camp1, camp2, camp3]} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
            Give your child a summer filled with learning, laughter, and
            adventure—join us at PAIS Summer Camp!
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
            For our upcoming camp details, please follow us on our social media
            platforms. Announcements will be made around April or May.
          </p>
          {/* <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
            A Summer Camp in English will be a summer holiday they will not
            forget. Select an English Summer Camp and give your child the gift
            of the English language!
          </p> */}
        </div>
      </div>
    </div>
  );
}
