import { role } from "@/lib/data";
import {
  Announcement,
  Assignment,
  Class,
  Event,
  Exam,
  Lesson,
  Result,
  Subject,
} from "@/typescript/types";
import React from "react";
// import FormModal from "../FormModal";
import SkeletonForm from "@/components/form/SkeletonForm";
import { ItemT, RenderRowExtensionProps } from "@/typescript/interfaces";

const isAssignment = (item: ItemT): item is Assignment => "dueDate" in item;
const isAnnouncement = (item: ItemT): item is Announcement =>
  "date" in item && "class" in item;
const isClass = (item: ItemT): item is Class =>
  "capacity" in item && "grade" in item;
const isEvent = (item: ItemT): item is Event =>
  "startTime" in item && "endTime" in item;
const isExam = (item: ItemT): item is Exam =>
  "subject" in item && "teacher" in item;
const isLesson = (item: ItemT): item is Lesson =>
  "teacher" in item && "subject" in item;
const isResult = (item: ItemT): item is Result =>
  "student" in item && "score" in item;
const isSubject = (item: ItemT): item is Subject => "teachers" in item;

export default function RenderRowExtension({
  item
}: RenderRowExtensionProps) {

  return (
    <>
      {isAssignment(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.subject}</td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.dueDate}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" ||
                (role === "teacher" && (
                  <>
                    {/* <FormModal table="assignment" type="update" data={item} />
                 <FormModal table="assignment" type="delete" id={item.id} /> */}
                    <SkeletonForm
                      table="assignment"
                      type="update"
                      data={item}
                    />
                    <SkeletonForm
                      table="assignment"
                      type="delete"
                      id={item.id}
                    />
                  </>
                ))}
            </div>
          </td>
        </tr>
      )}
      {isAnnouncement(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.title}</td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  {/* <FormModal table="announcement" type="update" data={item} />
                <FormModal table="announcement" type="delete" id={item.id} /> */}
                  <SkeletonForm
                    table="announcement"
                    type="update"
                    data={item}
                  />
                  <SkeletonForm
                    table="announcement"
                    type="delete"
                    id={item.id}
                  />
                </>
              )}
            </div>
          </td>
        </tr>
      )}
      {isClass(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.name}</td>
          <td className="hidden md:table-cell">{item.capacity}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
          <td className="hidden md:table-cell">{item.supervisor}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  {/* <FormModal table="class" type="update" data={item} />
                <FormModal table="class" type="delete" id={item.id} /> */}
                  <SkeletonForm table="class" type="update" data={item} />
                  <SkeletonForm table="class" type="delete" id={item.id} />
                </>
              )}
            </div>
          </td>
        </tr>
      )}
      {isEvent(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.title}</td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td className="hidden md:table-cell">{item.startTime}</td>
          <td className="hidden md:table-cell">{item.endTime}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  {/* <FormModal table="event" type="update" data={item} />
                  <FormModal table="event" type="delete" id={item.id} /> */}
                  <SkeletonForm table="event" type="update" data={item} />
                  <SkeletonForm table="event" type="delete" data={item.id} />
                </>
              )}
            </div>
          </td>
        </tr>
      )}
      {isExam(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.subject}</td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" ||
                (role === "teacher" && (
                  <>
                    {/* <FormModal table="exam" type="update" data={item} />
                <FormModal table="exam" type="delete" id={item.id} /> */}
                    <SkeletonForm table="exam" type="update" data={item} />
                    <SkeletonForm table="exam" type="delete" id={item.id} />
                  </>
                ))}
            </div>
          </td>
        </tr>
      )}
      {isLesson(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.subject}</td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  <SkeletonForm table="lesson" type="update" data={item} />
                  <SkeletonForm table="lesson" type="delete" id={item.id} />
                </>
              )}
            </div>
          </td>
        </tr>
      )}
      {isResult(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.subject}</td>
          <td>{item.student}</td>
          <td className="hidden md:table-cell">{item.score}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell">{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" ||
                (role === "teacher" && (
                  <>
                    <SkeletonForm table="result" type="update" data={item} />
                    <SkeletonForm table="result" type="delete" id={item.id} />
                  </>
                ))}
            </div>
          </td>
        </tr>
      )}
      {isSubject(item) && (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">{item.name}</td>
          <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
          <td>
            <div className="flex items-center gap-2">
              {role === "admin" && (
                <>
                  <SkeletonForm table="subject" type="update" data={item} />
                  <SkeletonForm table="subject" type="delete" id={item.id} />
                </>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
