import React from "react";

export default function MissionVisionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="font-poppins text-lg lg:text-3xl font-semibold text-black mb-0 md:mb-4 xl:mb-10">
        {title}
      </h1>
      <p className="text-sm xl:text-base font-light font-poppins text-darkGray">
        {description}
      </p>
    </div>
  );
}
