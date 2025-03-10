import React from "react";
import bg2 from "../../../../../../public/academic/ParentInformationShape.png";

export default function OnlineAppointmentSection() {
  return (
    <div
      className="bg-main-primary bg-no-repeat bg-contain bg-center pt-10 lg:pt-20 pb-14 lg:pb-28"
      style={{
        backgroundImage: `url(${bg2.src})`,
      }}
    >
      <div className="container">
        <div>
          <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-white uppercase text-center">
          Online Appointment
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px] mt-2 mx-auto"></span>
        </div>
        <div>
            <p className="text-sm lg:text-base font-poppins font-normal text-white w-full lg:w-3/4 mx-auto text-center mt-10">โรงเรียนนานาชาติแพน-เอเซีย เรียนเชิญทุกท่านร่วมนัดหมายผ่านช่องทางออนไลน์– แผนกการตลาด นัดหมายเพื่อสอบถามข้อมูลและการสมัครเรียน– แผนกวิชาการ หัวหน้าฝ่ายอนุบาลและประถม, หัวหน้าฝ่ายมัธยม (MYP Year1-5) และหัวหน้าฝ่าย IB/DP (Grade11-12)เพื่อสอบถามและเยี่ยมชมโรงเรียนผ่านช่องทางออนไลน์ กรุณาติดต่อเบอร์ดังนี้ 083-0962291 หรือกรอกแบบฟอร์มออนไลน์</p>
            <p className="text-sm lg:text-base font-poppins font-normal text-white text-center mt-8">Pan-Asia International School is now inviting you for an online appointment with; – School Marketing Team for school inquiry and enrollment – School Academic Management Kindergarten and Primary Coordinator MYP DP Coordinator (for Grade 6 –Grade 10) IB DP Coordinator (for Grade 11 – Grade 12) To watch online school tour. Please contact us at 083-0962291 or complete the form below.</p>
        </div>
      </div>
    </div>
  );
}
