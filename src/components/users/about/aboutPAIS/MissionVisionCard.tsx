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
      <h1 className="font-poppins text-xl lg:text-3xl font-semibold text-black mb-10">
        {title}
      </h1>
      <p className="text-base font-light font-poppins text-darkGray">
        {description}
      </p>
    </div>
  );
}
