import { MapPin, Send, Smartphone } from "lucide-react";
import React from "react";
import FeedbackForm from "./FeedbackForm";
import Image from "next/image";
import facebook from "../../../../../public/facebook.png";
import youtube from "../../../../../public/youtube.png";
import instagram from "../../../../../public/instagram.png";
export default function KeepTouch() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h1 className="text-main-primary  text-2xl font-poppins font-semibold">
              Keep in Touch
            </h1>
            <span className="block bg-main-secondary h-[3px] w-[140px]"></span>
            <p className="text-sm lg:text-base font-poppins text-black-dark font-normal my-4 lg:my-8">
              <span className="text-[#4A7FE9]">
                Pan-Asia International School
              </span>
               located on Chalermprakiat Rama 9 Road in southeastern Bangkok’s
              Prawet district. PAIS has grown rapidly from a single building in
              2004 to its current structure, which includes two buildings, two
              football pitches, two covered gymnasium courts, and two covered
              swimming pools. PAIS currently offers classes from kindergarten to
              Grade twelve.
            </p>
            <p className="text-sm lg:text-base font-poppins text-black-dark font-normal">
              It will be our honor to have you getting in touch with us; we are
              always here to assist regardless of any kinds of questions. Just
              <span className="text-[#4A7FE9]"> call us</span>, or fill in the
              form below, or send a message via 
              <span className="text-[#4A7FE9]">Facebook</span>; We will get back
              to you as soon as possible.
            </p>
            <span className="block bg-pureWhite h-[2px] w-full mt-20 lg:mt-[86px]"></span>
            <div className="my-8"><iframe className="w-full h-[316px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2500156030646!2d100.68655369999999!3d13.703301899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d609576c6bca7%3A0x807b9f247e021ddf!2sPan-Asia%20International%20School!5e0!3m2!1sen!2sbd!4v1742376844068!5m2!1sen!2sbd" allowFullScreen={true}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            <div>
              <ul>
                <li className="flex items-start gap-2 font-poppins font-medium text-black-dark mb-4">
                  <div className="w-5 h-5">
                  <MapPin />
                  </div>
                  18 Chaloem Phrakiat Ratchakan Thi 9 Road Soi 67, Dok Mai,
                  Prawet, Bangkok 10250 Thailand
                </li>
                <li className="flex items-start gap-2 font-poppins font-medium text-black-dark mb-4">
                  <Smartphone />
                  +66-2-347-2280
                </li>
                <li className="flex items-start gap-2 font-poppins font-medium text-black-dark mb-4">
                  <Smartphone />
                  +66-2-726-6341
                </li>
                <li className="flex items-start gap-2 font-poppins font-medium text-black-dark mb-4">
                  <Send />
                  info@pais.ac.th
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-forestWhite p-6 border border-slate-gray rounded-lg">
            <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-10">
              <div className="w-[3px] h-[24px]  bg-main-secondary"></div>
              <h1 className="font-poppins text-sm lg:text-lg font-semibold text-black-dark">
                Feedback Form
              </h1>
            </div>
            <FeedbackForm />
          </div>
        </div>
        <span className="block bg-pureWhite h-[2px] w-full mt-6 lg:my-10"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h1 className="text-main-primary  text-base font-poppins font-medium">
              Admissions and Marketing แผนกการตลาด
            </h1>
            <h3 className="text-main-primary  text-base font-poppins font-medium">
              (รับสมัครนักเรียนและการตลาด)
            </h3>
            <p className="text-black-dark  text-sm font-poppins font-normal mt-2">
              083-0962291
            </p>
          </div>
          
          <div>
            <h1 className="text-main-primary  text-base font-poppins font-medium">
            Finance แผนกการเงิน
            </h1>
            <p className="text-black-dark  text-sm font-poppins font-normal mt-2">
            083-0962290
            </p>
          </div>
          <div>
            <h1 className="text-main-primary  text-base font-poppins font-medium">
            Human Resource
            </h1>
            <p className="text-black-dark  text-sm font-poppins font-normal mt-2">
            hr@pais.ac.th
            </p>
          </div>
          <div>
            <h1 className="text-main-primary  text-base font-poppins font-medium">
            Let&apos;s Connect
            </h1>
            <div className="flex gap-3 mt-2">
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                  <Image src={youtube} alt="youtube" width={24} height={24} />
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
