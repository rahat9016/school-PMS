"use client";
import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledRadioField from "@/components/shared/ControlledRadioField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { feedbackValidationSchema } from "../Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackRequest } from "@/app/api/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IFeedback } from "../interface";

export default function FeedbackForm() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: feedbackRequest,
    onSuccess: () => {},
  });
  const methods = useForm({
    resolver: yupResolver(feedbackValidationSchema),
  });

  const onSubmit = (data: IFeedback) => {
    mutateAsync(data)
      .then((res) => {
        if (res.success) {
          methods.reset();
          toast.success(res?.message, {
            position: "bottom-left",
          });
        }
      })
      .catch((error) => {
        toast.error(error?.message, {
          position: "bottom-left",
        });
      });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
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
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-[#F8F8F8]"
              />
            </div>

            <div>
              <InputLabel label="Phone" required />
              <ControlledInputField
                name="phone"
                placeholder="Enter Phone number"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel
                label="Is your relative currently studying in PAIS ?"
                required
              />
              <ControlledRadioField
                className="justify-start"
                name="isRelativeStudying"
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
              />
            </div>
            <div>
              <InputLabel label="Subject" required />
              <ControlledInputField
                name="subject"
                placeholder="Enter your subject"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Additional Message" required />
              <ControlledTextareaField
                name="message"
                placeholder="Enter additional message"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                type="reset"
                className="uppercase bg-[#EFF0EF] text-[#363739] rounded-sm px-6 lg:px-10 py-3 h-10 lg:h-14"
              >
                Clear
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                className="uppercase bg-main-secondary text-white rounded-none px-6 lg:px-10 py-3 h-10 lg:h-14"
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
