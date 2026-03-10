import StatusBadge from "@/components/shared/Status/Status";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@/components/ui/data-table";
import { StatusType } from "@/types/common/common";
import { Trash2 } from "lucide-react";
import { ICategory } from "../types";

let rowIndex = 0;

export const GetCategoryColumns = (): ColumnDef<ICategory>[] => {
  rowIndex = 0;

  return [
    {
      header: "SL",
      accessorKey: "id",
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
              className="w-9 max-h-9 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200"
              size="sm"
              onClick={() => {
                // Handle delete
                console.log("Delete category:", category.id);
              }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};
