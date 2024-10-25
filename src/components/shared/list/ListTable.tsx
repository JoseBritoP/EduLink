"use client"

import React, { useState } from "react";
import Table, { ListTableAndTableProps } from "./Table";
import Pagination from "../Pagination";



export default function ListTableData({columns, data, type}:ListTableAndTableProps) {
  
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 5;

  const indexOfLastEvent = currentPage * dataPerPage;
  const indexOfFirstEvent = indexOfLastEvent - dataPerPage;
  const currentData = data.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const totalPages = Math.ceil(data.length / dataPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Table columns={columns} data={currentData} type={type} />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </>
  );
}
