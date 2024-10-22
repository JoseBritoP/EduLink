// Data
export type TeacherType = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

export type StudentType = {
  id:number
  studentId:string
  name:string
  lastName:string
  schedule:string
  announcements:StudentAnnouncements
  examsProgram:ExamsPrograms
  events:StudentEvent
  calendar:StudentCalendarEvents
  exams:ExamScore
  lessons:LessonType
  classes:ClassesType
  subjects:SubjectsType
}

// Student props

export type SubjectsType = {
  id: number;
  name: string;
  teachers: string[];
}[]

export type ClassesType =  {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}[]

export type LessonType =  {
  id: number;
  subject: string;
  class: string;
  teacher: string;
}[]

export type ExamScore =  {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
}[]

export type StudentCalendarEvents =  {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}[]
export type StudentAnnouncements = {
  id: number;
  title: string;
  class: string;
  date: string;
}[]

export type ExamsPrograms = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
}[]

export type StudentEvent =  {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}[]
// List

export type Colums = {
  header: string;
  accessor: string;
  className?: string | undefined;
}[]
