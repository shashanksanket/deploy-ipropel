"use client";

import { Eye, EyeSlash, MagnifyingGlassMini } from "@repo/icons";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const inputBaseStyles = cn(
  "caret-ui-fg-base bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-borders-base placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full appearance-none rounded-md outline-none",
  "focus:shadow-borders-interactive-with-active",
  "disabled:text-ui-fg-disabled disabled:!bg-ui-bg-disabled disabled:placeholder-ui-fg-disabled disabled:cursor-not-allowed",
  "aria-[invalid=true]:!shadow-borders-error  invalid:!shadow-borders-error",
);

const inputVariants = cva(
  cn(
    inputBaseStyles,
    "[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
  ),
  {
    variants: {
      size: {
        base: "txt-compact-medium h-10 px-3 py-[9px]",
        small: "txt-compact-small h-8 px-2 py-[5px]",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

interface InputProps
  extends VariantProps<typeof inputVariants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {}

/**
 * This component is based on the `input` element and supports all of its props
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      /**
       * The input's size.
       */
      size = "base",
      ...props
    }: InputProps,
    ref,
  ) => {
    const [typeState, setTypeState] = React.useState(type);

    const isPassword = type === "password";
    const isSearch = type === "search";

    return (
      <div className="relative">
        <input
          className={cn(
            inputVariants({ size }),
            {
              "pr-11": isPassword && size === "base",
              "pl-11": isSearch && size === "base",
              "pr-9": isPassword && size === "small",
              "pl-9": isSearch && size === "small",
            },
            className,
          )}
          ref={ref}
          type={isPassword ? typeState : type}
          {...props}
        />
        {isSearch ? (
          <div
            className={cn(
              "text-ui-fg-muted absolute bottom-0 left-0 flex items-center justify-center",
              {
                "h-10 w-11": size === "base",
                "h-8 w-9": size === "small",
              },
            )}
            role="img"
          >
            <MagnifyingGlassMini />
          </div>
        ) : null}
        {isPassword ? (
          <div
            className={cn(
              "absolute bottom-0 right-0 flex w-11 items-center justify-center",
              {
                "h-10 w-11": size === "base",
                "h-8 w-9": size === "small",
              },
            )}
          >
            <button
              className="text-ui-fg-muted hover:text-ui-fg-base focus:text-ui-fg-base focus:shadow-borders-interactive-w-focus active:text-ui-fg-base h-fit w-fit rounded-sm outline-none transition-all"
              onClick={() => {
                setTypeState(typeState === "password" ? "text" : "password");
              }}
              type="button"
            >
              <span className="sr-only">
                {typeState === "password" ? "Show password" : "Hide password"}
              </span>
              {typeState === "password" ? <Eye /> : <EyeSlash />}
            </button>
          </div>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input, inputBaseStyles };
