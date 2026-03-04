
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMediaVideo } from "../types";
import { ColumnDef } from "@/components/ui/data-table";
import StatusBadge from "@/components/shared/Status/Status";
import { StatusType } from "@/types/common/common";
import { Button } from "@/components/ui/button";

export const GetMediaVideoColumns = (): ColumnDef<IMediaVideo>[] => {
  const router = useRouter();

  return [
    {
      header: "Video Thumbnail",
      accessorKey: "videoThumbnail",
      cell: (_value, row) => {
        const mediaVideo = row as IMediaVideo;

        return (
          <div className="flex items-center gap-2">
            <Image
              width={36}
              height={36}
              src={mediaVideo.videoThumbnail}
              alt="Media Image"
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
    },
    {
      header: "Link",
      accessorKey: "link",
      cell: (value) => (
        <a
          href={value as string}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {value}
        </a>
      ),
    },
    {
      header: "Duration",
      accessorKey: "duration",
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
        const mediaVideo = row as IMediaVideo;

        return (
          <div className="flex items-center gap-3">
            <Button
              className="w-9 max-h-9 bg-light hover:bg-light/90 text-secondary-foreground border border-[#E6E6E6]"
              size="sm"
              onClick={() =>
                router.push(`/admin/update-media-video/${mediaVideo.id}`)
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
