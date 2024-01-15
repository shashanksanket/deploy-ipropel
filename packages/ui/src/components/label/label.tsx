"use client";

import * as Primitives from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const labelVariants = cva("font-sans", {
  variants: {
    size: {
      xsmall: "txt-compact-xsmall",
      small: "txt-compact-small",
      base: "txt-compact-medium",
      large: "txt-compact-large",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
  },
});

interface LabelProps
  extends React.ComponentPropsWithoutRef<"label">,
    VariantProps<typeof labelVariants> {}

/**
 * This component is based on the [Radix UI Label](https://www.radix-ui.com/primitives/docs/components/label) primitive.
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      /**
       * The label's size.
       */
      size = "base",
      /**
       * The label's font weight.
       */
      weight = "regular",
      ...props
    }: LabelProps,
    ref,
  ) => {
    return (
      <Primitives.Root
        className={cn(labelVariants({ size, weight }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Label.displayName = "Label";

export { Label };
