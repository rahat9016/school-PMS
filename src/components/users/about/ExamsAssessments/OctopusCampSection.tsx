import Carousel from "@/components/shared/Carousel";
import shape2 from "../../../../../public/Facilities/shape2.png";
import img1 from "../../../../../public/academic/Octopus1.png";
import img2 from "../../../../../public/academic/Octopus2.png";
import img3 from "../../../../../public/academic/Octopus3.png";
export default function OctopusCampSection() {
  return (
    <div className="bg-white pt-10 lg:pt-20 pb-10">
      <div className="container">
        <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
          English Camp can enrich a child’s life. English Camps offer children
          to experience new things, gain a sense of independence, have fun and
          make new friends while participating in exciting activities and
          mastering the English language. At English Camps children develop a
          priceless ability to communicate with more people.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mt-14">
          <div className="w-full lg:w-1/2">
            <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
              English Camp can enrich a child’s life. English Camps offer
              children to experience new things, gain a sense of independence,
              have fun and make new friends while participating in exciting
              activities and mastering the English language. At English Camps
              children develop a priceless ability to communicate with more
              people.
            </p>
            {/* <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
              Immerse yourself in English! Octopus Camp and March Mallow Camp
              offer an effective way to learn a language. The chance to practice
              English will be all around and use the language all the time.
            </p> */}
            {/* <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
              Octopus Camp and March Mallow Camp are not only educational but
              they are also fun and make learning exciting. English Camps
              positively impact children, both mentally and physically and our
              activities never stop. Programs filled with adventures, sports,
              games, cooking, field trips and a dance class offer so much fun
              while learning and playing in English!
            </p> */}
            <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-10">
              Our camps help develop personal skills too. The break from home in
              a supportive environment gives children the opportunity to
              discover their strengths and abilities, conquer new challenges,
              think creatively and solve problems, build self-esteem and become
              independent thinkers. At PAIS English Camps children build
              confidence and self-esteem by learning and developing new skills,
              communicating and team working, and having the time of their
              lives!
            </p>
            <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
              English Camp is also about finding new friends. Many children
              discover friends for life from countries all over the world
              through relationships that they build while learning and having
              fun. Start planning your child’s summer!
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 p-4 object-contain bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Carousel slides={[img1, img2, img3]} />
          </div>
        </div>
        <div>
          <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
            A Summer Camp in English will be a summer holiday they will not
            forget. Select an English Summer Camp and give your child the gift
            of the English language!
          </p>
        </div>
      </div>
    </div>
  );
}
