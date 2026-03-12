import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ControlledTimeFieldProps {
  name: string;
  className?: string;
}

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);
const periods = ["AM", "PM"];

function parseTime(value: string): {
  hour: string;
  minute: string;
  period: string;
} {
  if (!value) return { hour: "", minute: "", period: "" };

  const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (match) {
    return {
      hour: match[1].padStart(2, "0"),
      minute: match[2],
      period: match[3].toUpperCase(),
    };
  }
  return { hour: "", minute: "", period: "" };
}

const ControlledTimeField: React.FC<ControlledTimeFieldProps> = ({
  name,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TimeSelects
            value={field.value || ""}
            onChange={field.onChange}
            error={error?.message}
            className={className}
          />
        );
      }}
    />
  );
};

function TimeSelects({
  value,
  onChange,
  error,
  className,
}: {
  value: string;
  onChange: (val: string) => void;
  error?: string;
  className?: string;
}) {
  const parsed = parseTime(value);
  const [hour, setHour] = useState(parsed.hour);
  const [minute, setMinute] = useState(parsed.minute);
  const [period, setPeriod] = useState(parsed.period);

  // Sync local state when external value changes (e.g. form reset)
  useEffect(() => {
    const p = parseTime(value);
    setHour(p.hour);
    setMinute(p.minute);
    setPeriod(p.period);
  }, [value]);

  // Update form value whenever all three parts are filled
  useEffect(() => {
    if (hour && minute && period) {
      const formatted = `${hour}:${minute} ${period}`;
      if (formatted !== value) {
        onChange(formatted);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hour, minute, period]);

  const selectTriggerClass = cn(
    "flex h-10.5 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-none transition-colors",
    error ? "border-rose-500" : "focus:ring-grayDark focus:border-[#D9E3E7]",
    className,
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <Select value={hour} onValueChange={setHour}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="HH" />
          </SelectTrigger>
          <SelectContent>
            {hours.map((h) => (
              <SelectItem key={h} value={h}>
                {h}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={minute} onValueChange={setMinute}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="MM" />
          </SelectTrigger>
          <SelectContent>
            {minutes.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="AM/PM" />
          </SelectTrigger>
          <SelectContent>
            {periods.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {error && <div className="text-rose-500 text-xs mt-1 pl-2">{error}</div>}
    </div>
  );
}

export default ControlledTimeField;
