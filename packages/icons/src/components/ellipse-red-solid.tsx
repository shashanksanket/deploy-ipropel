import * as React from "react";
import type { IconProps } from "../types";
const EllipseRedSolid = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        ref={ref}
        {...props}
      >
        <g filter="url(#a)">
          <rect width={10} height={10} x={5} y={5} fill="#fff" rx={5} />
          <circle cx={10} cy={10} r={3} fill="#E11D48" />
        </g>
        <defs>
          <filter
            id="a"
            width={14}
            height={14}
            x={3}
            y={4}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius={1}
              result="effect1_dropShadow_2733_2047"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.08 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2733_2047"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.12 0" />
            <feBlend
              in2="effect1_dropShadow_2733_2047"
              result="effect2_dropShadow_2733_2047"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_2733_2047"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  },
);
EllipseRedSolid.displayName = "EllipseRedSolid";
export default EllipseRedSolid;
