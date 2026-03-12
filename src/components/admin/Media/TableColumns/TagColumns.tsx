import StatusBadge from "@/components/shared/Status/Status";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@/components/ui/data-table";
import { StatusType } from "@/types/common/common";
import { SquarePen } from "lucide-react";
import { ITag } from "../types";

let rowIndex = 0;

export const GetTagColumns = (
  onEdit?: (item: ITag) => void,
): ColumnDef<ITag>[] => {
  rowIndex = 0;

  return [
    {
      header: "SL",
      accessorKey: "_id",
      cell: () => {
        rowIndex += 1;
        return <span className="text-sm">{rowIndex}</span>;
      },
    },
    {
      header: "Tag Name",
      accessorKey: "name",
      cell: (value) => {
        return <span className="text-sm font-medium">{value as string}</span>;
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (value) => {
        return (
          <StatusBadge
            status={value ? StatusType.ACTIVE : StatusType.INACTIVE}
          />
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: (_value, row) => {
        const tag = row as ITag;

        return (
          <div className="flex items-center gap-3">
            <Button
              className="w-9 max-h-9 bg-light hover:bg-light/90 text-secondary-foreground border border-[#E6E6E6]"
              size="sm"
              onClick={() => onEdit?.(tag)}
            >
              <SquarePen className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};
