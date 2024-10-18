"use client"

type AnnouncementsType =  {
  id: number;
  title: string;
  message: string;
  date: string;
}

interface AnnouncementsProps {
  announcements:AnnouncementsType[]
}

const Announcements = ({announcements}:AnnouncementsProps) => {
  return (
    <article className="bg-white p-4 rounded-md">
      <section className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <button className="text-xs text-gray-800 font-semibold hover:text-gray-50 bg-sky-200 hover:bg-sky-500 rounded-lg py-1 px-2 transition-colors duration-200 ease-linear">View All</button>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        {announcements && announcements.map((announcement)=>(
          <article className="bg-lamaSkyLight rounded-md p-4 cursor-default" key={announcement.id}>
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{announcement.date}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{announcement.message}</p>
          </article>
        ))}
      </section>
    </article>
  );
};

export default Announcements;