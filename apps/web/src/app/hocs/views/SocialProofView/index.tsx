'use client';

import React from 'react';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import VIT from '@repo/icons/src/images/college_icons/VIT.svg';
import IITBombay from '@repo/icons/src/images/college_icons/IIT_Bombay.svg';
import IITKharagpur from '@repo/icons/src/images/college_icons/IIT_Kharagpur.svg';
import NIT from '@repo/icons/src/images/college_icons/NIT.svg';
import BITS from '@repo/icons/src/images/college_icons/BITS.svg';
import BHU from '@repo/icons/src/images/college_icons/BHU.svg';

function SocialProofView(): JSX.Element {
  const collegeIcons = [IITBombay, BHU, IITKharagpur, VIT, NIT, BITS];
  return (
    <div className="my-8">
      <div className="flex items-center justify-center">
        <p className="text-ui-fg-subtle font-medium leading-relaxed text-base sm:text-lg pb-4 sm:pb-8 pt-8 align-center">
          4,000+ students and faculties up skill on iPropel, from colleges like
        </p>
      </div>
      <div className="flex items-center justify-center pb-6 px-8 sm:px-24">
        {collegeIcons.map((icon, index) => (
          <div
            className="w-1/6 sm:h-40 h-24 relative items-center flex justify-center"
            key={index}
          >
            {' '}
            <Image
              alt={`College ${index + 1}`}
              layout="fill"
              objectFit="contain"
              src={icon as StaticImport}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialProofView;
