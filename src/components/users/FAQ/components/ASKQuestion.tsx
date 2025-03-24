"use client"
import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function ASKQuestion() {
  const methods = useForm({
    // resolver: yupResolver(preRegisterSchema),
  });

  const onSubmit = <T,>(data: T) => {
    console.log(data);
  };
  return (
    <div className="bg-aliceBlue">
      <div className="container py-20 lg:py-[154px]">
      <h1 className="text-main-primary  text-2xl font-poppins font-semibold">Ask a Question</h1>
      <span className="block bg-main-secondary h-[3px] w-[140px]  mb-10 lg:mb-[64px]"></span>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <InputLabel label="First Name" required />
                <ControlledInputField
                  name="parentName"
                  placeholder="Enter your first name"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div>
                <InputLabel label="Last Name" required />
                <ControlledInputField
                  name="studentName"
                  placeholder="Enter your last name"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div>
                <InputLabel label="Email" required />
                <ControlledInputField
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div>
                <InputLabel label="Phone" required />
                <ControlledInputField
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="bg-[#F8F8F8]"
                />
              </div>
              <div>
                <InputLabel label="Question" required />
                <ControlledTextareaField
                  name="question"
                  placeholder="Type your question here..."
                  className="bg-[#F8F8F8]"
                />
              </div>
              
            </div>
            <div className="flex justify-end gap-4 mt-10 lg:mt-32">
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
  );
}
