import { FormSchema } from "@/lib/schema";
import { Announcement, Event, Exam, Assignment, Class, Lesson, Subject } from "../types";

export interface FormSTProps {
  type: "create" | "update";
  data?: FormSchema;
}

export interface FormSKProps {
  type: "create" | "update" | "delete";
  data?: Subject | Result | Lesson | Exam | Event | Class | Assignment | Announcement;
}

// ----------
export interface ListTableAndTableProps {
  columns: ColumsType;
  type: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
  data: TeacherType[] | StudentListType[] | Parent[] | Announcement[]
}

export interface TableProps {
  columns: ColumsType;
  type: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
  data: TeacherType[] | StudentListType[] | Parent[] | Announcement[]
}