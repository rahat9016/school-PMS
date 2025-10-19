import HeroSection from "@/components/shared/HeroSection";
import facaltiesSliderImg01 from "../../../../../public/Facilities/facaltiesSliderAuditorium1.jpg";
import facaltiesSliderImg02 from "../../../../../public/Facilities/facaltiesSliderAuditorium2.jpg";
import facaltiesSliderImg03 from "../../../../../public/Facilities/facaltiesSliderAuditorium3.jpg";
import facaltiesSliderImg13 from "../../../../../public/Facilities/facaltiesSliderCafeteria1.jpg";
import facaltiesSliderImg14 from "../../../../../public/Facilities/facaltiesSliderCafeteria2.jpg";
import facaltiesSliderImg15 from "../../../../../public/Facilities/facaltiesSliderCafeteria3.jpg";
import facaltiesSliderImg04 from "../../../../../public/Facilities/facaltiesSliderICT1.jpg";
import facaltiesSliderImg05 from "../../../../../public/Facilities/facaltiesSliderICT2.jpg";
import facaltiesSliderImg06 from "../../../../../public/Facilities/facaltiesSliderICT3.jpg";
import facaltiesSliderImg1 from "../../../../../public/Facilities/facaltiesSliderImg1.jpg";
import facaltiesSliderImg2 from "../../../../../public/Facilities/facaltiesSliderImg2.jpg";
import facaltiesSliderImg3 from "../../../../../public/Facilities/facaltiesSliderImg3.jpg";
import facaltiesSliderImg10 from "../../../../../public/Facilities/facaltiesSliderMusic1.jpg";
import facaltiesSliderImg11 from "../../../../../public/Facilities/facaltiesSliderMusic2.jpg";
import facaltiesSliderImg12 from "../../../../../public/Facilities/facaltiesSliderMusic3.jpg";
import facaltiesSliderImg07 from "../../../../../public/Facilities/facaltiesSliderScience1.jpg";
import facaltiesSliderImg08 from "../../../../../public/Facilities/facaltiesSliderScience2.jpg";
import facaltiesSliderImg09 from "../../../../../public/Facilities/facaltiesSliderScience3.jpg";
import facaltiesSliderImg7 from "../../../../../public/Facilities/facaltiesSliderSports01.jpg";
import facaltiesSliderImg8 from "../../../../../public/Facilities/facaltiesSliderSports02.jpg";
import facaltiesSliderImg9 from "../../../../../public/Facilities/facaltiesSliderSports03.jpg";
import facaltiesSliderImg4 from "../../../../../public/Facilities/facaltiesSliderWaiting01.jpg";
import facaltiesSliderImg5 from "../../../../../public/Facilities/facaltiesSliderWaiting02.jpg";
import facaltiesSliderImg6 from "../../../../../public/Facilities/facaltiesSliderWaiting03.jpg";
import herobg from "../../../../../public/Facilities/heroImg.jpeg";

import FacilitiesLayout from "./components/FacilitiesLayout";
const facilitiesData = [
  {
    slides: [facaltiesSliderImg1, facaltiesSliderImg2, facaltiesSliderImg3],
    title: "Library",
    description:
      "The PAIS Library is a hub for learning, creativity, and exploration. It offers a wide range of books and computers to support research, assignments, and collaborative projects. Comfortable reading areas and regular programs encourage curiosity, critical thinking, and a lifelong love of learning.",
  },
  {
    slides: [facaltiesSliderImg4, facaltiesSliderImg5, facaltiesSliderImg6],
    title: "Waiting Area and Sandwoosh",
    description:
      "The waiting area provides a comfortable space for parents during drop-off and pick-up. Sandwoosh, our school shop located between the KG court and waiting area, offers snacks and uniforms for students and parents, supporting the needs of our school community.",
  },
  {
    slides: [facaltiesSliderImg7, facaltiesSliderImg8, facaltiesSliderImg9],
    title: "Sports Facility",
    description:
      "PAIS offers a variety of sports facilities to promote physical fitness, teamwork, and student well-being. The campus includes a new primary futsal court, covered courts for basketball or volleyball, two grassed football pitches, an indoor sports complex, and running tracks. Students also have access to a half-Olympic size swimming pool and a dedicated swimming pool for Kindergarten, providing spaces for both skill development and recreational activities.",
    points: [
      "New Primary Futsal Court",
      "2 Covered Courts for Basketball or Volleyball",
      "2 Grassed Football Pitches",
      "An Open Court for Basketball, Volleyball of Futsal",
      "A Half Olympic Size Swimming Pool",
      "A Swimming Pool for Kindergarten",
    ],
  },
  {
    slides: [facaltiesSliderImg01, facaltiesSliderImg02, facaltiesSliderImg03],
    title: "Auditorium",
    description:
      "The PAIS Auditorium is a versatile space designed for assemblies, performances, and community events. Equipped with modern audio-visual facilities, it provides students and staff a professional environment to showcase talents, celebrate achievements, and engage in school-wide gatherings.",
  },
  {
    slides: [facaltiesSliderImg04, facaltiesSliderImg05, facaltiesSliderImg06],
    title: "ICT Suite",
    description:
      "The PAIS ICT Suite is equipped with modern iMac computers and a variety of software to support learning across all subjects. Students use the suite for coding, multimedia projects, research, and digital presentations, fostering creativity, collaboration, and essential 21st-century skills.",
  },
  {
    slides: [facaltiesSliderImg07, facaltiesSliderImg08, facaltiesSliderImg09],
    title: "Science Labs",
    description:
      "The PAIS Science Labs provide students with a hands-on learning environment to explore biology, chemistry, and physics. Equipped with modern tools and materials, the labs encourage experimentation, critical thinking, and scientific inquiry across all grade levels.",
  },
  {
    slides: [facaltiesSliderImg10, facaltiesSliderImg11, facaltiesSliderImg12],
    title: "Music Room",
    description:
      "The PAIS Music Room is designed to inspire creativity and musical exploration. Equipped with a variety of instruments, students can learn, practice, and perform, developing their skills in both individual and group music activities.",
  },
  {
    slides: [facaltiesSliderImg13, facaltiesSliderImg14, facaltiesSliderImg15],
    title: "Cafeteria",
    description:
      "The PAIS Cafeteria provides a welcoming space for students and staff to enjoy nutritious meals and snacks. Designed for comfort and convenience, it supports healthy eating habits and encourages social interaction within the school community.",
    description2:
      "The cafeteria has also received the Thai government’s highest rating for cleanliness and sanitation practices, reflecting our commitment to safety and hygiene.",
  },
  {
    slides: [facaltiesSliderImg10, facaltiesSliderImg11, facaltiesSliderImg12],
    title: "STREAM Lab",
    description:
      "The PAIS STREAM Lab offers a hands-on environment where students explore Science, Technology, Robotics, Engineering, Arts, and Mathematics. Equipped with modern tools, including VEX robots, the lab encourages creativity, critical thinking, and problem-solving through collaborative and innovative projects.",
  },
];
export default function Facilities() {
  return (
    <div>
      <HeroSection
        img={herobg}
        title="Facilities"
        className="bg-cover h-[280px]"
      />
      {facilitiesData.map((facilities, index) => (
        <FacilitiesLayout
          isReverse={index % 2 !== 0 ? true : false}
          key={index}
          data={facilities}
        />
      ))}
      {/* <CertificateMembership /> */}
      {/* <DevelopmentPolicy/> */}
    </div>
  );
}
