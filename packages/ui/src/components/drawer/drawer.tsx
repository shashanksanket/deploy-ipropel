"use client";

import { XMark } from "@repo/icons";
import * as DrawerPrimitives from "@radix-ui/react-dialog";
import * as React from "react";
import { Heading } from "../heading";
import { IconButton } from "../icon-button";
import { Kbd } from "../kbd";
import { Text } from "../text";
import { cn } from "../../lib/utils";

/**
 * This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.
 */
function DrawerRoot(
  props: React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Root>,
): JSX.Element {
  return <DrawerPrimitives.Root {...props} />;
}
DrawerRoot.displayName = "Drawer";

const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitives.Trigger className={cn(className)} ref={ref} {...props} />
  );
});
DrawerTrigger.displayName = "Drawer.Trigger";

const DrawerClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Close>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitives.Close className={cn(className)} ref={ref} {...props} />
  );
});
DrawerClose.displayName = "Drawer.Close";

function DrawerPortal(props: DrawerPrimitives.DialogPortalProps): JSX.Element {
  return <DrawerPrimitives.DialogPortal {...props} />;
}
DrawerPortal.displayName = "Drawer.Portal";

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitives.Overlay
      className={cn("bg-ui-bg-overlay fixed inset-0", className)}
      ref={ref}
      {...props}
    />
  );
});
DrawerOverlay.displayName = "Drawer.Overlay";

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Content>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitives.Content
        className={cn(
          "bg-ui-bg-base shadow-elevation-modal border-ui-border-base fixed inset-y-2 right-2 flex w-full max-w-[560px] flex-1 flex-col rounded-lg border focus:outline-none",
          // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 duration-200",
          className,
        )}
        ref={ref}
        {...props}
      />
    </DrawerPortal>
  );
});
DrawerContent.displayName = "Drawer.Content";

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className="border-ui-border-base flex items-start justify-between gap-x-4 border-b px-8 py-6"
      ref={ref}
      {...props}
    >
      <div className={cn("flex flex-col gap-y-1", className)}>{children}</div>
      <div className="flex items-center gap-x-2">
        <Kbd>esc</Kbd>
        <DrawerPrimitives.Close asChild>
          <IconButton variant="transparent">
            <XMark />
          </IconButton>
        </DrawerPrimitives.Close>
      </div>
    </div>
  );
});
DrawerHeader.displayName = "Drawer.Header";

const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex-1 px-8 pb-16 pt-6", className)}
      ref={ref}
      {...props}
    />
  );
});
DrawerBody.displayName = "Drawer.Body";

function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "border-ui-border-base flex items-center justify-end space-x-2 overflow-y-scroll border-t px-8 pb-6 pt-4",
        className,
      )}
      {...props}
    />
  );
}
DrawerFooter.displayName = "Drawer.Footer";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Title>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitives.Title
    asChild
    className={cn(className)}
    ref={ref}
    {...props}
  >
    <Heading level="h1">{children}</Heading>
  </DrawerPrimitives.Title>
));
DrawerTitle.displayName = "Drawer.Title";

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Description>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitives.Description
    asChild
    className={cn(className)}
    ref={ref}
    {...props}
  >
    <Text>{children}</Text>
  </DrawerPrimitives.Description>
));
DrawerDescription.displayName = "Drawer.Description";

const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});

export { Drawer };
