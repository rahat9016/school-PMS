import TitleTag from "@/components/shared/TitleTag";
import Image from "next/image";
import historyImg from "../../../../../public/about/historyImg.jpeg";
export default function HistorySection() {
  return (
    <div className="py-20 xl:py-[140px] bg-main-primary">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-[103px]">
          <div className="w-full xl:w-[47%]">
            <Image
              src={historyImg}
              alt="comaLeft"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="w-full xl:w-[53%]">
            <TitleTag title="Message" />
            <h1 className="font-poppins text-2xl xl:text-5xl font-semibold text-white mt-4 xl:mt-8 mb-7 xl:mb-14">
              History
            </h1>
            <p className="text-sm xl:text-base font-light font-poppins text-white">
              Pan-Asia International School (PAIS) was founded in 2004 by the
              Social Welfare Society (SWS), a respected Thai non-profit
              organization, with a vision to balance global education with Thai
              cultural values. The school was established in response to
              concerns about the growing influence of Western-centric education,
              aiming to provide a curriculum that combines international
              standards with local traditions.
            </p>
            <p className="text-sm xl:text-base font-light font-poppins text-white mt-6 xl:mt-12">
              In its early years, PAIS focused on building a strong academic
              foundation while creating a nurturing and inclusive environment
              for students of all backgrounds. Over time, the school expanded
              its programs and facilities, becoming fully accredited by the Thai
              Ministry of Education and the Western Association of Schools and
              Colleges (WASC), and joining the International Schools Association
              of Thailand (ISAT).
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm xl:text-base font-light font-poppins text-white mt-6 xl:mt-12">
            PAIS gradually introduced the International Baccalaureate (IB)
            Middle Years Programme (MYP) and Diploma Programme (DP),
            complementing its U.S.-based curriculum and emphasizing academic
            excellence, global citizenship, and holistic development. The campus
            also grew to include science laboratories, an auditorium, a Mac IT
            lab, dedicated spaces for creative arts, outdoor and indoor sports
            facilities, and a swimming pool.
          </p>
          <p className="text-sm xl:text-base font-light font-poppins text-white mt-6 xl:mt-12">
            Guided by its motto, “Western Curriculum, Eastern Culture,” PAIS
            continues to bridge global education with local identity, fostering
            a diverse, inclusive community where students are encouraged to
            think globally, uphold moral values, and grow with purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
