import z from "zod";

// TODO: Check schema to create teacher
const username = z
  .string()
  .min(3, { message: "Username must be at least 3 characters long!" })
  .max(20, { message: "Username must be at most 20 characters long!" });
const email = z.string().email({ message: "Invalid email address!" });
const password = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long!" });
const firstName = z.string().min(1, { message: "First name is required!" });
const lastName = z.string().min(1, { message: "Last name is required!" });
const phone = z.string().min(1, { message: "Phone is required!" });
const address = z.string().min(1, { message: "Address is required!" });
const bloodType = z.string().min(1, { message: "Blood Type is required!" });
// const birthday = z.date({ message: "Birthday is required!" })
const birthday = z.string({ message: "Birthday is required!" });
const sex = z.enum(["male", "female"], { message: "Sex is required!" });
// const img = z.instanceof(File, { message: "Image is required" })
const img = z.string({ message: "Image is required" });

// --------------------
const name = z.string();
// const student = z.object({
//   id: z.number(),
//   name,
//   email,
// });
const student = z.number();
const students = z.array(student);
const title = z.string();
const classField = z.string();
const date = z.string();
const subject = z.string();
// const teacher = z.object({
//   id:z.number(),
//   name,
// });
const teacher = z.number();
const dueDate = z.string();
const capacity = z.number();
const grade = z.number();
const startTime = z.string();
const endTime = z.string();
const type = z.enum(["exam", "assignment"]);
const score = z.number();
const teachers = z.array(teacher);

// Schema para Parent
const ParentSchema = z.object({
  name,
  email,
  students,
  phone,
  address,
});

// Schema para Announcement
const AnnouncementSchema = z.object({
  title,
  class: classField,
  date,
});

// Schema para Assignment
const AssignmentSchema = z.object({
  subject,
  class: classField,
  teacher,
  dueDate,
});

// Schema para Class
const ClassSchema = z.object({
  name,
  capacity,
  grade,
  supervisor: teacher,
});

// Schema para Event
const EventSchema = z.object({
  title,
  class: classField,
  date,
  startTime,
  endTime,
});

// Schema para Exam
const ExamSchema = z.object({
  subject,
  class: classField,
  teacher,
  date,
});

// Schema para Lesson
const LessonSchema = z.object({
  subject,
  class: classField,
  teacher,
});

// Schema para Result
const ResultSchema = z.object({
  subject,
  class: classField,
  teacher,
  student,
  type,
  date,
  score,
});

// Schema para Subject
const SubjectSchema = z.object({
  name,
  teachers,
});

export const schema = z.object({
  username,
  email,
  password,
  firstName,
  lastName,
  phone,
  address,
  bloodType,
  birthday,
  sex,
  img,
});

export type FormSchema = z.infer<typeof schema>;

export type ParentSchema = z.infer<typeof ParentSchema>;

export type AnnouncementSchema = z.infer<typeof AnnouncementSchema>;

export type AssignmentSchema = z.infer<typeof AssignmentSchema>;

export type ClassSchema = z.infer<typeof ClassSchema>;

export type EventSchema = z.infer<typeof EventSchema>;

export type ExamSchema = z.infer<typeof ExamSchema>;

export type LessonSchema = z.infer<typeof LessonSchema>;

export type ResultSchema = z.infer<typeof ResultSchema>;

export type SubjectSchema = z.infer<typeof SubjectSchema>;
