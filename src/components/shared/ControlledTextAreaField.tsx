import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ControlledTextareaFieldProps {
  name: string;
  placeholder?: string;
  className?:string
}

const ControlledTextareaField: React.FC<ControlledTextareaFieldProps> = ({
  name,
  placeholder,
  className
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Textarea
          {...field}
          placeholder={placeholder}
          className={cn("h-[160px]", className)}
        />
      )}
    />
  );
};

export default ControlledTextareaField;
