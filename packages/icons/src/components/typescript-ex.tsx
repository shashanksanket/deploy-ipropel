import * as React from "react";
import type { IconProps } from "../types";
const TypescriptEx = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill={color}
          fillRule="evenodd"
          d="M5 1h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4Zm6.282 15.041v-1.834c.31.28.646.488 1.008.628.363.14.73.21 1.1.21.216 0 .406-.022.568-.064.162-.042.297-.1.405-.175a.696.696 0 0 0 .323-.593.749.749 0 0 0-.128-.43 1.423 1.423 0 0 0-.35-.35 3.57 3.57 0 0 0-.525-.309c-.203-.1-.422-.2-.656-.304-.598-.267-1.043-.594-1.337-.98-.293-.386-.44-.852-.44-1.398 0-.428.08-.796.24-1.104.16-.307.378-.56.654-.76.275-.198.595-.344.957-.438.363-.093.747-.14 1.153-.14.398 0 .751.026 1.059.077.308.052.591.131.85.238v1.714a2.535 2.535 0 0 0-.418-.252 3.352 3.352 0 0 0-1.395-.32c-.196-.001-.374.019-.534.059-.16.04-.295.097-.405.17a.812.812 0 0 0-.256.26.653.653 0 0 0-.091.34c0 .139.034.262.101.37.068.11.164.213.289.31.124.098.275.193.453.287.178.093.379.19.603.29.306.137.58.283.824.438.244.154.453.33.627.524.174.195.308.417.4.668.093.25.139.541.139.874 0 .458-.08.843-.243 1.155a2.063 2.063 0 0 1-.659.756c-.277.193-.6.332-.968.416a5.221 5.221 0 0 1-1.166.126c-.42 0-.819-.038-1.198-.115a3.447 3.447 0 0 1-.984-.344Zm-.68-6.353H8.413v6.702H6.679V9.688H4.5V8.183h6.102v1.505Z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);
TypescriptEx.displayName = "TypescriptEx";
export default TypescriptEx;
