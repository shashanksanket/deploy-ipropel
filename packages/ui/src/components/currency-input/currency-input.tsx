/* eslint-disable --  Cant fix the lint*/
"use client";

import * as React from "react";
import Primitive from "react-currency-input-field";
import { type VariantProps, cva } from "class-variance-authority";
import { Text } from "../text";
import { cn } from "../../lib/utils";

const currencyInputVariants = cva(
  cn(
    "flex items-center gap-x-1",
    "bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-buttons-neutral placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full rounded-md",
    "focus-within:shadow-borders-interactive-with-active",
  ),
  {
    variants: {
      size: {
        base: "txt-compact-medium h-10 px-3",
        small: "txt-compact-small h-8 px-2",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

interface CurrencyInputProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof Primitive>,
      "prefix" | "suffix" | "size"
    >,
    VariantProps<typeof currencyInputVariants> {
  symbol: string;
  code: string;
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      /**
       * The input's size.
       */
      size = "base",
      /**
       * The symbol to show in the input.
       */
      symbol,
      /**
       * The currency code to show in the input.
       */
      code,
      disabled,
      onInvalid,
      className,
      ...props
    }: CurrencyInputProps,
    ref,
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => innerRef.current,
    );

    const [valid, setValid] = React.useState(true);

    const onInnerInvalid = React.useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        setValid(event.currentTarget.validity.valid);

        if (onInvalid) {
          onInvalid(event);
        }
      },
      [onInvalid],
    );

    return (
      <div
        className={cn(
          "w-full cursor-text justify-between overflow-hidden",
          currencyInputVariants({ size }),
          {
            "text-ui-fg-disabled !bg-ui-bg-disabled !shadow-buttons-neutral !placeholder-ui-fg-disabled cursor-not-allowed":
              disabled,
            "!shadow-borders-error invalid:!shadow-borders-error":
              props["aria-invalid"] || !valid,
          },
          className,
        )}
        onClick={() => {
          if (innerRef.current) {
            innerRef.current.focus();
          }
        }}
      >
        <span
          className={cn("w-fit", {
            "py-[9px]": size === "base",
            "py-[5px]": size === "small",
          })}
          role="presentation"
        >
          <Text
            className={cn(
              "text-ui-fg-muted pointer-events-none select-none uppercase",
              {
                "text-ui-fg-disabled": disabled,
              },
            )}
          >
            {code}
          </Text>
        </span>
        <Primitive
          className="h-full min-w-0 flex-1 appearance-none bg-transparent text-right outline-none disabled:cursor-not-allowed"
          disabled={disabled}
          onInvalid={onInnerInvalid}
          ref={innerRef}
          {...props}
        />
        <span
          className={cn("w-fit min-w-[16px] text-right", {
            "py-[9px]": size === "base",
            "py-[5px]": size === "small",
          })}
          role="presentation"
        >
          <Text
            className={cn("text-ui-fg-muted pointer-events-none select-none", {
              "text-ui-fg-disabled": disabled,
            })}
          >
            {symbol}
          </Text>
        </span>
      </div>
    );
  },
);
CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };
