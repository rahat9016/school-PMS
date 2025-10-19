import Carousel from "@/components/shared/Carousel";
import img1 from "../../../../../../public/academic/SchoolLunchImg1.jpg";
import img2 from "../../../../../../public/academic/SchoolLunchImg2.jpg";
import shapeBg from "../../../../../../public/academic/SchoolLunchShape.png";
import shape2 from "../../../../../../public/Facilities/shape2.png";
export default function LunchSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${shapeBg.src})`,
        }}
        className="bg-main-primary py-10 lg:py-20 bg-no-repeat bg-contain bg-center"
      >
        <div className="w-full lg:w-1/2 mx-auto px-4 lg:px-0">
          <p className="text-white font-poppins font-medium text-lg">
            The PAIS Cafeteria provides a welcoming space for students and staff
            to enjoy nutritious, Halal-certified meals and snacks. Lunch is
            served buffet-style, featuring fresh fruits, Thai and international
            dishes, and a salad bar. The cafeteria also provides morning snacks
            for all students and afternoon bakery snacks for Kindergarten,
            keeping everyone energized throughout the day.
          </p>
          <p className="text-white font-poppins font-medium text-lg pt-3">
            Recognized with the Thai government’s highest rating for cleanliness
            and hygiene, the cafeteria ensures meals are safe, healthy, and
            enjoyable, supporting student well-being and community life.
          </p>
          <div
            className="w-full lg:w-[80%] mx-auto p-4 object-contain bg-contain bg-no-repeat mt-10"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Carousel
              slides={[img1, img2]}
              className="rounded-3xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
