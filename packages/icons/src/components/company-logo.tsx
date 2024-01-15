import * as React from 'react';

const CompanyLogo = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg
    fill="none"
    height="41"
    viewBox="0 0 25 41"
    width="25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      fill="#039855"
      height="7.99999"
      width="7.99999"
      x="0.583374"
      y="16.9062"
    />
    <rect
      fill="#027A48"
      height="7.99999"
      transform="rotate(180 24.5834 24.9062)"
      width="8"
      x="24.5834"
      y="24.9062"
    />
    <path
      d="M8.58337 16.9062L16.5834 8.90625V16.9062L8.58337 24.9062V16.9062Z"
      fill="#A6F4C5"
    />
    <path
      d="M16.5834 24.9063L8.58339 32.9063L8.58339 24.9063L16.5834 16.9063L16.5834 24.9063Z"
      fill="#6CE9A6"
    />
    <path
      d="M0.583374 16.9062L16.5833 0.90625V8.90624L8.58336 16.9062H0.583374Z"
      fill="#32D583"
    />
    <path
      d="M24.5834 24.9063L8.58339 40.9063L8.58339 32.9063L16.5834 24.9063L24.5834 24.9063Z"
      fill="#12B76A"
    />
  </svg>
));

CompanyLogo.displayName = 'CompanyLogo';
export default CompanyLogo;
