"use client";
import React from "react";
import bg from "../../../../../public/contact/shapeBg.png";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import ControlledInputField from "@/components/shared/ControlledInputField";
export default function Subscribe() {
  const methods = useForm({
    // resolver: yupResolver(preRegisterSchema),
  });

  const onSubmit = <T,>(data: T) => {
    console.log(data);
  };
  return (
    <div
      className="bg-main-primary bg-no-repeat bg-cover bg-center py-11"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="container">
        <div className="w-full lg:w-8/12 mx-auto">
          <p className="text-white  font-poppins text-center mb-6">
            To have our newsletter updates delivered to your inbox, enter your
            email address then click &quot;Subscribe.&quot;
          </p>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-col gap-6">
                <div>
                  <ControlledInputField
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-[#F8F8F8] border-main-secondary"
                  />
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    type="submit"
                    className="uppercase bg-main-secondary text-white rounded-sm px-10 py-3 h-10 lg:h-14"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
