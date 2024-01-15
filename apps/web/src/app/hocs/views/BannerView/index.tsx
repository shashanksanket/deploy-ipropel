'use client';
import { Button, Container } from '@repo/ui';
import React from 'react';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import HeroIcon from '@repo/icons/src/images/heroicon.svg';

function BannerView(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-8 px-16 space-y-16 self-stretch">
      <Container className="relative flex items-center justify-between rounded-[2rem]  border border-solid border-ui-border-base bg-ui-bg-base md:pl-14 md:py-14 pl-7 py-7 pr-0 overflow-hidden">
        <div className="max-w-6xl relative z-10 w-3/5 2xl:w-4/5">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-semibold text-ui-fg-base mb-4">
            The Future of Learning, Tradition meets AI
          </h1>
          <p className="text-ui-fg-subtle font-medium leading-relaxed text-sm sm:text-base  lg:text-l xl:text-xl py-2 sm:py-4 md:py-8 max-w-3xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <Button className="mr-4 my-4" size="xlarge" variant="secondary">
            Watch Demo{' '}
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3853 9.19708L14.3854 9.19711C15.0184 9.54515 15.0184 10.4549 14.3854 10.8029L14.3853 10.803L6.69278 15.0349C6.69274 15.0349 6.6927 15.0349 6.69266 15.035C6.08136 15.3708 5.334 14.9286 5.334 14.2317V14.2317L5.33333 5.76835C5.33333 5.76834 5.33333 5.76833 5.33333 5.76832C5.33335 5.07137 6.08071 4.62921 6.69201 4.96508C6.69204 4.9651 6.69208 4.96512 6.69212 4.96514L14.3853 9.19708Z"
                fill="#030712"
                stroke="#4B5563"
                strokeWidth={0.666667}
              />
            </svg>
          </Button>
          <Button className="my-4" size="xlarge" variant="primary">
            Sign up{' '}
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 3.75L13.125 10L6.875 16.25"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              />
            </svg>
          </Button>
        </div>
        <div className="absolute top-0 right-0 overflow-hidden">
          <div className="rounded-full overflow-hidden h-100 w-100 -mr-20">
            <Image
              alt="Banner Image Alt Text"
              className="object-cover h-[20rem] w-[18rem] sm:h-[24rem] sm:w-[22rem]  md:h-[28rem] md:w-[26rem]  lg:h-[32rem] lg:w-[30rem] xl:h-[38rem] xl:w-[36rem]"
              height="320"
              src={HeroIcon as StaticImport}
              width="288"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BannerView;
