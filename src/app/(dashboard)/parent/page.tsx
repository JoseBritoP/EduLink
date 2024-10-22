import { AnnouncementsStudent, BigCalendar } from "@/components/shared/student";
import { announcementsData, calendarEvents } from "@/lib/data";
import React from "react";

export default function ParentPage() {
  const parent = {
    children: [
      {
        id: 1,
        name: "John Doe",
      },
    ],
    calendar: calendarEvents,
    announcements: announcementsData,
  };
  
  return (
    <main className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <section className="w-full xl:w-2/3">
        {parent.children.map((child) => (
          <div key={child.id} className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">
              Schedule(<span>{child.name}</span>)
            </h1>
            <BigCalendar calendarEvents={parent.calendar} />
          </div>
        ))}
      </section>
      {/* RIGHT */}
      <section className="w-full xl:w-1/3 flex flex-col gap-8">
        <AnnouncementsStudent announcements={parent.announcements} />
      </section>
    </main>
  );
}
