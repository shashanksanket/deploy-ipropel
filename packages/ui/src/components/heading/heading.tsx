import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-sans font-medium", {
  variants: {
    level: {
      h1: "h1-core",
      h2: "h2-core",
      h3: "h3-core",
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

interface HeadingProps
  extends VariantProps<typeof headingVariants>,
    React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * This component is based on the heading element (`h1`, `h2`, etc...) depeneding on the specified level
 * and supports all of its props
 */
function Heading({
  /**
   * The heading level which specifies which heading element is used.
   */
  level = "h1",
  className,
  ...props
}: HeadingProps): JSX.Element {
  const Component = level || "h1";

  return (
    <Component
      className={cn(headingVariants({ level }), className)}
      {...props}
    />
  );
}

export { Heading, headingVariants };
