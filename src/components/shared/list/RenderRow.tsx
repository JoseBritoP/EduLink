import { Announcement, Assignment, Class, Exam, Lesson, Parent, Result, StudentListType, Subject, TeacherType } from "@/typescript/types";
import RenderRowTeacherAndStudent from "./RenderRowTeacherAndStudent";
import RenderRowParent from "./RenderRowParent";
import RenderRowExtension from "./RenderRowExtension";

export interface RenderRowProps {
  item: TeacherType | StudentListType | Parent | Announcement | Assignment | Class | Exam | Lesson | Result | Subject;
  type: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
}

const RenderRow = ({ item, type }: RenderRowProps) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    {type === 'teacher' ? (<RenderRowTeacherAndStudent item={item as TeacherType} type="teacher"/>) : type === 'student' && <RenderRowTeacherAndStudent item={item as StudentListType} type={type}/>}
    {type === 'parent' && <RenderRowParent item={item as Parent} type="parent"/>}
    {type !== undefined && <RenderRowExtension item={item}/>}
  </tr>
);

export default RenderRow;
