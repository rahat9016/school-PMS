"use client";

import { useGet } from "@/hooks/useGet";
import { usePagination } from "@/hooks/usePagination";
import { useSearchDebounce } from "@/hooks/useSearchDebounce";
import { useAppSelector } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";
import CreateUpdateTag from "./Form/CreateUpdateTag";
import MediaTable from "./ManageTable";
import { GetTagColumns } from "./TableColumns/TagColumns";
import { ITag } from "./types";

export default function TagList() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    setCurrentPage,
    itemsPerPage,
    currentPage,
    totalItems,
    setTotalItems,
    setItemsPerPage,
  } = usePagination();
  const { search, handleSearchChange, debouncedSearch } =
    useSearchDebounce(300);
  const { sortBy } = useAppSelector((state) => state.filter);

  const { data, isLoading } = useGet<ITag[]>(
    "/tag",
    [
      "tags",
      currentPage.toString(),
      itemsPerPage.toString(),
      debouncedSearch,
      sortBy,
    ],
    {
      ...(itemsPerPage !== -1 && {
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      }),
      search: debouncedSearch,
      ...(sortBy && { status: sortBy }),
    },
  );
  // Update total items whenever data changes
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta?.total_data || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const columns = GetTagColumns();
  return (
    <div>
      <MediaTable
        columns={columns}
        data={data?.data || []}
        isLoading={isLoading}
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
        search={search}
        handleSearchChange={handleSearchChange}
        showCreateButton
        createTitle="Add tag"
        title="Manage Tags"
        setIsModalOpen={setIsModalOpen}
      />
      <CreateUpdateTag
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
