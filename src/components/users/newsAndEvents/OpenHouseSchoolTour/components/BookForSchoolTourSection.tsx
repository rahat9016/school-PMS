"use client";
import ControlledCalendarField from "@/components/shared/ControlledCalendarField";
import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledRadioField from "@/components/shared/ControlledRadioField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { visitFormSchema } from "../Schema";
import img from "../../../../../../public/academic/OpenHouseImg.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { schoolTourBookingRequest } from "@/app/api/api";
import { toast } from "react-toastify";
export default function BookForSchoolTourSection() {
  const pathname = usePathname();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: schoolTourBookingRequest,
    onSuccess: () => {},
  });
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(visitFormSchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        target?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutateAsync(data).then((res) => {
      if (res?.success) {
        methods.reset();
        toast.success(`${res?.data?.message || "Submitted successfully!"} `);
      } else {
        toast.error(`${res?.message || "Something went wrong!"} `);
      }
    });
  };
  return (
    <div className="bg-white" id="openHouse">
      <div className="container pb-[64px]">
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-main-primary uppercase ">
            Open House 2022
          </h1>
          <span className="block bg-main-secondary h-[3px] w-[140px] mt-2"></span>
          <p className="font-poppins text-sm lg:text-base font-medium text-charcoalGray mt-4 mb-6">
            You are always welcome to visit us in person. This is the best way
            to learn about Pan-Asia.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image src={img} alt="open house" width={524} height={524} />
            <p className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">
              Pan-Asia International School will host an Open House on October
              10, 2022 from 9:00-11:00am to welcome prospective parents and
              students who wish to visit our campus and experience first-hand
              our warm and welcoming community.
            </p>
            <p className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">
              This is a great opportunity for both parents and students to meet
              our management team, get to know our curriculum and find out how
              we can support your child/ren to ensure that they learn, grow and
              discover their fullest potential. Parents and students will also
              be able to see our classes in action during our guided tour.
            </p>
            <p className="font-poppins text-sm lg:text-base font-normal text-charcoalGray mt-4 mb-6">
              Register now! We hope to see you on October 10, 2022.
            </p>
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
                    <InputLabel label="Parent Name" required />
                    <ControlledInputField
                      name="parentName"
                      placeholder="Enter parent name"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Student Name" required />
                    <ControlledInputField
                      name="studentName"
                      placeholder="Enter student name"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Student Current School" required />
                    <ControlledInputField
                      name="studentCurrentSchool"
                      placeholder="Enter student current school"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Student Current Grade " required />
                    <ControlledInputField
                      name="studentCurrentGrade"
                      placeholder="Enter student current grade"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                  <div>
                    <InputLabel label="Student Birth Date" required />
                    <ControlledCalendarField name="studentBirthDate" />
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
                    <InputLabel label="Student Birth Date" required />
                    <ControlledCalendarField name="studentBirthDate" />
                  </div>
                  <div>
                    <InputLabel label="Date for School Tour" required />
                    <ControlledCalendarField name="schoolTourDate" />
                  </div>
                  <div>
                    <InputLabel
                      label="What time would you like us to welcome you ?"
                      required
                    />
                    <ControlledRadioField
                      name="preferredTime"
                      options={[
                        { label: "09:00", value: "09:00" },
                        { label: "10:30", value: "10:30" },
                        { label: "12:00", value: "12:00" },
                        { label: "13:30", value: "13:30" },
                      ]}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <InputLabel label="Mobile Number" required />
                    <ControlledInputField
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
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
                    {isPending ? "Sending..." : "Submit"}
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
