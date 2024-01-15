import React, { forwardRef } from "react";
import { ArrowLeft, ArrrowRight } from "@repo/icons";
import { Button } from "../button";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageRange?: number;
}

const defaultPageRange = 2;

// Define the Pagination component as a function with a return type
const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      onPageChange,
      pageRange = defaultPageRange,
      totalPages,
    }: PaginationProps,
    ref,
  ) => {
    // Calculate range start and end
    const rangeStart = Math.max(1, currentPage - pageRange);
    const rangeEnd = Math.min(totalPages, currentPage + pageRange);

    // Declare an empty array to store page buttons
    const pageButtons: React.ReactElement[] = [];

    // Loop through the range and create buttons
    for (let i = rangeStart; i <= rangeEnd; i += 1) {
      pageButtons.push(
        <Button
          className={
            i === currentPage ? "bg-primary text-white" : "bg-white text-black"
          }
          key={i}
          onClick={() => {
            onPageChange(i);
          }}
          variant="primary"
        >
          {i}
        </Button>,
      );
    }

    return (
      <div className="flex gap-[18px]" ref={ref}>
        {/* Render previous button if not on first page and total pages exceed range */}
        {currentPage !== 1 && totalPages > pageRange && (
          <Button
            disabled={currentPage === 1}
            onClick={() => {
              onPageChange(currentPage - 1);
            }}
            variant="primary"
          >
            <ArrowLeft fill="white" />
          </Button>
        )}
        {/* Render page buttons */}
        {pageButtons}
        {/* Render next button if not on last page and total pages exceed range */}
        {currentPage !== totalPages && totalPages > pageRange && (
          <Button
            disabled={currentPage === totalPages}
            onClick={() => {
              onPageChange(currentPage + 1);
            }}
            variant="primary"
          >
            <ArrrowRight fill="white" />
          </Button>
        )}
      </div>
    );
  },
);

Pagination.displayName = "Pagination";

export default Pagination;
