"use client";

import { ChevronLeftMini, ChevronRightMini } from "@repo/icons";
import * as React from "react";
import {
  DayPicker,
  useDayRender,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
} from "react-day-picker";
import { cn } from "../../lib/utils";
import { iconButtonVariants } from "../icon-button";

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type KeysToOmit = "showWeekNumber" | "captionLayout" | "mode";

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

type CalendarProps =
  | ({
      mode: "single";
    } & SingleProps)
  | ({
      mode?: undefined;
    } & SingleProps)
  | ({
      mode: "range";
    } & RangeProps);

function IconLeft(): JSX.Element {
  return <ChevronLeftMini />;
}
function IconRight(): JSX.Element {
  return <ChevronRightMini />;
}

function Calendar({
  className,
  classNames,
  /**
   * The calendar's mode.
   */
  mode = "single",
  /**
   * Whether to show days of previous and next months.
   */
  showOutsideDays = true,
  ...props
}: CalendarProps): JSX.Element {
  return (
    <DayPicker
      className={cn(className)}
      classNames={{
        months: "flex flex-col sm:flex-row",
        month: "space-y-2 p-3",
        caption: "flex justify-center relative items-center h-9",
        caption_label:
          "txt-compact-small-plus absolute bottom-0 left-0 right-0 top-1 flex items-center justify-center text-ui-fg-base",
        nav: "space-x-1 flex items-center bg-ui-bg-base-pressed rounded-md w-full h-full justify-between p-0.5",
        nav_button: cn(
          iconButtonVariants({ variant: "primary", size: "base" }),
        ),
        nav_button_previous: "!absolute left-0.5",
        nav_button_next: "!absolute right-0.5",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full gap-x-2",
        head_cell: cn(
          "txt-compact-small-plus text-ui-fg-muted m-0 box-border flex h-8 w-8 items-center justify-center p-0",
        ),
        row: "flex w-full mt-2 gap-x-2",
        cell: "txt-compact-small-plus relative rounded-md p-0 text-center focus-within:relative",
        day: "txt-compact-small-plus text-ui-fg-base bg-ui-bg-base hover:bg-ui-bg-base-hover focus:shadow-borders-interactive-with-focus h-8 w-8 rounded-md p-0 text-center outline-none transition-all",
        day_selected:
          "bg-ui-bg-interactive text-ui-fg-on-color hover:bg-ui-bg-interactive focus:bg-ui-bg-interactive",
        day_outside: "text-ui-fg-disabled aria-selected:text-ui-fg-on-color",
        day_disabled: "text-ui-fg-disabled",
        day_range_middle:
          "aria-selected:!bg-ui-bg-highlight aria-selected:!text-ui-fg-interactive",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
        Day,
      }}
      mode={mode}
      showOutsideDays={showOutsideDays}
      {...(props as SingleProps & RangeProps)}
    />
  );
}
Calendar.displayName = "Calendar";

function Day({ date, displayMonth }: DayProps): JSX.Element | null {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { activeModifiers, buttonProps, divProps, isButton, isHidden } =
    useDayRender(date, displayMonth, ref);

  const { selected, today, disabled, rangeMiddle } = activeModifiers;

  React.useEffect(() => {
    if (selected) {
      ref.current?.focus();
    }
  }, [selected]);

  if (isHidden) {
    return null;
  }

  if (!isButton) {
    return (
      <div
        {...divProps}
        className={cn("flex items-center justify-center", divProps.className)}
      />
    );
  }

  const {
    children: buttonChildren,
    className: buttonClassName,
    ...buttonPropsRest
  } = buttonProps;

  return (
    <button
      ref={ref}
      {...buttonPropsRest}
      className={cn("relative", buttonClassName)}
      type="button"
    >
      {buttonChildren}
      {today ? (
        <span
          className={cn("absolute right-[5px] top-[5px] h-1 w-1 rounded-full", {
            "bg-ui-fg-interactive": !selected,
            "bg-ui-fg-on-color": selected,
            "!bg-ui-fg-interactive": selected && rangeMiddle,
            "bg-ui-fg-disabled": disabled,
          })}
        />
      ) : null}
    </button>
  );
}

export { Calendar };
