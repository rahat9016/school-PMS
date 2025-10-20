import Image from "next/image";
import calendar from "../../../../../../public/newsEvents/Academic/calendar2025-2026.jpg";
import bg from "../../../../../../public/newsEvents/Academic/shape1.png";
export default function AcademicCalendar() {
  return (
    <div>
      <div
        className="bg-main-primary bg-no-repeat bg-contain bg-center pt-10 pb-20"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div>
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold">
              Academic Calendar
            </h1>
            <span className="w-[140px] h-[3px] bg-main-secondary mx-auto mt-2 mb-10 block"></span>
            <Image
              src={calendar}
              alt=" Academic Calendar"
              width={1280}
              height={1808}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
