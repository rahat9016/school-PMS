import { Controller, useFormContext } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

interface ControlledRadioFieldProps {
  name: string;
  options: { label: string; value: string }[];
  className?: string;
  radioGroupClass?: string;
}

const ControlledRadioField: React.FC<ControlledRadioFieldProps> = ({
  name,
  options,
  className,
  radioGroupClass,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          <RadioGroup
            {...field}
            onValueChange={field.onChange}
            value={field.value ?? ""}
            className={cn(
              "flex items-center flex-wrap",
              radioGroupClass
            )}
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-1">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="border-[#CDCDCD] bg-[#e6e6e6]"
                />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
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

export default ControlledRadioField;
