"use client";
import type { ReactNode } from "react";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  svg: ReactNode;
}

function Feature({ title, description, svg }: FeatureProps): JSX.Element {
  return (
    <div className="flex-1 p-4 px-2 rounded-md flex flex-col items-center justify-evenly">
      <div className="p-2 bg-purple-100 rounded-full">{svg}</div>
      <div className="mt-6 mb-2 text-ui-fg-base text-xl text-center font-semibold">
        {title}
      </div>
      <div className="text-gray-500 font-normal text-center mt-2">
        {description}
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- Because eventually a valid href URL will be added */}
      <a className="mt-8 text-purple-600 font-semibold" href="#">
        Learn More -&gt;
      </a>
    </div>
  );
}

export default Feature;
