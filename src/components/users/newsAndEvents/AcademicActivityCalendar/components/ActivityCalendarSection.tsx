import Image from 'next/image';
import IB from "../../../../../../public/newsEvents/Academic/IB.png";
import sep from "../../../../../../public/newsEvents/Academic/sep-24.png";
import bg from "../../../../../../public/newsEvents/Academic/shape2.png";
export default function ActivityCalendarSection() {
  return (
    <div>
        <div
        className="bg-[#FFF1E3] bg-no-repeat bg-cover bg-center pt-10 pb-20"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div>
          <Image src={IB} alt="sep-24" width={141} height={182} className='mx-auto -mt-20 mb-5 lg:mb-10' />
            <h1 className="text-center text-main-primary text-xl lg:text-3xl font-bold">
              Activity Calendar
            </h1>
            <span className="w-[140px] h-[3px] bg-main-secondary mx-auto mt-2 mb-10 block"></span>
            <Image src={sep} alt="sep-24" width={848} height={848} className='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}
