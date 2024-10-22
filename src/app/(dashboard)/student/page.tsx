import { AnnouncementsStudent, BigCalendar, EventCalendarStudent } from '@/components/shared/student';
import { announcementsData, calendarEvents, classesData, eventsData, examsData, lessonsData, resultsData, subjectsData } from '@/lib/data';
import { StudentType } from '@/typescript/types';
import React from 'react'

export default function StudentPage() {

  const student:StudentType = {
    id:1,
    studentId:'',
    name:"",
    lastName:"",
    schedule:'4A',
    announcements:announcementsData,
    examsProgram:examsData,
    events:eventsData,
    calendar:calendarEvents,
    exams:resultsData,
    lessons:lessonsData,
    classes:classesData,
    subjects:subjectsData,
  };

  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
    {/* LEFT */}
    <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">{`Schedule (${student.schedule})`}</h1>
        <BigCalendar calendarEvents={student.calendar}/>
      </div>
    </div>
    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalendarStudent events={student.events} />
      <AnnouncementsStudent announcements={student.announcements} />
    </div>
  </div>
  )
}
