import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { ExclamationCircleSolid } from "@repo/icons";
import { cn } from "../../lib/utils";

const hintVariants = cva(
  "txt-compact-xsmall inline-flex items-center gap-x-2",
  {
    variants: {
      variant: {
        info: "text-ui-fg-subtle",
        error: "text-ui-fg-error",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

interface HintProps
  extends VariantProps<typeof hintVariants>,
    React.ComponentPropsWithoutRef<"span"> {}

const Hint = React.forwardRef<HTMLSpanElement, HintProps>(
  (
    {
      className,
      /**
       * The hint's style.
       */
      variant = "info",
      children,
      ...props
    }: HintProps,
    ref,
  ) => {
    return (
      <span
        className={cn(hintVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {variant === "error" && <ExclamationCircleSolid />}
        {children}
      </span>
    );
  },
);
Hint.displayName = "Hint";

export { Hint };
