import Image from "next/image";
import React from "react";

function Info(): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <div
        className="text-center text-6xl font-semibold leading-[72px] text-[#7f56d9]"
        id="Number1"
      >
        4,000+
      </div>
      <div
        className="text-center text-lg font-medium leading-[28px] text-[#101828]"
        id="Text1"
      >
        Global customers
      </div>
      <div
        className="text-center max-w-72 leading-[24px] text-[#667085]"
        id="SupportingText"
      >
        We’ve helped over 4,000 amazing global companies.
      </div>
    </div>
  );
}

function InfoCard(): React.ReactElement {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row my-8 lg:mx-14 xl:mx-28 sm:mx-2 justify-between items-center mt-16">
      <Image
        alt="Frame1"
        className="sm:block lg:hidden my-8"
        height={560}
        src="https://file.rendit.io/n/u7yx24ojwU6bmAu3wlW6.png"
        width={720}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-8 justify-center">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
      <Image
        alt="Frame1"
        className="hidden lg:block"
        height={560}
        src="/assets/images/infocardImage.png"
        width={540}
      />
    </div>
  );
}

export default InfoCard;
