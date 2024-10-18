"use client"
import React from "react";

interface PaginationProps {
  handlePreviousPage:()=>void;
  handleNextPage:()=>void
  currentPage:number
  totalPages:number
}

export default function Pagination({currentPage,handleNextPage,handlePreviousPage,totalPages}:PaginationProps) {
  return (
    <section className="flex justify-between mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="text-xs text-gray-800 font-semibold hover:text-gray-50 bg-sky-200 hover:bg-sky-500 rounded-lg py-1 px-2 transition-colors duration-200 ease-linear"
      >
        Previous
      </button>
      <span className="text-xs text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="text-xs text-gray-800 font-semibold hover:text-gray-50 bg-sky-200 hover:bg-sky-500 rounded-lg py-1 px-2 transition-colors duration-200 ease-linear"
      >
        Next
      </button>
    </section>
  );
}
