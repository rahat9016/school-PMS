"use client";

import { useGet } from "@/hooks/useGet";
import { usePagination } from "@/hooks/usePagination";
import { useSearchDebounce } from "@/hooks/useSearchDebounce";
import { useAppSelector } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";
import CreateUpdateCategory from "./Form/CreateUpdateCategory";
import MediaTable from "./ManageTable";
import { GetCategoryColumns } from "./TableColumns/CategoryColumns";
import { ICategory } from "./types";

export default function CategoryList() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ICategory | undefined>(undefined);
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

  const { data, isLoading } = useGet<ICategory[]>(
    "/category",
    [
      "categories",
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
  console.log("ok", data);

  const handleEdit = (item: ICategory) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const columns = GetCategoryColumns(handleEdit);
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
        createTitle="Add category"
        title="Manage Categories"
        setIsModalOpen={setIsModalOpen}
      />
      <CreateUpdateCategory
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(undefined);
        }}
        initialValues={selectedItem}
      />
    </div>
  );
}
