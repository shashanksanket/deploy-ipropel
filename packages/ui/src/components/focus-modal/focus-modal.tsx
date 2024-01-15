"use client";

import { XMark } from "@repo/icons";
import * as FocusModalPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
import { IconButton } from "../icon-button";
import { Kbd } from "../kbd";
import { cn } from "../../lib/utils";

type FocusModalRootProps = React.ComponentPropsWithoutRef<
  typeof FocusModalPrimitives.Root
>;

/**
 * This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.
 */
function FocusModalRoot(props: FocusModalRootProps): JSX.Element {
  return <FocusModalPrimitives.Root {...props} />;
}
FocusModalRoot.displayName = "FocusModal";

const FocusModalTrigger = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Trigger>
>((props, ref) => {
  return <FocusModalPrimitives.Trigger ref={ref} {...props} />;
});
FocusModalTrigger.displayName = "FocusModal.Trigger";

function FocusModalPortal({
  ...props
}: FocusModalPrimitives.DialogPortalProps): JSX.Element {
  return <FocusModalPrimitives.DialogPortal {...props} />;
}
FocusModalPortal.displayName = "FocusModal.Portal";

const FocusModalOverlay = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <FocusModalPrimitives.Overlay
      className={cn(
        "bg-ui-bg-overlay fixed inset-0",
        // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
FocusModalOverlay.displayName = "FocusModal.Overlay";

const FocusModalContent = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Content>
>(({ className, ...props }, ref) => {
  return (
    <FocusModalPortal>
      <FocusModalOverlay />
      <FocusModalPrimitives.Content
        className={cn(
          "bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border focus:outline-none",
          // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200",
          className,
        )}
        ref={ref}
        {...props}
      />
    </FocusModalPortal>
  );
});
FocusModalContent.displayName = "FocusModal.Content";

/**
 * This component is based on the `div` element and supports all of its props
 */
const FocusModalHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-x-2">
        <FocusModalPrimitives.Close asChild>
          <IconButton variant="transparent">
            <XMark />
          </IconButton>
        </FocusModalPrimitives.Close>
        <Kbd>esc</Kbd>
      </div>
      {children}
    </div>
  );
});
FocusModalHeader.displayName = "FocusModal.Header";

/**
 * This component is based on the `div` element and supports all of its props
 */
const FocusModalBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return <div className={cn("flex-1", className)} ref={ref} {...props} />;
});
FocusModalBody.displayName = "FocusModal.Body";

const FocusModal = Object.assign(FocusModalRoot, {
  Trigger: FocusModalTrigger,
  Content: FocusModalContent,
  Header: FocusModalHeader,
  Body: FocusModalBody,
});

export { FocusModal };
