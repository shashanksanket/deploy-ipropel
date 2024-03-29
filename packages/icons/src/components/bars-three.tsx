import * as React from "react";
import type { IconProps } from "../types";
const BarsThree = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.125 5h13.75m-13.75 5h13.75m-13.75 5h13.75"
        />
      </svg>
    );
  },
);
BarsThree.displayName = "BarsThree";
export default BarsThree;
