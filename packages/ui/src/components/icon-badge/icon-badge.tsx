import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { badgeColorVariants } from "../badge";
import { cn } from "../../lib/utils";

const iconBadgeVariants = cva(
  "flex items-center justify-center overflow-hidden rounded-md border",
  {
    variants: {
      size: {
        base: "h-6 w-6",
        large: "h-7 w-7",
      },
    },
  },
);

interface IconBadgeProps
  extends Omit<React.ComponentPropsWithoutRef<"span">, "color">,
    VariantProps<typeof badgeColorVariants>,
    VariantProps<typeof iconBadgeVariants> {
  asChild?: boolean;
}

/**
 * This component is based on the `span` element and supports all of its props
 */
const IconBadge = React.forwardRef<HTMLSpanElement, IconBadgeProps>(
  (
    {
      children,
      className,
      /**
       * The badge's color.
       */
      color = "grey",
      /**
       * The badge's size.
       */
      size = "base",
      /**
       * Whether to remove the wrapper `span` element and use the
       * passed child element instead.
       */
      asChild = false,
      ...props
    }: IconBadgeProps,
    ref,
  ) => {
    const Component = asChild ? Slot : "span";

    return (
      <Component
        className={cn(
          badgeColorVariants({ color }),
          iconBadgeVariants({ size }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
IconBadge.displayName = "IconBadge";

export { IconBadge };
