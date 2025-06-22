import Image from "next/image";
import shape2 from "../../../../../../public/Facilities/shape2.png";
import chairmanImg from "../../../../../../public/about/chairman.jpeg";
export default function AboutPFCLeadership() {
  return (
    <div className="bg-white py-20">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-32">
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <h1 className="font-poppins text-xl xl:text-3xl font-semibold text-main-primary lg:mb-3">
            ABOUT PFC LEADERSHIP BIO 
            </h1>
            <span className="bg-main-secondary h-[3px] w-[97px] block mb-14"> </span>
            <div className="mt-7">
              <p className="text-sm lg:text-base font-light font-poppins text-darkGray -mt-7">
                The Parents & Faculty Community (PFC) Leadership at Pan-Asia International School fosters strong collaboration between parents and staff. This dedicated team supports school events, encourages open communication, and works to enhance the student experience. United by a shared commitment to student success, PFC leaders help build a connected and caring school community.
              </p>
              <div className="flex items-end">
                <p className="text-sm xl:text-base font-medium font-poppins text-darkGray mt-2">
                  Whether it’s coordinating cultural celebrations, supporting academic programs, or lending a hand during school activities, the PFC Leadership team believes in the power of partnership. Together, we aim to create a nurturing space where every student can thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-7/12">
            <div
              className="w-full p-4 object-contain bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${shape2.src})`,
              }}
            >
              <Image
                src={chairmanImg}
                alt="chairmanImg"
                width={590}
                height={410}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
