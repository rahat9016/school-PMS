import Carousel from "@/components/shared/Carousel";
import img1 from "../../../../../public/academic/Octopus1.png";
import img2 from "../../../../../public/academic/Octopus2.png";
import img3 from "../../../../../public/academic/Octopus3.png";
export default function MarketSpaceSection() {
  return (
    <div className="bg-white">
      <div className="py-14 bg-[#FFE8D1]">
        <div className="container">
          <Carousel slides={[img1, img2, img3]} className="w-full lg:w-1/3" />
        </div>
      </div>
      <div className="container">
        <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
          Pan Asia International School is proud to introduce (Makerspace) as
          part of our pursuit of continuous academic excellence. Makerspace is a
          workspace inside a school where traditional learning meets the
          practical application. We go from theory to application in the work
          space made for the students and teachers alike. Makerspace will
          provide a collaborative work space to make, learn, explore and share
          tools and technologies. This work space allows the students to explore
          technology that stimulates their interests and furthering their
          knowledge. The room offers students to be more inquisitive, experience
          the theories and applications in the quickest time possible.
        </p>
        <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
          Students will easily understand the concepts and its applications. It
          will also encourage them to be more resourceful as they will come up
          with new ideas with the help of Makerspace. This work space will also
          help students awaken their hidden potentials and their creative sides
          that have been held back due to the traditional style of learning. It
          will also decrease the time spent to learn about concepts and theories
          since the materials are readily available. Given the right tools, the
          students can visualize and experience solutions to a given problem.
          They can work more independently and discover things during the
          learning process.
        </p>
        <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6 pb-10 lg:pb-28">
          The PAIS Makerspace aims to provide the tools for MYP ARTS, Design,
          Sciences and Math students to enhance their learning experience. The
          room has a CO2 tube laser for cutting and engraving wood and acrylics.
          It also has a tool board where you can get the materials immediately.
          There is also a 3D printer which is capable of printing any design
          using a carbon fiber filament, ABS filament, PLA filament, wood
          filament or PET filament. With the use of the computer any design can
          be printed and sent as a set of instructions in machine language
          (G-code) for the printer to execute. Another machine in the room is
          wood and acrylic sanding machine and wood lathe.  These machines aim
          to aid the 3D printer in furnishing the finished printed product.
        </p>
      </div>
    </div>
  );
}
