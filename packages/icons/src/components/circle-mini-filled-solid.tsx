import * as React from "react";
import type { IconProps } from "../types";
const CircleMiniFilledSolid = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx={10} cy={10} r={5.25} stroke={color} strokeWidth={1.5} />
        <circle cx={10} cy={10} r={3} fill={color} />
      </svg>
    );
  },
);
CircleMiniFilledSolid.displayName = "CircleMiniFilledSolid";
export default CircleMiniFilledSolid;
