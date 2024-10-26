import { role } from "@/lib/data";
import { Parent, StudentListType, TeacherType } from "@/typescript/types";
import React from "react";
// import FormModal from "../FormModal";
import SkeletonForm from "@/components/form/SkeletonForm";

interface RenderRowTeacherAndStudent {
  item: TeacherType | StudentListType | Parent;
  type: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
}

const isParent = (
  item: TeacherType | StudentListType | Parent
): item is Parent => {
  return (item as Parent).id !== undefined;
};

export default function RenderRowParent({
  item,
  type,
}: RenderRowTeacherAndStudent) {
  console.log(type)
  return (
    <>
      {isParent(item) && (
        <>
          <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
          >
            <td className="flex items-center gap-4 p-4">
              <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item?.email}</p>
              </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
              <div className="flex items-center gap-2">
                {role === "admin" && (
                  <>
                    {/* <FormModal table="parent" type="update" data={item} />
                    <FormModal table="parent" type="delete" id={item.id} /> */}
                    <SkeletonForm table="parent" type='create' data={item}/>
                  </>
                )}
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
