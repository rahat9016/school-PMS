"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.png";
import loginImg from "../../../../../public/loginImg.png";
import loginShape1 from "../../../../../public/loginShape1.png";
import loginShape2 from "../../../../../public/loginShape2.png";
import { FormProvider, useForm } from "react-hook-form";
import ControlledInputField from "@/components/shared/ControlledInputField";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/app/api/api";
import loginValidationSchema from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export default function Signing() {
  const { isError, error, isPending, mutateAsync } = useMutation({
    mutationFn: loginRequest,
    onSuccess: () => {},
  });

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {},
  });

  const onSubmit = (data: { email: string; password: string }) => {
    mutateAsync(data)
      .then((res) => {
        if (res.success) {
          toast.success("Login Successful", {
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
      <div
        style={{
          background:
            "radial-gradient(circle,rgba(25, 54, 143, 1) 100%, rgba(25, 54, 143, 1) 100%)",
        }}
        className="min-h-screen px-[81px] relative"
      >
        <Image
          src={loginShape1}
          alt="loginShape1"
          width={157}
          height={150}
          className="absolute top-0 left-0"
        />
        <Image
          src={loginShape2}
          alt="loginShape1"
          width={106}
          height={113}
          className="absolute bottom-0 right-0"
        />
        <div className="grid grid-cols-2 h-screen">
          <div className="flex items-center justify-center">
            <Image
              src={loginImg}
              alt="loginImg"
              width={854}
              height={854}
              className="w-[80%]"
            />
          </div>
          <div className="ml-10 flex items-center">
            <div className="bg-white w-[55%] p-14 rounded-xl">
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={160}
                  height={59}
                  className="mx-auto"
                />
                <p className="text-2xl text-center text-[#363739] font-poppins font-semibold my-8">
                  Secure Access to Effortless
                  <br />
                  <span className="text-main-secondary">
                    Website Management
                  </span>
                </p>
                <p className="text-center font-medium font-poppins text-base mb-5">
                  Please login to continue.
                </p>
              </div>
              <FormProvider {...methods}>
                <form onSubmit={methods?.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-3 lg:gap-5">
                    <div>
                      <ControlledInputField
                        name="email"
                        type="email"
                        placeholder="Email address"
                        className="h-12 bg-white  focus:ring-0 rounded-xl px-3 shadow-none"
                      />
                    </div>
                    <div className="relative">
                      <ControlledInputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="h-12 bg-white focus:ring-0 rounded-xl px-3 shadow-none"
                      />
                    </div>
                    {isError && error && (
                      <div className="h-[38px] w-full flex items-center justify-center bg-rose-200 rounded-md text-rose-700 text-sm font-poppins px-2 py-2">
                        <p>{error.message && error.message}</p>
                      </div>
                    )}
                    <Button
                      disabled={isPending}
                      type="submit"
                      className="w-1/2 h-[38px] lg:h-[48px] mx-auto bg-[#42AD00] hover:bg-[#42AD00] font-poppins font-medium text-sm lg:text-base shadow-md mt-1 lg:mt-3"
                    >
                      {isPending ? "Loading" : "Login"}
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
