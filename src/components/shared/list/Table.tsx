import { ColumsType, StudentListType, TeacherType } from "@/typescript/types";
import React from "react";
import RenderRow from "./RenderRow";

interface TableProps {
  columns: ColumsType;
  data: TeacherType[] | StudentListType[]
  type: 'student' | 'teacher'
}
export default function Table({ columns, data, type }: TableProps) {
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
