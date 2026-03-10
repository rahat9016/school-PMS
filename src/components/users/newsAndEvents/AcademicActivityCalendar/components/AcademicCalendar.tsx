import bg from "../../../../../../public/newsEvents/Academic/shape1.png";

const calendar = "/newsEvents/Academic/calender.pdf";
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
            <iframe
              src={calendar}
              title="Academic Calendar"
              width="100%"
              height="1080"
              className="border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
