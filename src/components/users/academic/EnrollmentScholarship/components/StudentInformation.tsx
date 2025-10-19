"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import bg from "../../../../../../public/academic/StudentInformationShape.png";
import bg2 from "../../../../../../public/academic/ParentInformationShape.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationStudentAllInformationSchema } from "../Schema";
import ControlledInputField from "@/components/shared/ControlledInputField";
import InputLabel from "@/components/shared/InputLabel";
import ControlledSelectField from "@/components/shared/ControlledSelectField";
import ControlledTextareaField from "@/components/shared/ControlledTextAreaField";
import { admissionRequest } from "@/app/api/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
export default function StudentInformation() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: admissionRequest,
    onSuccess: () => {},
  });
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationStudentAllInformationSchema),
    // defaultValues: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    mutateAsync(data).then((res)=> {
      console.log(res?.message)
      if(res.success){
        toast.success(`${res.data.message || "Admission fetched successfully!"} `)
      }else{
        toast.error(`${res.message || "Something went wrong!"} `)
      }
    })
  };
  const {
    formState: { errors },
  } = methods;
  console.log({ errors });
  
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods?.handleSubmit(onSubmit)}>
          <div
            className="bg-[#F2FBFD] bg-no-repeat bg-contain bg-center py-10 "
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            <div className="container">
              <div className="flex flex-col items-center">
                <h3 className="text-charcoalGray text-2xl font-semibold font-poppins">
                  Online Inquiry
                </h3>
                <p className="text-charcoalGray text-base font-normal font-poppins w-full lg:w-[40%] text-center mt-2">
                  When we received your request, we will send you confirmation
                  email with instructions.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-10 mb-4">
                <div className="w-[5px] h-[24px] bg-main-secondary"></div>
                <h1 className="font-poppins text-lg font-semibold text-charcoalGray">
                  Student Information
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
                  <InputLabel label="Middle Name" required />
                  <ControlledInputField
                    name="middleName"
                    placeholder="Enter your middle Name"
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
                  <InputLabel label="Nick Name" />
                  <ControlledInputField
                    name="nickName"
                    placeholder="Enter your nick name"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Gender" required />
                  <ControlledSelectField
                    name="gender"
                    className="bg-[#F8F8F8]"
                    selectLabel="-- Select Gender --"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Others", label: "Others" },
                    ]}
                  />
                </div>
                <div>
                  <InputLabel label="Nationality" required />
                  <ControlledInputField
                    name="nationality"
                    placeholder="Enter your nationality"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Phone" />
                  <ControlledInputField
                    name="phone"
                    placeholder="Enter phone number"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Email" required />
                  <ControlledInputField
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Address" required />
                  <ControlledInputField
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Grade Applying For" required />
                  <ControlledSelectField
                    name="gradeApplyingFor"
                    className="bg-[#F8F8F8]"
                    selectLabel="-- Select Grade --"
                    options={[
                      { value: "nursery", label: "Nursery" },
                      { value: "KG-1", label: "KG-1" },
                      { value: "KG-2", label: "KG-2" },
                      { value: "KG-3", label: "KG-3" },
                      { value: "G-1", label: "G-1" },
                      { value: "G-2", label: "G-2" },
                      { value: "G-3", label: "G-3" },
                      { value: "G-4", label: "G-4" },
                      { value: "G-5", label: "G-5" },
                      { value: "G-6", label: "G-6" },
                      { value: "G-7", label: "G-7" },
                      { value: "G-8", label: "G-8" },
                      { value: "G-9", label: "G-9" },
                      { value: "G-10", label: "G-10" },
                      { value: "G-11", label: "G-11" },
                      { value: "G-12", label: "G-12" },
                    ]}
                  />
                </div>
                <div>
                  <InputLabel label="Year Applying For" required />
                  <ControlledSelectField
                    name="yearApplyingFor"
                    className="bg-[#F8F8F8]"
                    selectLabel="-- Select Applying --"
                    options={[
                      { value: "2021-2022", label: "2021-2022" },
                      { value: "2022-2023", label: "2022-2023" },
                      { value: "2023-2024", label: "2023-2024" },
                      { value: "2024-2025", label: "2024-2025" },
                    ]}
                  />
                </div>
                <div>
                  <InputLabel label="Current School Name" />
                  <ControlledInputField
                    name="currentSchool"
                    type="text"
                    placeholder="Enter your current school name"
                    className="bg-[#F8F8F8]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-main-primary bg-no-repeat bg-contain bg-center pt-8  pb-12"
            style={{
              backgroundImage: `url(${bg2.src})`,
            }}
          >
            <div className="container">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[5px] h-[24px] bg-main-secondary"></div>
                <h1 className="font-poppins text-lg font-semibold text-white">
                  Parent/Guardian Information
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-end gap-4">
                  <div className="w-[20%]">
                    <InputLabel
                      label="First Name"
                      className="text-white"
                      required
                    />
                    <ControlledSelectField
                      className="bg-[#F8F8F8]"
                      name="parentTitle"
                      selectLabel="-- Select Title --"
                      options={[
                        { value: "Mr.", label: "Mr." },
                        { value: "Mrs.", label: "Mrs." },
                        { value: "Ms.", label: "Ms." },
                        { value: "Dr.", label: "Dr." },
                      ]}
                    />
                  </div>
                  <div className="w-[80%]">
                    <ControlledInputField
                      name="parentFirstName"
                      placeholder="Enter your first name"
                      className="bg-[#F8F8F8]"
                    />
                  </div>
                </div>
                <div>
                  <InputLabel label="Middle Name" className="text-white" />
                  <ControlledInputField
                    name="parentMiddleName"
                    placeholder="Enter your middle Name"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel
                    label="Last Name"
                    required
                    className="text-white"
                  />
                  <ControlledInputField
                    name="parentLastName"
                    placeholder="Enter your last name"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel
                    label="Relation"
                    className="text-white"
                    required
                  />
                  <ControlledSelectField
                    className="bg-[#F8F8F8]"
                    name="parentRelation"
                    selectLabel="-- Select Relationship --"
                    options={[
                      { value: "Father", label: "Father" },
                      { value: "Mother", label: "Mother" },
                      { value: "Others", label: "Others" },
                    ]}
                  />
                </div>

                <div>
                  <InputLabel
                    label="Nationality"
                    className="text-white"
                    required
                  />
                  <ControlledInputField
                    name="parentNationality"
                    placeholder="Enter nationality"
                    className="bg-[#F8F8F8]"
                  />
                </div>
                <div>
                  <InputLabel label="Phone" className="text-white" />
                  <ControlledInputField
                    className="bg-[#F8F8F8]"
                    name="parentPhone"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <InputLabel label="Email" className="text-white" />
                  <ControlledInputField
                    className="bg-[#F8F8F8]"
                    type="email"
                    name="parentEmail"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <InputLabel label="Address" className="text-white" />
                  <ControlledInputField
                    className="bg-[#F8F8F8]"
                    name="parentAddress"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white bg-no-repeat bg-contain bg-center pt-8  pb-12">
            <div className="container">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[5px] h-[24px] bg-main-secondary"></div>
                <h1 className="font-poppins text-lg font-semibold text-charcoalGray">
                  Additional Information
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="mt-6">
                  <ControlledSelectField
                    name="referralSource"
                    className="bg-[#F8F8F8]"
                    selectLabel="Where did you hear from our school?"
                    options={[]}
                  />
                </div>
                <div>
                  <InputLabel label="Comments" />
                  <ControlledTextareaField
                    name="comments"
                    placeholder="Type your comments"
                    className="border border-[#D4D4D4] focus:outline-none bg-[#F8F8F8]"
                  />
                </div>
              </div>
              <div
                className="flex justify-end gap-2 mt-6"
              >
                <Button
                  type="reset"
                  // onClick={notify}
                  className="uppercase bg-[#EFF0EF] text-[#363739] rounded-none px-6 lg:px-10 py-3 h-10 lg:h-14"
                >
                  Clear
                </Button>
                <Button
                disabled={isPending}
                  type="submit"
                  className="uppercase bg-main-secondary text-white rounded-none px-6 lg:px-10 py-3 h-10 lg:h-14"
                >
                  {isPending ? "Sending..." :"Submit"} 
                </Button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
