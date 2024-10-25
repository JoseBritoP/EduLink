import { Announcement, Assignment, Class, ColumsType, Exam, Lesson, Parent, Result, StudentListType, Subject, TeacherType } from "@/typescript/types";
import React from "react";
import RenderRow from "./RenderRow";

export interface ListTableAndTableProps {
  columns: ColumsType;
  type: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
  data: TeacherType[] | StudentListType[] | Parent[] | Announcement[] | Assignment[] | Class[] | Exam[] | Lesson[] | Result[] | Subject[]
}

export default function Table({ columns, data, type }: ListTableAndTableProps) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => RenderRow({item,type}))}</tbody>
    </table>
  );
}
