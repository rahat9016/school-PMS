import { Button } from "@/components/ui/button";
import { ColumnDef } from "@/components/ui/data-table";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { IPaisPerspective } from "../types";

let rowIndex = 0;

export const GetPaisPerspectiveColumns = (
  onEdit?: (item: IPaisPerspective) => void,
): ColumnDef<IPaisPerspective>[] => {
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
      header: "Image",
      accessorKey: "image",
      cell: (_value, row) => {
        const item = row as IPaisPerspective;
        const imageSrc = item.imageUrl || item.image || "";

        return imageSrc ? (
          <Image
            width={36}
            height={36}
            src={imageSrc}
            alt={item.title}
            className="w-9 h-9 rounded object-cover"
          />
        ) : (
          <span className="text-sm">-</span>
        );
      },
    },
    {
      header: "Title",
      accessorKey: "title",
      cell: (value) => {
        return <span className="text-sm font-medium">{value as string}</span>;
      },
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: (_value, row) => {
        const item = row as IPaisPerspective;

        return (
          <div className="flex items-center gap-3">
            <Button
              className="w-9 max-h-9 bg-light hover:bg-light/90 text-secondary-foreground border border-[#E6E6E6]"
              size="sm"
              onClick={() => onEdit?.(item)}
            >
              <SquarePen className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};
