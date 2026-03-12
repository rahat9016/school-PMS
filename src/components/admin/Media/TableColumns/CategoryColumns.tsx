import StatusBadge from "@/components/shared/Status/Status";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@/components/ui/data-table";
import { StatusType } from "@/types/common/common";
import { SquarePen } from "lucide-react";
import { ICategory } from "../types";

let rowIndex = 0;

export const GetCategoryColumns = (
  onEdit?: (item: ICategory) => void,
): ColumnDef<ICategory>[] => {
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
      header: "Category Name",
      accessorKey: "name",
      cell: (value) => {
        return <span className="text-sm font-medium">{value as string}</span>;
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: (value) => {
        return (
          <span className="text-sm text-gray-600 line-clamp-2">
            {value as string}
          </span>
        );
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
        const category = row as ICategory;

        return (
          <div className="flex items-center gap-3">
            <Button
              className="w-9 max-h-9 bg-light hover:bg-light/90 text-secondary-foreground border border-[#E6E6E6]"
              size="sm"
              onClick={() => onEdit?.(category)}
            >
              <SquarePen className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};
