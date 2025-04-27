import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, ImageIcon, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import allVideo from "../../../../../public/dashboard/allVideo.png";
import heroImg from "../../../../../public/dashboard/heroImg.png";
import { useQuery } from "@tanstack/react-query";
import {
  getMediaLibraryGalleryRequest,
} from "@/app/api/api";

type Tab = "all" | "hero" | "archived";
export default function Media({setOpen}:{setOpen: React.Dispatch<SetStateAction<boolean>>;}) {
  const [tab, setTab] = useState<Tab>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
    // const { data, isLoading } = useQuery({
    //   queryKey: ["Gallery", currentPage],
    //   queryFn: () =>
    //     getGalleryImagesRequest({
    //       page: currentPage,
    //       limit: 5,
    //     }),
    // });
  const { data: mediaImageData, isLoading: loading } = useQuery({
    queryKey: ["mediaImageData", currentPage],
    queryFn: () =>
      getMediaLibraryGalleryRequest({
        page: currentPage,
        limit: 5,
      }),
  });

  return (
    <div>
      <Tabs value={tab} onValueChange={(value) => setTab(value as Tab)}>
        <div className="flex items-center justify-between">
          <TabsList className="w-full justify-start gap-2 bg-transparent">
            <TabsTrigger
              value="all"
              className="rounded-none border-b-[3px] border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-main-secondary data-[state=active]:text-charcoalGray data-[state=active]:bg-transparent data-[state=active]:shadow-none flex items-center text-base gap-2"
            >
              <Image src={allVideo} alt="allVideo" width={28} height={28} />
              All Media
            </TabsTrigger>
            <TabsTrigger
              value="hero"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-main-secondary data-[state=active]:text-charcoalGray data-[state=active]:bg-transparent data-[state=active]:shadow-none flex items-center text-base gap-2"
            >
              <Image src={heroImg} alt="allVideo" width={28} height={28} />
              Categorized Images
            </TabsTrigger>
          </TabsList>
          <div className="flex justify-between gap-3 items-center mt-6">
            <div className="flex gap-2">
              <Button onClick={()=> setOpen((prev) => !prev)} className="h-12 bg-[#147ECB] hover:bg-[#147ECB] px-4 py-3 font-poppins text-sm">
                <span className="text-3xl">+</span> Import from Gallery
              </Button>
              <Button className="h-12 bg-[#42AD00] hover:bg-[#42AD00] px-4 py-3 font-poppins text-sm">
                Filter
              </Button>
            </div>
            <Input
              className="w-72 h-12 "
              placeholder="Search by file name or type..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        {/* Table */}
        <TabsContent value={tab} className="pt-6">
          <div className="rounded-md border">
            {loading ? (
              <div className="p-6 text-center">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-main-primary text-white">
                      Sl.
                    </TableHead>
                    <TableHead className="bg-main-primary text-white">
                      Preview
                    </TableHead>
                    <TableHead className="bg-main-primary text-white">
                      File Name
                    </TableHead>
                    <TableHead className="bg-main-primary text-white">
                      File Type
                    </TableHead>
                    <TableHead className="bg-main-primary text-white">
                      Upload Date
                    </TableHead>
                    <TableHead className="bg-main-primary text-white">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mediaImageData?.data?.map((item, index) => {
                    console.log(item)
                    const date = new Date(item.uploadDate);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell width={250}>
                          <Image
                            src={item.image}
                            alt="Preview"
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                          />
                        </TableCell>
                        <TableCell width={250}>{item.filename}</TableCell>
                        <TableCell>{item.fileType}</TableCell>
                        <TableCell>{day} {month} {year}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="icon" variant="outline">
                              <Eye size={16} />
                            </Button>
                            <Button size="icon" variant="secondary">
                              <Pencil size={16} />
                            </Button>
                            <Button size="icon" variant="outline">
                              <ImageIcon size={16} />
                            </Button>
                            <Button size="icon" variant="destructive">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {mediaImageData?.data.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center p-6">
                        No Data Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
