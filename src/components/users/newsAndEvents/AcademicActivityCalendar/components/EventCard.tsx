import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Clock2, MapPin } from "lucide-react";

export default function EventCard({ index }: { index: number }) {
  return (
    <Card
      className={`  ${index === 0 ? " rounded-none rounded-t-md" : " rounded-none"}  shadow-none     `}
    >
      <CardContent className=" pb-0 pt-6 flex justify-between items-start gap-3  ">
        {/* card left section date , */}
        <CardTitle className="  w-[30%] bg-main-primary text-white flex flex-col  items-center  p-3 rounded-full  ">
          <span className=" pb-1 ">28</span>
          <span className=" uppercase font-light ">Aug</span>
          <span className=" font-light ">2025</span>
        </CardTitle>

        {/* card right section title  */}
        <div className="   ">
          <CardTitle className=" text-base min-[330]:text-lg lg:text-xl xl:text-2xl text-main-primary mb-3   ">
            Student Achievement Awards Night
          </CardTitle>

          <CardDescription className="  flex items-center gap-2 my-2 ">
            <Clock2 />
            <span>10:00 AM - 12:00PM</span>
          </CardDescription>

          <CardDescription className="  flex items-center gap-2 my-2 ">
            <MapPin />
            <span>Event Hall 02</span>
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className=" flex justify-center mt-4  ">
        <CardDescription className=" text-center text-link cursor-pointer   ">
          Read More...
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
