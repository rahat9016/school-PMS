import StatusBadge from "@/components/shared/Status/Status";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@/components/ui/data-table";
import { StatusType } from "@/types/common/common";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { INewsAndEvents } from "../types";

export const GetNewsAndEventsColumns = (): ColumnDef<INewsAndEvents>[] => {
  const router = useRouter();

  return [
    {
      header: "Image",
      accessorKey: "imageUrls",
      cell: (_value, row) => {
        const newsEvent = row as INewsAndEvents;

        return (
          <div className="flex items-center gap-2">
            <Image
              width={36}
              height={36}
              src={newsEvent.imageUrls?.[0] || ""}
              alt="News And Events Image"
              className="w-9 h-9 rounded object-cover"
            />
          </div>
        );
      },
    },
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: (value) => {
        const text = value as string;
        return <span className="text-sm line-clamp-2">{text}</span>;
      },
    },
    {
      header: "Category",
      accessorKey: "generalCategory",
      cell: (_value, row) => {
        const newsEvent = row as INewsAndEvents;
        return (
          <span className="text-sm">
            {newsEvent.generalCategory?.name || "-"}
          </span>
        );
      },
    },
    {
      header: "Tags",
      accessorKey: "tags",
      cell: (_value, row) => {
        const newsEvent = row as INewsAndEvents;
        return (
          <span className="text-sm">
            {newsEvent.tags?.map((tag) => tag.name).join(", ") || "-"}
          </span>
        );
      },
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Event Date",
      accessorKey: "eventDate",
      cell: (value) => {
        if (!value) return <span className="text-sm">-</span>;
        const date = new Date(value as string);
        return (
          <span className="text-sm">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        );
      },
    },
    {
      header: "Start Time",
      accessorKey: "startTime",
    },
    {
      header: "End Time",
      accessorKey: "endTime",
    },
    {
      header: "Location",
      accessorKey: "location",
    },
    {
      header: "Status",
      accessorKey: "activeStatus",
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
        const newsEvent = row as INewsAndEvents;

        return (
          <div className="flex items-center gap-3">
            <Button
              className="w-9 max-h-9 bg-light hover:bg-light/90 text-secondary-foreground border border-[#E6E6E6]"
              size="sm"
              onClick={() =>
                router.push(`/admin/update-news-and-events/${newsEvent._id}`)
              }
            >
              <SquarePen />
            </Button>
          </div>
        );
      },
    },
  ];
};
