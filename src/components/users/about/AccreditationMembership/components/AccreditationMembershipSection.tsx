
import AccreditationMembershipCard from "./AccreditationMembershipCard";

const data = [
  {
    title: "Ministry Of Education",
    // img: img1,
  },
  {
    title: "An IB World School",
    // img: img6,
  },
  {
    title: "Accredited by Western Association of Schools and Colleges",
    // img: img7,
  },
  {
    title:
      "Accredited by Office of National Education Standards and Quality Assurance (ONESQA)",
    // img: img3,
  },
  {
    title: "Member of International Schools Association of Thailand (ISAT)",
    // img: img4,
  },
  {
    title: "Educational Collaborative for International Schools",
    // img: img2,
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
