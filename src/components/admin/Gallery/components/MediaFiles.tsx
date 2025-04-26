/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMediaLibraryGalleryRequest } from "@/app/api/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;
export default function MediaFiles() {
  const [currentPage, setCurrentPage] = useState(1);
  //   const [searchTerm, setSearchTerm] = useState("");
  const { data } = useQuery({
    queryKey: ["Gallery", currentPage],
    queryFn: () =>
      getMediaLibraryGalleryRequest({
        page: currentPage,
        limit: ITEMS_PER_PAGE,
      }),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="px-5 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5">
          {data?.data?.map((item: any) => {
            console.log(item);
            return (
              <div key={item?._id}>
                <Image
                  src={item.image}
                  alt={item.filename}
                  className="h-[249px] w-[249px] rounded-lg"
                  width={249}
                  height={249}
                />
                <h2 className="font-normal text-sm text-[#363739] mt-4">
                  {item.filename}
                </h2>
              </div>
            );
          })}
        </div>
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

            {[...Array(data?.meta?.total_page || 1)].map((_, index) => (
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
                    currentPage < data?.meta?.total_page
                      ? currentPage + 1
                      : data?.meta?.total_page
                  )
                }
                className={
                  currentPage === data?.meta?.total_page
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
