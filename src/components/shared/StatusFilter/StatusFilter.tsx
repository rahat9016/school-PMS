import { setSortBy } from "@/lib/redux/features/filter/filterSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface StatusFilterProps {
  statusOptions?: { label: string; value: string }[];
}

const defaultStatuses = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export default function StatusFilter({ statusOptions }: StatusFilterProps) {
  const dispatch = useAppDispatch();

  const optionsToRender =
    statusOptions && statusOptions.length > 0 ? statusOptions : defaultStatuses;

  return (
    <Select
      defaultValue="all"
      onValueChange={(value) => {
        dispatch(setSortBy(value === "all" ? "" : value));
      }}
    >
      <SelectTrigger className="w-44 h-11 border border-light-dark justify-center cursor-pointer">
        {/* <FunnelPlus className="text-secondary-foreground" /> */}
        <SelectValue
          placeholder="All Status"
          className="text-secondary-foreground text-sm font-medium"
        />
      </SelectTrigger>

      <SelectContent className="text-secondary-foreground">
        {optionsToRender.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
