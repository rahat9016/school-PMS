import React from 'react'
import Carousel from '@/components/shared/Carousel'
import img1 from "../../../../../../public/academic/Octopus1.png";
import img2 from "../../../../../../public/academic/Octopus2.png";
import img3 from "../../../../../../public/academic/Octopus3.png";
import shape2 from "../../../../../../public/Facilities/shape2.png";

export default function AfterSchoolProgramSection() {
  return (
    <div className="bg-white pt-10 lg:pt-20 pb-10">
      <div className="container">
        <h1 className="font-poppins text-xl  lg:text-3xl font-semibold text-main-primary">
        After School Program
        </h1>
        <span className="block bg-main-secondary h-[3px] w-[147px]"></span>
        <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
        Each semester for 10 weeks, the school organizes and offers a range of after school programmes for the students, run by the teachers.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mt-14">
          <div className="w-full lg:w-1/2">
            <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
            For an additional fee, the students are offered the chance to take their pick of extra-curricular activities. On offer are a range of clubs such as sports, extra support in academic subjects, the chance to do some favourite hobbies and even to get some homework support. Running for an hour between 3pm and 4pm on the same day each week, some of these after school clubs are arranged as groups and some as one-to-one tuitions.
            </p>
            <p className="text-base font-poppins text-black-dark font-normal mt-3 lg:mt-6">
            Please look out for the letter that goes home to parents at the end of the first month from the beginning of the semester, and book up early so as not to be disappointed. The details of how to do this will be clearly stated on the form.
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 p-4 object-contain bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${shape2.src})`,
            }}
          >
            <Carousel slides={[img1, img2, img3]} />
          </div>
        </div>
      </div>
    </div>
  )
}
