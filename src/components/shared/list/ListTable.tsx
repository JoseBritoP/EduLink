"use client"

import React, { useState } from "react";
import Table from "./Table";
import { ColumsType, StudentListType, TeacherType } from "@/typescript/types";
import Pagination from "../Pagination";

interface ListTablerProps {
  columns: ColumsType;
  renderRow:  (item: StudentListType | TeacherType) => JSX.Element;
  data: StudentListType[] | TeacherType[];
}
export default function ListTableData({columns,renderRow,data}:ListTablerProps) {
  
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
      <Table columns={columns} renderRow={renderRow} data={currentData} />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </>
  );
}
