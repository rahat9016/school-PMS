import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface ControlledSelectFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  selectLabel?: string;
}

const ControlledSelectField: React.FC<ControlledSelectFieldProps> = ({
  name,
  options,
  selectLabel,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div>
            <Select
              {...field}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <SelectTrigger
                className={cn(
                  `h-[42px] bg-white outline-none ${
                    error
                      ? "border border-rose-500"
                      : "focus:ring-grayDark focus:border-[#D9E3E7]"
                  } focus:border-none text-[#646464]`,
                  className
                )}
              >
                <SelectValue
                  className="text-[#646464] text-sm font-normal"
                  placeholder={selectLabel || "Select an option"}
                />
              </SelectTrigger>
              <SelectContent className="max-h-[310px] overflow-y-auto">
                {options.map((option, index) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className={`${
                      options.length - 1 !== index && "border-b"
                    }  border-[#EFF0EF] rounded-none py-[10px]`}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && (
              <div className="text-rose-500 text-xs mt-1 pl-2">
                {error.message}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default ControlledSelectField;
