import * as React from "react";
import { cn } from "../../lib/utils";
import { inputBaseStyles } from "../input";

/**
 * This component is based on the `textarea` element and supports all of its props
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        inputBaseStyles,
        "txt-medium min-h-[70px] w-full px-3 py-[7px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
