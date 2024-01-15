"use client";

import { CheckCircleSolid, SquareTwoStack } from "@repo/icons";
import { Slot } from "@radix-ui/react-slot";
import copy from "copy-to-clipboard";
import React, { forwardRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Tooltip } from "../tooltip";

type CopyProps = React.HTMLAttributes<HTMLButtonElement> & {
  content: string;
  asChild?: boolean;
};

/**
 * This component is based on the `button` element and supports all of its props
 */
const Copy = forwardRef<HTMLButtonElement, CopyProps>(
  (
    {
      children,
      className,
      /**
       * The content to copy.
       */
      content,
      /**
       * Whether to remove the wrapper `button` element and use the
       * passed child element instead.
       */
      asChild = false,
      ...props
    }: CopyProps,
    ref,
  ) => {
    const [done, setDone] = useState(false);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("Copy");

    const copyToClipboard = (): void => {
      setDone(true);
      copy(content);

      setTimeout(() => {
        setDone(false);
      }, 2000);
    };

    useEffect(() => {
      if (done) {
        setText("Copied");
        return;
      }

      setTimeout(() => {
        setText("Copy");
      }, 500);
    }, [done]);

    const Component = asChild ? Slot : "button";
    let contentIcon: React.ReactNode;
    if (children || done) {
      contentIcon = children ? children : <CheckCircleSolid />;
    } else {
      contentIcon = <SquareTwoStack />;
    }

    return (
      <Tooltip content={text} onOpenChange={setOpen} open={done || open}>
        <Component
          aria-label="Copy code snippet"
          className={cn("text-ui-code-icon h-fit w-fit", className)}
          onClick={copyToClipboard}
          ref={ref}
          type="button"
          {...props}
        >
          {contentIcon}
        </Component>
      </Tooltip>
    );
  },
);
Copy.displayName = "Copy";

export { Copy };
