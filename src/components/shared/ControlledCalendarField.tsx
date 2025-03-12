import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import CalenderIcon from "../../../public/academic/calendar.png";
import Image from "next/image";
interface ControlledInputFieldProps {
  name: string;
  className?: string;
}

const ControlledCalendarField: React.FC<ControlledInputFieldProps> = ({
  name,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  `w-[327px] h-[40px] justify-between text-left font-normal bg-[#f8f8f8] hover:bg-[#f8f8f8] ${
                    error
                      ? "border border-rose-500"
                      : "focus:ring-grayDark focus:border-[#D9E3E7]"
                  }`,
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "dd/MM/yyyy")
                ) : (
                  <span className="text-[#646464]">DD/MM/YYYY</span>
                )}
                <Image
                  src={CalenderIcon}
                  alt="CalenderIcon"
                  width={20}
                  height={20}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {error && (
            <div className="text-rose-500 text-xs mt-1 pl-2">
              {error.message}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default ControlledCalendarField;
