import Image from "next/image";
import img1 from "../../../../../../public/students/sports/img1.jpg";
import img2 from "../../../../../../public/students/sports/img2.jpg";
import img3 from "../../../../../../public/students/sports/img3.jpg";
import sportsImg1 from "../../../../../../public/students/sports/sportsImg1.png";


export default function SportGallerySection() {
  return (
    <div className="bg-white py-10 lg:pt-[104px] lg:pb-[140px]">
      <div className="container">
        {/* top image  */}
        <div className="relative w-full  ">
          <div className="group relative  rounded-lg">
            <Image src={sportsImg1} alt="Football" className="w-full h-auto" />
          </div>
        </div>

        {/* middle , grid images  */}
        <div className="relative w-full mt-8  ">
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 ">
            {/* image section  */}
            <div className="imageSection  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1  gap-4   ">
              <div className="img1 relative w-full h-[16rem] lg:h-[20rem] rounded-lg overflow-hidden ">
                <Image
                  src={img1}
                  alt="Football"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="img2 relative w-full  h-[16rem] lg:h-[20rem] rounded-lg overflow-hidden ">
                <Image
                  src={img2}
                  alt="Football"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="img3 relative w-full h-[16rem] lg:h-[20rem] rounded-lg overflow-hidden ">
                <Image
                  src={img3}
                  alt="Football"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="bg-aliceBlue p-7 lg:px-[64px] py-7 lg:py-14 rounded-xl">
              <h1 className="text-xl lg:text-4xl text-black font-poppins font-semibold">
                Sports Facility
              </h1>
              <span className="block h-[3px] bg-main-secondary w-[47px] my-4 lg:my-8"></span>
              <p className=" text-xs min-[425px]:text-sm lg:text-base font-poppins text-darkGray font-light leading-[25px] min-[425px]:leading-[28px]">
                At Pan-Asia International School, one of our Expected Schoolwide
                Learning Results is for students to be physically fit. Our
                students learn the importance of maintaining good health,
                understanding concepts of nutrition and hygiene, participating
                enthusiastically in sports, demonstrating sportsmanship, and
                recognizing the dangers of drug, tobacco, and alcohol abuse.<br/> <br/>The
                PAIS sports facilities provide students places to keep their
                bodies, not just their minds, in shape. To support an active and
                healthy lifestyle, we have upgraded our sports facilities across
                the campus. Our open court in front of the Muscat Building has
                been transformed into a football pitch with artificial grass,
                surrounded by running tracks, where students can enjoy football
                and other athletic activities. Our secondary open court has been
                upgraded into a fully air-conditioned indoor sports complex,
                offering students the opportunity to play basketball and other
                indoor sports comfortably throughout the year. Additionally, a
                new volleyball court has been added just outside the gym. The
                football pitch located beside the swimming pool and closed gym
                has also been upgraded with new grass to provide an improved
                playing surface. <br/> <br/>For our younger students, our primary courts
                are fully equipped for futsal and basketball. Our Kindergarten
                students have access to a dedicated swimming pool, while primary
                and secondary students can enjoy our half-Olympic size swimming
                pool during PE classes to learn and practice swimming skills.<br/> <br/>
                Every year, our Physical Health Education (PHE) Department
                organizes the annual Sports Day for the whole school, including
                facilitators and staff. Each participant is assigned a house
                color, and students and staff compete in various games and
                sports, fostering teamwork, school spirit, and sportsmanship.<br/> <br/>
                Through these facilities and events, PAIS provides students with
                diverse opportunities to stay active, develop their physical
                abilities, and cultivate a lifelong appreciation for health and
                fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
