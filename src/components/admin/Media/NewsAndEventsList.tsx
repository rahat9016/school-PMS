"use client";

import { useGet } from "@/hooks/useGet";
import { usePagination } from "@/hooks/usePagination";
import { useSearchDebounce } from "@/hooks/useSearchDebounce";
import { useAppSelector } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";
import CreateUpdateNewsAndEvents from "./Form/CreateUpdateNewsAndEvents";
import MediaTable from "./ManageTable";
import { GetNewsAndEventsColumns } from "./TableColumns/NewsAndEventsColumns";
import { INewsAndEvents } from "./types";
export default function NewsAndEventsList() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<INewsAndEvents | undefined>(
    undefined,
  );
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

  const { data, isLoading } = useGet<INewsAndEvents[]>(
    "/news-events",
    [
      "news-events",
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

  const handleEdit = (item: INewsAndEvents) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const columns = GetNewsAndEventsColumns(handleEdit);
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
        createTitle="Add new news and events"
        setIsModalOpen={setIsModalOpen}
        // routeURL="/admin/add-media-image"
      />
      <CreateUpdateNewsAndEvents
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
