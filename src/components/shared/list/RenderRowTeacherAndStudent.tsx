import { role } from "@/lib/data";
import { StudentListType, TeacherType } from "@/typescript/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormModal from "../FormModal";

interface RenderRowTeacherAndStudent {
  item: TeacherType | StudentListType;
  type: "teacher" | "student";
}

const isTeacher = (
  item: TeacherType | StudentListType
): item is TeacherType => {
  return (item as TeacherType).teacherId !== undefined;
};

const isStudent = (
  item: TeacherType | StudentListType
): item is StudentListType => {
  return (item as StudentListType).studentId !== undefined;
};

export default function RenderRowTeacherAndStudent({
  item,
  type,
}: RenderRowTeacherAndStudent) {
  return (
    <>
      <td className="flex items-center gap-4 p-1 md:p-4">
        <Image
          src={item.photo}
          alt={`${item.name}_img`}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>

      {isTeacher(item) ? (
        <>
          <td className="hidden md:table-cell">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects.join(" - ")}</td>
          <td className="hidden md:table-cell">{item.classes.join(" - ")}</td>
          <td className="hidden lg:table-cell">{item.phone}</td>
          <td className="hidden xl:table-cell">{item.address}</td>
        </>
      ) : isStudent(item) ? (
        <>
          <td className="hidden md:table-cell">{item.studentId}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
          <td className="hidden md:table-cell">{item.phone}</td>
          <td className="hidden md:table-cell">{item.address}</td>
        </>
      ) : (
        <></>
      )}

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/${type}s/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="view_logo" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt={`delete_${type}_img`} width={16} height={16} />
              </button>
              <FormModal table={type} type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </>
  );
}
