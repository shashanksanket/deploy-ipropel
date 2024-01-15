import * as React from "react";
import type { IconProps } from "../types";
const Puzzle = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.875 5.072c0-.295.155-.563.334-.799.184-.241.291-.528.291-.835 0-.864-.84-1.563-1.875-1.563-1.036 0-1.875.7-1.875 1.563 0 .307.107.594.29.835.18.236.335.504.335.8a.533.533 0 0 1-.547.535 40.325 40.325 0 0 1-3.47-.25c.155 1.345.245 2.709.263 4.09a.547.547 0 0 1-.549.552c-.295 0-.563-.155-.799-.334a1.373 1.373 0 0 0-.835-.291c-.864 0-1.563.84-1.563 1.875 0 1.036.7 1.875 1.563 1.875.307 0 .594-.107.835-.29.236-.18.504-.335.8-.335.258 0 .462.217.443.475a40.032 40.032 0 0 1-.535 4.213c1.265.159 2.548.258 3.847.295a.533.533 0 0 0 .547-.535c0-.296-.155-.564-.334-.8a1.372 1.372 0 0 1-.291-.835c0-.863.84-1.563 1.875-1.563 1.036 0 1.875.7 1.875 1.563 0 .307-.107.594-.29.835-.18.236-.334.504-.334.8 0 .277.23.499.508.483a40.055 40.055 0 0 0 4.523-.525c.226-1.302.388-2.613.485-3.931a.444.444 0 0 0-.444-.475c-.296 0-.564.155-.8.334-.241.184-.528.291-.835.291-.863 0-1.563-.84-1.563-1.875 0-1.036.7-1.875 1.563-1.875.308 0 .594.107.835.29.236.18.504.335.8.335a.547.547 0 0 0 .549-.553 40.36 40.36 0 0 0-.309-4.466 40.114 40.114 0 0 1-4.805.574.482.482 0 0 1-.508-.482Z"
        />
      </svg>
    );
  },
);
Puzzle.displayName = "Puzzle";
export default Puzzle;