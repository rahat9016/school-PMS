"use client";
import ControlledCalendarField from "@/components/shared/ControlledCalendarField";
import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledRadioField from "@/components/shared/ControlledRadioField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { visitFormSchema } from "./Schema";
import img from "../../../../../../public/academic/OpenHouseImg.jpg"
import Image from "next/image";
export default function BookForSchoolTourSection() {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(visitFormSchema),
    defaultValues: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="bg-white">
      <div className="container pb-[64px]">
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-main-primary uppercase ">
            Open House 2022
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px] mt-2"></span>
          <p className="font-poppins text-sm lg:text-base font-medium text-charcoalGray mt-4 mb-6">You are always welcome to visit us in person. This is the best way to learn about Pan-Asia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image src={img} alt="open house" width={524} height={524} />
            <p  className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">Pan-Asia International School will host an Open House on October 10, 2022 from 9:00-11:00am to welcome prospective parents and students who wish to visit our campus and experience first-hand our warm and welcoming community.</p>
            <p  className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">This is a great opportunity for both parents and students to meet our management team, get to know our curriculum and find out how we can support your child/ren to ensure that they learn, grow and discover their fullest potential. Parents and students will also be able to see our classes in action during our guided tour.</p>
            <p  className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">Register now! We hope to see you on October 10, 2022.</p>
          </div>
          <div>
          <div className="flex items-center gap-4 mb-6">
              <div className="w-[5px] h-[24px] bg-main-secondary"></div>
              <h1 className="font-poppins text-lg font-semibold text-charcoalGray">
              Book for School Tour
              </h1>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={methods?.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div>
                    <InputLabel label="First Name" required />
                    <ControlledInputField
                      name="firstName"
                      placeholder="Enter your first name"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Last Name" required />
                    <ControlledInputField
                      name="lastName"
                      placeholder="Enter your last name"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Email" required />
                    <ControlledInputField
                      name="email"
                      placeholder="Enter your email address"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Mobile Number" required />
                    <ControlledInputField
                      name="mobileNumber"
                      placeholder="Enter your mobile phone"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel
                      label="When would you like us to call ?"
                      required
                    />
                    <ControlledCalendarField name="date" />
                  </div>
                  <div>
                    <InputLabel
                      label="Indicate the Grade Level your are interested in"
                      required
                    />
                    <ControlledInputField
                      name="grade"
                      placeholder="Enter grade"
                      className="bg-[#F8F8F8]"
                    />
                  </div>  
                  <div>
                    <InputLabel
                      label="What time would you like us to call you ? "
                      required
                    />
                    <ControlledRadioField
                      name="time"
                      options={[
                        { label: "10:00", value: "10:00" },
                        { label: "11:00", value: "11:00" },
                        { label: "12:00", value: "12:00" },
                        { label: "13:00", value: "13:00" },
                        { label: "14:00", value: "14:00" },
                        { label: "15:00", value: "15:00" },
                      ]}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <InputLabel label="Subject" required />
                    <ControlledInputField
                      name="subject"
                      placeholder="Enter subject"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Additional Message" required />
                    <ControlledTextareaField
                      name="message"
                      placeholder="Type your message here..."
                      className=""
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <Button
                    type="reset"
                    className="uppercase bg-[#EFF0EF] text-[#363739] rounded-sm px-6 lg:px-10 py-3 h-10 lg:h-14"
                  >
                    Clear
                  </Button>
                  <Button
                    type="submit"
                    className="uppercase bg-main-secondary text-white rounded-sm px-6 lg:px-10 py-3 h-10 lg:h-14"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
