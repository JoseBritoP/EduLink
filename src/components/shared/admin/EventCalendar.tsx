"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Pagination from "../Pagination";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type EventType = {
  id: number;
  title: string;
  date: string;
  description: string;
};

interface EventCalendarProps {
  events: EventType[];
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const [value, onChange] = useState<Value>(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {currentEvents.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 font-semibold text-xs">
                {event.date}
              </span>
            </div>
            <p className="mt-2 text-gray-700 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default EventCalendar;
