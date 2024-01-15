/* eslint-disable --  Cant fix the lint*/
"use client";

import { ChevronUpDown, EllipseMiniSolid } from "@repo/icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  size?: "base" | "small";
}

interface SelectContextValue {
  size: "base" | "small";
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

const useSelectContext = () => {
  const context = React.useContext(SelectContext);

  if (context === null) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }

  return context;
};

/**
 * This component is based on [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select).
 * It also accepts all props of the HTML `select` component.
 */
function Root({
  children,
  /**
   * The select's size.
   */
  size = "base",
  ...props
}: SelectProps): JSX.Element {
  return (
    <SelectContext.Provider value={React.useMemo(() => ({ size }), [size])}>
      <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
    </SelectContext.Provider>
  );
}
Root.displayName = "Select";

/**
 * Groups multiple items together.
 */
const Group = SelectPrimitive.Group;
Group.displayName = "Select.Group";

/**
 * Displays the selected value, or a placeholder if no value is selected.
 * It's based on [Radix UI Select Value](https://www.radix-ui.com/primitives/docs/components/select#value).
 */
const Value = SelectPrimitive.Value;
Value.displayName = "Select.Value";

const triggerVariants = cva(
  cn(
    "bg-ui-bg-field txt-compact-medium shadow-buttons-neutral transition-fg flex w-full select-none items-center justify-between rounded-md outline-none",
    "data-[placeholder]:text-ui-fg-muted text-ui-fg-base",
    "hover:bg-ui-bg-field-hover",
    "focus:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active",
    "aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error",
    "invalid::border-ui-border-error invalid:shadow-borders-error",
    "disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",
    "group/trigger",
  ),
  {
    variants: {
      size: {
        base: "h-10 px-3 py-[9px]",
        small: "h-8 px-2 py-[5px]",
      },
    },
  },
);

/**
 * The trigger that toggles the select.
 */
const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <SelectPrimitive.Trigger
      className={cn(triggerVariants({ size }), className)}
      ref={ref}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronUpDown className="text-ui-fg-muted group-disabled/trigger:text-ui-fg-disabled" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
Trigger.displayName = "Select.Trigger";

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    {
      className,
      children,
      position = "popper",
      sideOffset = 8,
      collisionPadding = 24,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout relative max-h-[200px] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          {
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":
              position === "popper",
          },
          className,
        )}
        collisionPadding={collisionPadding}
        position={position}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
Content.displayName = "Select.Content";

/**
 * Used to label a group of items.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn(
      "txt-compact-xsmall-plus text-ui-fg-subtle px-3 py-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Label.displayName = "Select.Label";

/**
 * An item in the select. It's based on [Radix UI Select Item](https://www.radix-ui.com/primitives/docs/components/select#item)
 * and accepts its props.
 */
const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <SelectPrimitive.Item
      className={cn(
        "txt-compact-medium bg-ui-bg-base grid cursor-pointer grid-cols-[20px_1fr] gap-x-2 rounded-md px-3 py-2 outline-none transition-colors",
        "hover:bg-ui-bg-base-hover focus:bg-ui-bg-base-hover",
        {
          "txt-compact-medium data-[state=checked]:txt-compact-medium-plus":
            size === "base",
          "txt-compact-small data-[state=checked]:txt-compact-medium-plus":
            size === "small",
        },
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="flex h-5 w-5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <EllipseMiniSolid />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="flex-1 truncate">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
Item.displayName = "Select.Item";

const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    className={cn("bg-ui-border-base -mx-1 my-1 h-px", className)}
    ref={ref}
    {...props}
  />
));
Separator.displayName = "Select.Separator";

const Select = Object.assign(Root, {
  Group,
  Value,
  Trigger,
  Content,
  Label,
  Item,
  Separator,
});

export { Select };
