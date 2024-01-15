import { Minus } from "@repo/icons";
import * as React from "react";
import { Button } from "../button";
import { cn } from "../../lib/utils";

/**
 * This component is based on the table element and its various children:
 *
 * - `Table`: `table`
 * - `Table.Header`: `thead`
 * - `Table.Row`: `tr`
 * - `Table.HeaderCell`: `th`
 * - `Table.Body`: `tbody`
 * - `Table.Cell`: `td`
 *
 * Each component supports the props or attributes of its equivalent HTML element.
 */
const Root = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    className={cn("text-ui-fg-subtle txt-compact-small w-full", className)}
    ref={ref}
    {...props}
  />
));
Root.displayName = "Table";

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    className={cn(
      "bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base transition-fg border-b",
      "[&_td:last-child]:pr-8 [&_th:last-child]:pr-8",
      "[&_td:first-child]:pl-8 [&_th:first-child]:pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Row.displayName = "Table.Row";

const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td className={cn("h-12 pr-3", className)} ref={ref} {...props} />
));
Cell.displayName = "Table.Cell";

const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    className={cn(
      "border-ui-border-base txt-compact-small-plus [&_tr:hover]:bg-ui-bg-base border-y",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Header.displayName = "Table.Header";

const HeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th className={cn("h-12 pr-3 text-left", className)} ref={ref} {...props} />
));
HeaderCell.displayName = "Table.HeaderCell";

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    className={cn("border-ui-border-base border-b", className)}
    ref={ref}
    {...props}
  />
));
Body.displayName = "Table.Body";

interface TablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  pageSize: number;
  pageIndex: number;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

/**
 * This component is based on the `div` element and supports all of its props
 */
const Pagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      className,
      /**
       * The total number of items.
       */
      count,
      /**
       * The number of items per page.
       */
      pageSize,
      /**
       * The total number of pages.
       */
      pageCount,
      /**
       * The current page index.
       */
      pageIndex,
      /**
       * Whether there's a previous page that can be navigated to.
       */
      canPreviousPage,
      /**
       * Whether there's a next page that can be navigated to.
       */
      canNextPage,
      /**
       * A function that handles navigating to the next page.
       * This function should handle retrieving data for the next page.
       */
      nextPage,
      /**
       * A function that handles navigating to the previous page.
       * This function should handle retrieving data for the previous page.
       */
      previousPage,
      ...props
    }: TablePaginationProps,
    ref,
  ) => {
    const { from: fromCount, to: toCount } = React.useMemo(() => {
      const from = count === 0 ? count : pageIndex * pageSize + 1;
      const to = Math.min(count, (pageIndex + 1) * pageSize);

      return { from, to };
    }, [count, pageIndex, pageSize]);

    return (
      <div
        className={cn(
          "text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-5 pb-6 pt-4",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="inline-flex items-center gap-x-1 px-3 py-[5px]">
          <p>{fromCount}</p>
          <Minus className="text-ui-fg-muted" />
          <p>{`${toCount} of ${count} results`}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="inline-flex items-center gap-x-1 px-3 py-[5px]">
            <p>
              {pageIndex + 1} of {Math.max(pageCount, 1)}
            </p>
          </div>
          <Button
            disabled={!canPreviousPage}
            onClick={previousPage}
            variant="transparent"
          >
            Prev
          </Button>
          <Button
            disabled={!canNextPage}
            onClick={nextPage}
            variant="transparent"
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
);
Pagination.displayName = "Table.Pagination";

const Table = Object.assign(Root, {
  Row,
  Cell,
  Header,
  HeaderCell,
  Body,
  Pagination,
});

export { Table };
