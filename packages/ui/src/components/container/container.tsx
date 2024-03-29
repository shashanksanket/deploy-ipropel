import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * This component is based on the `div` element and supports all of its props
 */
const Container = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg px-8 pb-8 pt-6",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Container.displayName = "Container";

export { Container };
