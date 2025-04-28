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
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Eye, ImageIcon, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import MediaTabs from "./MediaTabs";
import { Tab } from "../interface";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function MediaTable<
  T extends {
    uploadDate: string;
    image: string;
    filename: string;
    fileType: string;
  },
>({
  setOpen,
  tab,
  setTab,
  data,
  loading,
  total_page = 1,
  currentPage = 1,
  setCurrentPage,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  tab: string;
  setTab: React.Dispatch<SetStateAction<Tab>>;
  data: T[];
  loading: boolean;
  total_page: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}) {
  const [filter, setFilter] = useState("");
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Tabs value={tab} onValueChange={(value) => setTab(value as Tab)}>
        <div className="flex items-center justify-between">
          <MediaTabs />
          <div className="flex justify-between gap-3 items-center mt-6">
            <div className="flex gap-2">
              <Button
                onClick={() => setOpen((prev) => !prev)}
                className="h-12 bg-[#147ECB] hover:bg-[#147ECB] px-4 py-3 font-poppins text-sm"
              >
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
        <TabsContent value={tab} className="pt-6">
          <div className="rounded-md border">
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
              {
                <TableBody>
                  {data &&
                    data?.map((item, index) => {
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
                          <TableCell>
                            {day} {month} {year}
                          </TableCell>
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
                  {data && data?.length === 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center p-6">
                        No Data Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              }
            </Table>
          </div>
        </TabsContent>
      </Tabs>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {[...Array(total_page || 1)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handlePageChange(
                  currentPage < total_page ? currentPage + 1 : total_page
                )
              }
              className={
                currentPage === total_page
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
