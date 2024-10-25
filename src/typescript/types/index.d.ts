// TODO: union types for db
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
export type StudentListType = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};
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

export type ColumnType = {
  header: string;
  accessor: string;
  className?: undefined;
} | {
  header: string;
  accessor: string;
  className: string;
}

export type ColumsType =({
  header: string;
  accessor: string;
  className?: undefined;
} | {
  header: string;
  accessor: string;
  className: string;
})[]

export type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

export type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

export type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

export type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

export type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

export type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

export type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

export type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

export type Subject = {
  id: number;
  name: string;
  teachers: TeacherType[];
}; 