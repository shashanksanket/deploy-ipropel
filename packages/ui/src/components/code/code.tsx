import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * This component is based on the `code` element and supports all of its props
 */
const Code = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"code">
>(({ className, ...props }, ref) => {
  return (
    <code
      className={cn(
        "border-ui-tag-neutral-border bg-ui-tag-neutral-bg text-ui-tag-neutral-text txt-compact-small inline-flex rounded-md border px-[6px] font-mono",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Code.displayName = "Code";

export { Code };
