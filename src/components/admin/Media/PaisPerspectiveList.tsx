"use client";

import { DataTable } from "@/components/ui/data-table";
import { useGet } from "@/hooks/useGet";
import { usePagination } from "@/hooks/usePagination";
import { useSearchDebounce } from "@/hooks/useSearchDebounce";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CreateUpdatePaisPerspective from "./Form/CreateUpdatePaisPerspective";
import { GetPaisPerspectiveColumns } from "./TableColumns/PaisPerspectiveColumns";
import { IPaisPerspective } from "./types";

export default function PaisPerspectiveList() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<
    IPaisPerspective | undefined
  >(undefined);

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

  const { data, isLoading } = useGet<IPaisPerspective[]>(
    "/pais-perspective",
    [
      "pais-perspective",
      currentPage.toString(),
      itemsPerPage.toString(),
      debouncedSearch,
    ],
    {
      ...(itemsPerPage !== -1 && {
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
      }),
      search: debouncedSearch,
    },
  );

  useEffect(() => {
    if (data) {
      setTotalItems(data.meta?.total_data || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleEdit = (item: IPaisPerspective) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const columns = GetPaisPerspectiveColumns(handleEdit);

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.data || []}
        isLoading={isLoading}
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
        icon={<ImageIcon />}
        title="PAIS Perspective"
        createTitle="Add PAIS Perspective"
        IsCreate
        setIsModalOpen={setIsModalOpen}
        showSearch
        searchValue={search}
        onSearchChange={handleSearchChange}
        isShowStatus={false}
      />

      <CreateUpdatePaisPerspective
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(undefined);
        }}
        initialValues={selectedItem}
      />
    </>
  );
}
