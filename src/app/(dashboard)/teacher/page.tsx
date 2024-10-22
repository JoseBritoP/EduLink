import { AnnouncementsStudent, BigCalendar } from '@/components/shared/student'
import { announcementsData, calendarEvents } from '@/lib/data'
import React from 'react'

export default function TeacherPage() {

  const teacher = {
    calendar:calendarEvents,
    announcements:announcementsData
  }
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
    {/* LEFT */}
    <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule</h1>
        <BigCalendar calendarEvents={teacher.calendar} />
      </div>
    </div>
    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <AnnouncementsStudent announcements={teacher.announcements}/>
    </div>
  </div>
  )
}
