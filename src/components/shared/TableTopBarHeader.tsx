import DynamicBreadcrumb from "@/components/shared/DynamicBreadcrumb";

interface TableHeaderProps {
  title?: string;
}

export default function TableTopBarHeader({ title }: TableHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-5">
            <DynamicBreadcrumb />
            <h1 className="text-2xl text-white font-semibold mb-2">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
