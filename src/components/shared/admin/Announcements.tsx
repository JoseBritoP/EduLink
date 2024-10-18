"use client";
import React, { useState } from "react";
import Pagination from "../Pagination";

type AnnouncementsType = {
  id: number;
  title: string;
  message: string;
  date: string;
};

interface AnnouncementsProps {
  announcements: AnnouncementsType[];
}

const Announcements = ({ announcements }: AnnouncementsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 3;

  // Calcular los índices de los anuncios a mostrar
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement =
    indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

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
    <article className="bg-white p-4 rounded-md min-h-[480px]">
      <section className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <button className="text-xs text-gray-800 font-semibold hover:text-gray-50 bg-sky-200 hover:bg-sky-500 rounded-lg py-1 px-2 transition-colors duration-200 ease-linear">
          View All
        </button>
      </section>
      <section className="flex flex-col gap-4 mt-4 min-h-[350px]">
        {currentAnnouncements.map((announcement) => (
          <article
            className="bg-lamaSkyLight rounded-md p-4 cursor-default"
            key={announcement.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{announcement.message}</p>
          </article>
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </article>
  );
};

export default Announcements;
