import { pfcEventsData } from "@/lib/data/data";
import PfcCard from "./PfcCard";

export default function PfcEvent() {
  return (
    <div className=" bg-white py-10 lg:pt-[104px] lg:pb-12  ">
      <div className="container">
        {/* header  */}
        <h1 className="font-poppins text-xl xl:text-3xl font-semibold text-main-primary lg:mb-3">
          PFC Events
        </h1>
        <span className="bg-main-secondary h-[3px] w-[97px] block mb-14"></span>

        <div className=" pfcCard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8   ">
          {pfcEventsData?.map((item) => <PfcCard key={item?.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}
