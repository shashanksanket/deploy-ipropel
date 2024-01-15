"use client";

import * as Primitives from "@radix-ui/react-alert-dialog";
import * as React from "react";
import { Button } from "../button";
import { Heading } from "../heading";
import { cn } from "../../lib/utils";

/**
 * This component is based on the [Radix UI Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog) primitives.
 */
const Root = Primitives.AlertDialog;
Root.displayName = "Prompt";

const Trigger = Primitives.Trigger;
Trigger.displayName = "Prompt.Trigger";

function Portal({ ...props }: Primitives.AlertDialogPortalProps): JSX.Element {
  return <Primitives.AlertDialogPortal {...props} />;
}
Portal.displayName = "Prompt.Portal";

const Overlay = React.forwardRef<
  React.ElementRef<typeof Primitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof Primitives.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <Primitives.Overlay
      className={cn(
        "bg-ui-bg-overlay fixed inset-0",
        // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Re-enable when Admin UI has been cleaned up
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Overlay.displayName = "Prompt.Overlay";

const Title = React.forwardRef<
  React.ElementRef<typeof Primitives.Title>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Title>, "asChild">
>(({ className, children, ...props }, ref) => {
  return (
    <Primitives.Title className={cn(className)} ref={ref} {...props} asChild>
      <Heading className="text-ui-fg-base" level="h2">
        {children}
      </Heading>
    </Primitives.Title>
  );
});
Title.displayName = "Prompt.Title";

const Content = React.forwardRef<
  React.ElementRef<typeof Primitives.Content>,
  React.ComponentPropsWithoutRef<typeof Primitives.Content>
>(({ className, ...props }, ref) => {
  return (
    <Portal>
      <Overlay />
      <Primitives.Content
        className={cn(
          "bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus:outline-none",
          // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",  // Re-enable when Admin UI has been cleaned up
          className,
        )}
        ref={ref}
        {...props}
      />
    </Portal>
  );
});
Content.displayName = "Prompt.Content";

const Description = React.forwardRef<
  React.ElementRef<typeof Primitives.Description>,
  React.ComponentPropsWithoutRef<typeof Primitives.Description>
>(({ className, ...props }, ref) => {
  return (
    <Primitives.Description
      className={cn("text-ui-fg-subtle txt-compact-medium", className)}
      ref={ref}
      {...props}
    />
  );
});
Description.displayName = "Prompt.Description";

const Action = React.forwardRef<
  React.ElementRef<typeof Primitives.Action>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Action>, "asChild">
>(({ className, children, type, ...props }, ref) => {
  return (
    <Primitives.Action className={className} ref={ref} {...props} asChild>
      <Button type={type} variant="danger">
        {children}
      </Button>
    </Primitives.Action>
  );
});
Action.displayName = "Prompt.Action";

const Cancel = React.forwardRef<
  React.ElementRef<typeof Primitives.Cancel>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Cancel>, "asChild">
>(({ className, children, ...props }, ref) => {
  return (
    <Primitives.Cancel className={cn(className)} ref={ref} {...props} asChild>
      <Button variant="secondary">{children}</Button>
    </Primitives.Cancel>
  );
});
Cancel.displayName = "Prompt.Cancel";

/**
 * This component is based on the `div` element and supports all of its props
 */
function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn("flex flex-col gap-y-1 px-6 pt-6", className)}
      {...props}
    />
  );
}
Header.displayName = "Prompt.Header";

/**
 * This component is based on the `div` element and supports all of its props
 */
function Footer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn("flex items-center justify-end gap-x-2 p-6", className)}
      {...props}
    />
  );
}
Footer.displayName = "Prompt.Footer";

const Prompt = Object.assign(Root, {
  Trigger,
  Content,
  Title,
  Description,
  Action,
  Cancel,
  Header,
  Footer,
});

export { Prompt };
