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
            Octopus Camp, March Mallow Camp & Amazing Summer Camp
          </h1>
          <span className="bg-main-secondary h-[3px] w-[140px] block"> </span>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
            English Camp can enrich a child’s life. English Camps offer children
            to experience new things, gain a sense of independence, have fun and
            make new friends while participating in exciting activities and
            mastering the English language. At English Camps children develop a
            priceless ability to communicate with more people.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-14">
          <div className="w-full lg:w-1/2">
            <div className="mt-7">
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                English Camp can enrich a child’s life. English Camps offer
                children to experience new things, gain a sense of independence,
                have fun and make new friends while participating in exciting
                activities and mastering the English language. At English Camps
                children develop a priceless ability to communicate with more
                people.
              </p>
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                Immerse yourself in English! Octopus Camp and March Mallow Camp
                offer an effective way to learn a language. The chance to
                practice English will be all around and use the language all the
                time.
              </p>
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
                Octopus Camp and March Mallow Camp are not only educational but
                they are also fun and make learning exciting. English Camps
                positively impact children, both mentally and physically and our
                activities never stop. Programs filled with adventures, sports,
                games, cooking, field trips and a dance class offer so much fun
                while learning and playing in English!
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
           Our camps help develop personal skills too. The break from home in a supportive environment gives children the opportunity to discover their strengths and abilities, conquer new challenges, think creatively and solve problems, build self-esteem and become independent thinkers. At PAIS English Camps children build confidence and self-esteem by learning and developing new skills, communicating and team working, and having the time of their lives!
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
           English Camp is also about finding new friends. Many children discover friends for life from countries all over the world through relationships that they build while learning and having fun. Start planning your child’s summer!
          </p>
          <p className="text-sm lg:text-base font-light font-poppins text-darkGray mt-7">
           A Summer Camp in English will be a summer holiday they will not forget. Select an English Summer Camp and give your child the gift of the English language!
          </p>
        </div>
      </div>
    </div>
  );
}
