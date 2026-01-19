
import AccreditationMembershipCard from "./AccreditationMembershipCard";
import img5 from "../../../../../../public/about/accreditationMembership/ISSlogo.png";
import img1 from "../../../../../../public/about/accreditationMembership/moe.png";
import img6 from "../../../../../../public/about/accreditationMembership/anIb.png";
import img7 from "../../../../../../public/acs-logo.png";
import img3 from "../../../../../../public/about/accreditationMembership/onesqa.png";
import img4 from "../../../../../../public/about/accreditationMembership/ecis.png";
const data = [
  {
    title: "Ministry Of Education",
    img: img1,
  },
  {
    title: "An IB World School",
    img: img6,
  },
  {
    title: "Accredited by Western Association of Schools and Colleges",
    img: img7,
  },
  {
    title:
      "Accredited by Office of National Education Standards and Quality Assurance (ONESQA)",
    img: img3,
  },
  {
    title: "Member of International Schools Association of Thailand (ISAT)",
    img: img4,
  },
  {
    title: "International School Services (ISS)",
     img: img5,
  },
];

export default function AccreditationMembershipSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(242,251,253,1) 0%, rgba(255,232,209,1) 50%, rgba(242,251,253,1) 100%)",
      }}
      className="pt-10 lg:pt-20 pb-20 lg:pb-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10">
          {data.map((acc, index) => (
            <AccreditationMembershipCard key={index} {...acc} />
          ))}
        </div>
      </div>
    </div>
  );
}
