"use client"

import React, { useState } from "react";
import Table from "./Table";
import { Colums, TeacherType } from "@/typescript/types";
import Pagination from "../Pagination";

interface ListTeacherProps {
  columns: Colums;
  renderRow:  (item: TeacherType) => JSX.Element;
  data: TeacherType[];
}
export default function ListTeacher({columns,renderRow,data}:ListTeacherProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const teachersPerPage = 5;

  const indexOfLastEvent = currentPage * teachersPerPage;
  const indexOfFirstEvent = indexOfLastEvent - teachersPerPage;
  const currentTeachers = data.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const totalPages = Math.ceil(data.length / teachersPerPage);

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
      <Table columns={columns} renderRow={renderRow} data={currentTeachers} />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </>
  );
}
