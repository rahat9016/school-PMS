import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import FacilitiesLayout from "./components/FacilitiesLayout";
import herobg from "../../../../../public/Facilities/heroImg.jpeg";
import facaltiesSliderImg1 from "../../../../../public/Facilities/facaltiesSliderImg1.jpg";
import facaltiesSliderImg2 from "../../../../../public/Facilities/facaltiesSliderImg2.jpg";
import facaltiesSliderImg3 from "../../../../../public/Facilities/facaltiesSliderImg3.jpg";
import facaltiesSliderImg4 from "../../../../../public/Facilities/facaltiesSliderWaiting01.jpg";
import facaltiesSliderImg5 from "../../../../../public/Facilities/facaltiesSliderWaiting02.jpg";
import facaltiesSliderImg6 from "../../../../../public/Facilities/facaltiesSliderWaiting03.jpg";
import facaltiesSliderImg7 from "../../../../../public/Facilities/facaltiesSliderSports01.jpg";
import facaltiesSliderImg8 from "../../../../../public/Facilities/facaltiesSliderSports02.jpg";
import facaltiesSliderImg9 from "../../../../../public/Facilities/facaltiesSliderSports03.jpg";
import facaltiesSliderImg01 from "../../../../../public/Facilities/facaltiesSliderAuditorium1.jpg";
import facaltiesSliderImg02 from "../../../../../public/Facilities/facaltiesSliderAuditorium2.jpg";
import facaltiesSliderImg03 from "../../../../../public/Facilities/facaltiesSliderAuditorium3.jpg";
import facaltiesSliderImg04 from "../../../../../public/Facilities/facaltiesSliderICT1.jpg";
import facaltiesSliderImg05 from "../../../../../public/Facilities/facaltiesSliderICT2.jpg";
import facaltiesSliderImg06 from "../../../../../public/Facilities/facaltiesSliderICT3.jpg";
import facaltiesSliderImg07 from "../../../../../public/Facilities/facaltiesSliderScience1.jpg";
import facaltiesSliderImg08 from "../../../../../public/Facilities/facaltiesSliderScience2.jpg";
import facaltiesSliderImg09 from "../../../../../public/Facilities/facaltiesSliderScience3.jpg";
import facaltiesSliderImg10 from "../../../../../public/Facilities/facaltiesSliderMusic1.jpg";
import facaltiesSliderImg11 from "../../../../../public/Facilities/facaltiesSliderMusic2.jpg";
import facaltiesSliderImg12 from "../../../../../public/Facilities/facaltiesSliderMusic3.jpg";
import facaltiesSliderImg13 from "../../../../../public/Facilities/facaltiesSliderCafeteria1.jpg";
import facaltiesSliderImg14 from "../../../../../public/Facilities/facaltiesSliderCafeteria2.jpg";
import facaltiesSliderImg15 from "../../../../../public/Facilities/facaltiesSliderCafeteria3.jpg";
import ChildSafety from "./components/ChildSafety";
import CertificateMembership from "./components/CertificateMembership";
import DevelopmentPolicy from "./components/DevelopmentPolicy";
const facilitiesData = [
  {
    slides: [facaltiesSliderImg1, facaltiesSliderImg2, facaltiesSliderImg3],
    title: "Library",
    description:
      "PAIS has a rapidly growing library with books in English, Thai and other languages and has been recently renovated to accommodate all our books. Students are provided with a wide variety of fiction and nonfiction books in our library in addition to periodicals such as magazines, newspapers and computer resources.",
  },
  {
    slides: [facaltiesSliderImg4, facaltiesSliderImg5, facaltiesSliderImg6],
    title: "Waiting Area & Orange Shop",
    description:
      "The new waiting area is a dedicated space within our school premises, thoughtfully designed to offer comfort and support to parents who are dropping off or picking up their child. The Orange Shop is also located between the waiting area and the KG court providing easy access to both parents and students.  The Orange Shop is committed to promoting the health and well-being of our students by providing a wide selection of nutritious and delicious snacks.",
  },
  {
    slides: [facaltiesSliderImg7, facaltiesSliderImg8, facaltiesSliderImg9],
    title: "Sports Facility",
    description:
      "The PAIS sports facilities provide students places to keep their bodies, not just their minds, in shape.",
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
      "The PAIS purpose-built auditorium seats just over 300 in plush air-conditioned comfort. The auditorium features state-of-the-art audio and video equipment and is suitable for performances both large and small.",
  },
  {
    slides: [facaltiesSliderImg04, facaltiesSliderImg05, facaltiesSliderImg06],
    title: "ICT Suite",
    description:
      "The PAIS ICT Suite boasts 24 state-of-the-art iMac computers available to our students in the pursuit of knowledge. The computers are equipped with a wide range of authentic software and are all Internet-ready.",
  },
  {
    slides: [facaltiesSliderImg07, facaltiesSliderImg08, facaltiesSliderImg09],
    title: "Science Labs",
    description:
      "The PAIS purpose-built auditorium seats just over 300 in plush air-conditioned comfort. The auditorium features state-of-the-art audio and video equipment and is suitable for performances both large and small.",
  },
  {
    slides: [facaltiesSliderImg10, facaltiesSliderImg11, facaltiesSliderImg12],
    title: "Music Room",
    description:
      "The music room is equipped with keyboards, guitars, violins, recorders and more! This is a place within PAIS where future musicians may be made.",
  },
  {
    slides: [facaltiesSliderImg13, facaltiesSliderImg14, facaltiesSliderImg15],
    title: "Cafeteria",
    description:
      "Breakfast and lunch are available daily in our cafeteria which received  the Thai government’s highest rating for cleanliness and sanitation practices.",
    description2:
      "The menu emphasizes nutritional balance for growing bodies and minds, as well as culinary variety to satisfy the varied tastes of our international student population.",
  },
];
export default function FacilitiesSafety() {
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
      <ChildSafety />
      <CertificateMembership />
      <DevelopmentPolicy/>
    </div>
  );
}
