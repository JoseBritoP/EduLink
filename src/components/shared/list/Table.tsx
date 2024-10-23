import { ColumsType, StudentListType, TeacherType } from "@/typescript/types";
import React from "react";

interface TableProps {
  columns: ColumsType;
  renderRow:  (item: TeacherType | StudentListType) => JSX.Element;
  data: TeacherType[] | StudentListType[]
}
export default function Table({ columns, data, renderRow }: TableProps) {
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
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}
