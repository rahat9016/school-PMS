"use client";
import ControlledInputField from "@/components/shared/ControlledInputField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { letUsCallValidationSchema } from "../Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledCalendarField from "@/components/shared/ControlledCalendarField";
import ControlledRadioField from "@/components/shared/ControlledRadioField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import { useMutation } from "@tanstack/react-query";
import { appointmentRequest } from "@/app/api/api";
import { toast } from "react-toastify";

export default function LetUsCallYouBack() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: appointmentRequest,
    onSuccess: () => {},
  });
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(letUsCallValidationSchema),
    defaultValues: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutateAsync(data).then((res) => {
      if (res?.success) {
        methods.reset();
        toast.success(
          `${res?.data?.message || "Submitted successfully!"} `
        );
      } else {
        toast.error(`${res?.message || "Something went wrong!"} `);
      }
    });
  };
  return (
    <div className="bg-white pt-7 lg:pt-12 pb-10 lg:pb-20">
      <FormProvider {...methods}>
        <form onSubmit={methods?.handleSubmit(onSubmit)}>
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[5px] h-[24px] bg-main-secondary"></div>
              <h1 className="font-poppins text-lg font-semibold text-charcoalGray">
                Let us call you back
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            </div>
            <div className="flex flex-col lg:flex-row mt-6 gap-4">
              <div className="w-full lg:w-[38%]">
                <InputLabel
                  label="Which grade level your are interested in ?"
                  required
                />
                <ControlledInputField
                  name="gradeLevel"
                  placeholder="Enter grade"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div>
                <InputLabel label="When would you like us to call ?" required />
                <ControlledCalendarField name="preferredCallDate" />
              </div>
              <div>
                <InputLabel
                  label="What time would you like us to call you ? "
                  required
                />
                <ControlledRadioField
                  name="preferredCallTime"
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
            </div>
            <div className="flex flex-col lg:flex-row mt-6 gap-4">
              <div className="w-full lg:w-[38%] ">
                <InputLabel label="Subject" required />
                <ControlledInputField
                  name="subject"
                  placeholder="Enter subject"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div className="w-full lg:w-[62%]">
                <InputLabel label="Additional Message" required />
                <ControlledTextareaField
                  name="additionalMessage"
                  placeholder="Type your message here..."
                  className=""
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-3 lg:mt-6">
              <Button
                type="reset"
                onClick={()=> methods.reset()}
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
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
