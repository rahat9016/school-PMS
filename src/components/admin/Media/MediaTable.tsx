"use client";


import { DataTable } from "@/components/ui/data-table";
import { ITableProps } from "@/types/common/common";
import { ImageIcon } from "lucide-react";

const MediaTable = <T,>({
  columns,
  data,
  isLoading = false,
  totalItems = 0,
  currentPage = 1,
  itemsPerPage = 10,
  setCurrentPage,
  setItemsPerPage,
  search = "",
  showSearch,
  handleSearchChange,
  setIsModalOpen,
  showCreateButton = false,
  createTitle,
  routeURL,
  title
}: ITableProps<T>) => {
  return (
    <DataTable
      columns={columns}
      data={Array.isArray(data) ? data : []}
      isLoading={isLoading}
      totalItems={totalItems}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
      setItemsPerPage={setItemsPerPage}
      icon={<ImageIcon />}
      title={title}
      showSearch={showSearch}
      searchValue={search}
      onSearchChange={handleSearchChange}
      createTitle={createTitle}
      routeURL={routeURL}
      tabs={[
        { name: "Manage Articles", route: "/dashboard/manage-articles" },
        { name: "Manage Category", route: "/admin/video-gallery" },
      ]}
      IsCreate={showCreateButton}
      setIsModalOpen={setIsModalOpen}
    />
  );
};

export default MediaTable;