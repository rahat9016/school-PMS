"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { preRegisterSchema } from "../schema";
import ControlledInputField from "@/components/shared/ControlledInputField";
import ControlledRadioField from "@/components/shared/ControlledRadioField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { preRegisterRequest } from "@/app/api/api";
import { toast } from "react-toastify";
import { IPreRegister } from "../interface";

export default function PreRegister() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: preRegisterRequest,
    onSuccess: () => {},
  });

  const methods = useForm({
    resolver: yupResolver(preRegisterSchema),
  });

  const onSubmit = (data: IPreRegister) => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <InputLabel label="Parent Name" required />
              <ControlledInputField
                name="parentName"
                placeholder="Enter your first name"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Student’s Name" required />
              <ControlledInputField
                name="studentName"
                placeholder="Enter your middle name"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Parent’s Email" required />
              <ControlledInputField
                type="email"
                name="parentEmail"
                placeholder="Enter your email address"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Student’s Gender" required />
              <ControlledRadioField
                className="justify-start"
                name="studentGender"
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
              />
            </div>
            <div>
              <InputLabel label="Parent’s Contact Number" required />
              <ControlledInputField
                type="tel"
                name="parentContactNumber"
                placeholder="Enter contact number"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Student’s Date of Birth" required />
              <ControlledInputField
                name="studentDOB"
                placeholder="Enter date of birth"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Email" required />
              <ControlledInputField
                name="email"
                placeholder="Enter email address"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Student’s Nationality" required />
              <ControlledInputField
                name="studentNationality"
                placeholder="Enter student nationality"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Grade" required />
              <ControlledRadioField
                name="grade"
                options={[
                  { label: "Kindergarten 2", value: "kg2" },
                  { label: "Grade 1", value: "grade1" },
                  { label: "Grade 2", value: "grade2" },
                  { label: "Grade 3", value: "grade3" },
                  { label: "Grade 4", value: "grade4" },
                  { label: "Grade 5", value: "grade5" },
                  { label: "Grade 6", value: "grade6" },
                  { label: "Grade 7", value: "grade7" },
                  { label: "Grade 8", value: "grade8" },
                ]}
                radioGroupClass="grid grid-cols-2 lg:grid-cols-4 gap-8"
              />
            </div>
            <div>
              <InputLabel label="Parent’s Email" required />
              <ControlledInputField
                name="currentSchool"
                placeholder="Enter current school"
                className="bg-[#F8F8F8]"
              />
            </div>
            <div>
              <InputLabel label="Additional Info" required />
              <ControlledTextareaField
                name="additionalInfo"
                placeholder="Enter additional information"
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
