import React from "react";

export default function Independent() {
  return (
    <div className="bg-main-primary py-[64px]">
      <div className="container">
        <h1 className="font-poppins text-3xl lg:text-5xl font-semibold text-white text-center mb-8">
          Building Independent Learners
        </h1>
        <p className="text-base font-poppins font-normal text-white">
          Our learning standards are designed to produce independent learners
          who are encouraged to:
        </p>
        <ul className="list-disc text-white pl-6 mt-6">
          <li>Think, question and communicate. Gain and apply knowledge.</li>
          <li>
            Respect cultural, religious, regional or racial diversity by
            encouraging students to treat themselves and others with care and
            respect.
          </li>
          <li>
            Work in a meaningful, purposeful way. Be considerate and
            compassionate.
          </li>
        </ul>
      </div>
    </div>
  );
}
