"use client";
import Image from "next/image";
import React from "react";

function CourseCard(): JSX.Element {
  return (
    <div className="shadow hover:shadow-lg hover:scale-105 duration-300 rounded-lg flex flex-col items-center justify-center p-3">
      <Image
        alt="Frame1"
        height={180}
        src="https://file.rendit.io/n/u7yx24ojwU6bmAu3wlW6.png"
        width={320}
      />
      <div className="flex flex-col mt-3 w-full items-start">
        <div className="flex flex-row mb-3 justify-between w-full items-start border-b-2 border-slate-100">
          <div className="text-xs font-medium tracking-[-0.18] leading-[28px] text-[#9ca3af]">
            IIIT Hyderabad • Self Paced
          </div>
          <div className="flex flex-row gap-1 w-12 items-start">
            <div
              className="text-md font-bold tracking-[-0.18] leading-[28px] text-[#b45309]"
              id="Element1"
            >
              4.5{" "}
            </div>
            <Image
              alt="Starsolid"
              className="mt-1 w-5"
              height={16}
              id="Starsolid"
              src="https://file.rendit.io/n/4QaFqj8ZKSfW1WfxF173.svg"
              width={16}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-1 w-full items-start">
          <div className="text-sm font-semibold text-[#030712] w-full">
            The Complete Pro Blockchain Bootcamp for 2023
          </div>
          <div className="text-xs font-medium tracking-[-0.14] leading-[20px] text-[#4b5563]">
            Dr. Prabhakaran S.
          </div>
          <div className="text-lg font-semibold tracking-[-0.24] leading-[32px]">
            ₹499
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
