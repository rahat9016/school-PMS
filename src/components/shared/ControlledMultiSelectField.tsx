import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

interface ControlledMultiSelectFieldProps {
  name: string;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const ControlledMultiSelectField: React.FC<ControlledMultiSelectFieldProps> = ({
  name,
  options,
  placeholder = "Select...",
  className,
}) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const selectedValues: string[] = field.value || [];

          const toggleValue = (val: string) => {
            const next = selectedValues.includes(val)
              ? selectedValues.filter((v) => v !== val)
              : [...selectedValues, val];
            field.onChange(next);
          };

          const removeValue = (val: string, e: React.MouseEvent) => {
            e.stopPropagation();
            field.onChange(selectedValues.filter((v) => v !== val));
          };

          const selectedLabels = options.filter((opt) =>
            selectedValues.includes(opt.value),
          );

          return (
            <>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "flex min-h-10.5 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-1 text-sm transition-colors",
                      error
                        ? "border border-rose-500"
                        : "focus:ring-grayDark focus:border-[#D9E3E7]",
                      className,
                    )}
                  >
                    <div className="flex flex-wrap gap-1 flex-1">
                      {selectedLabels.length > 0 ? (
                        selectedLabels.map((opt) => (
                          <span
                            key={opt.value}
                            className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-md"
                          >
                            {opt.label}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-rose-500"
                              onClick={(e) => removeValue(opt.value, e)}
                            />
                          </span>
                        ))
                      ) : (
                        <span className="text-muted-foreground">
                          {placeholder}
                        </span>
                      )}
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[var(--radix-popover-trigger-width)] p-1"
                  align="start"
                >
                  <div className="max-h-60 overflow-y-auto">
                    {options.length === 0 ? (
                      <div className="py-2 px-3 text-sm text-muted-foreground">
                        No options available
                      </div>
                    ) : (
                      options.map((opt) => {
                        const isSelected = selectedValues.includes(opt.value);
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleValue(opt.value)}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-sm px-3 py-1.5 text-sm cursor-pointer hover:bg-accent",
                              isSelected && "bg-accent/50",
                            )}
                          >
                            <div
                              className={cn(
                                "flex h-4 w-4 items-center justify-center rounded-sm border",
                                isSelected
                                  ? "bg-primary border-primary text-primary-foreground"
                                  : "border-input",
                              )}
                            >
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                            {opt.label}
                          </button>
                        );
                      })
                    )}
                  </div>
                </PopoverContent>
              </Popover>
              {error && (
                <div className="text-rose-500 text-xs mt-1 pl-2">
                  {error.message}
                </div>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default ControlledMultiSelectField;
