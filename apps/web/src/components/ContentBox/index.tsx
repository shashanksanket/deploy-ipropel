"use client";
import React from "react";

interface ContentBoxProps {
  align: string;
  tag: string;
  title: string;
  description: string;
}

function ContentBox({
  align,
  tag,
  title,
  description,
}: ContentBoxProps): JSX.Element {
  return (
    <div
      className={`flex flex-col items-${align} justify-center my-8 w-4/5 mx-auto rounded`}
    >
      <div>
        {" "}
        <p className="p-2 text-[#6941C6] font-md text-base"> {tag}</p>
      </div>
      <div className="mt-4">
        <p
          className={`text-ui-fg-base text-2xl sm:text-4xl text-${align} font-semibold`}
        >
          {title}
        </p>
      </div>
      <div className="mt-4">
        <div className="mt-3">
          <p
            className={`text-gray-500 text-base sm:text-xl text-${align} font-normal`}
          >
            {description}
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default ContentBox;
