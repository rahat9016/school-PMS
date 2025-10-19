import React from "react";

export default function TitleTag({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="block w-[62px] h-[1px] bg-mediumGray"></span>
      <h3 className="text-main-secondary font-medium font-poppins text-sm">
        {title}
      </h3>
    </div>
  );
}
