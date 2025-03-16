import React from "react";

import { Input } from "../ui/input";
import { Controller, useFormContext } from "react-hook-form";

interface ControlledInputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const ControlledInputField: React.FC<ControlledInputFieldProps> = ({
  name,
  type,
  placeholder,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Input
            type={type}
            {...field}
            value={field.value ?? ""}
            placeholder={placeholder}
            error={error?.message}
            className={className}
            showErrorMessage={!!error}
          />
        );
      }}
    />
  );
};

export default ControlledInputField;
