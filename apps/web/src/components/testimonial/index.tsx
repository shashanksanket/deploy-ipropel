"use client";
import type { ReactNode } from "react";
import React from "react";
import Image from "next/image";

interface TestimonialProps {
  companyLogo: ReactNode;
  quote: string;
  employeeName: string;
  employeeDesignation: string;
  avatarSrc: string;
  CompanyName: string;
}
function Testimonial({
  companyLogo,
  CompanyName,
  quote,
  avatarSrc,
  employeeName,
  employeeDesignation,
}: TestimonialProps): JSX.Element {
  return (
    <div className="p-6 bg-[#F9FAFB] rounded-md flex flex-col items-center justify-center w-4/5 mx-auto mt-36">
      <div className="flex justify-center items-center">
        {" "}
        {companyLogo}
        <Image
          alt="company name"
          className="ml-2"
          height="70"
          objectFit="contain"
          src={CompanyName}
          width="96"
        />
      </div>
      <blockquote className="text-5xl font-medium text-center text-ui-fg-base my-8 leading-snug px-4">
        {quote}
      </blockquote>
      <div className="flex flex-col items-center justify-center mb-4">
        <Image
          alt="avatar icon"
          height="64"
          objectFit="contain"
          src={avatarSrc}
          width="64"
        />
        <div className="text-center mt-2">
          <p className="text-lg font-semibold">{employeeName}</p>
          <p className="text-gray-500">{employeeDesignation}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
