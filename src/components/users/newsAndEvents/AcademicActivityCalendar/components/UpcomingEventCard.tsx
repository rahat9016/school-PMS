import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock2 } from "lucide-react";

export default function UpcomingEventCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription className=" text-lg text-main-secondary ">
          November 04
        </CardDescription>
        <CardDescription className="  flex items-center gap-2 ">
          <Clock2 />

          <span>10:00 AM - 12:00PM</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="  pb-3 ">
        <CardTitle className=" text-xl min-[345px]:text-2xl text-main-primary ">
          Student Achievement Awards Night
        </CardTitle>

        <CardDescription className=" mt-3 text-base min-[345px]:text-lg text-link ">
          School open day
        </CardDescription>
      </CardContent>

      <Separator className=" w-[80%] mx-auto   mb-3" />

      <CardFooter>
        <CardDescription className=" line-clamp-1 ">
          Pan Asia International School (PAIS) is asdfasdfasdf
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
