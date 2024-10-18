import React from "react";
import {
  Announcements,
  AttendanceChart,
  CountChart,
  EventCalendar,
  FinanceChart,
  UserCard,
} from "@/components/shared/admin";

export default function AdminPage() {
  
  const studentsCount = [
    {
      label: "Total",
      count: 1420,
      fill: "white",
    },
    {
      label: "Girls",
      count: 640,
      fill: "#FAE27C",
    },
    {
      label: "Boys",
      count: 780,
      fill: "#C3EBFA",
    },
  ];

  const usersData = [
    {
      type: "student",
      count: 1420,
      date: "2024/25",
      label: "Students",
    },
    {
      type: "teacher",
      count: 966,
      date: "2024/25",
      label: "Teachers",
    },
    {
      type: "parent",
      count: 1460,
      date: "2024/25",
      label: "Parents",
    },
    {
      type: "staff",
      count: 1207,
      date: "2024/25",
      label: "Staffs",
    },
  ];

  const assistance = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];

  const finance = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
    },
    {
      name: "May",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Jun",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Jul",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Aug",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Sep",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Oct",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Nov",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Dec",
      income: 3490,
      expense: 4300,
    },
  ];

  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      date: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      date: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      date: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const announcements = [
    {
        id: 1,
        title: "Start of the School Year",
        message: "We welcome everyone to a new school year. We hope you are all ready to learn and grow together!",
        date: "2024-08-01"
    },
    {
        id: 2,
        title: "Parent Meeting",
        message: "A reminder to parents that the annual meeting will take place on September 15th at 6:00 PM in the auditorium.",
        date: "2024-09-01"
    },
    {
        id: 3,
        title: "Cultural Day",
        message: "On October 20th, we will celebrate Cultural Day. We invite everyone to participate with their traditions and foods.",
        date: "2024-10-01"
    },
    {
        id: 4,
        title: "Final Exams",
        message: "Final exams will be held from December 10th to 15th. Make sure to review and be prepared.",
        date: "2024-11-01"
    },
    {
        id: 5,
        title: "Summer Vacation",
        message: "Summer vacation will begin on December 20th. Enjoy your break!",
        date: "2024-12-01"
    },
    {
        id: 6,
        title: "Food Drive Campaign",
        message: "We are organizing a food drive from November 1st to 15th. We appreciate your support!",
        date: "2024-10-15"
    },
    {
        id: 7,
        title: "Extracurricular Workshops",
        message: "We are opening registrations for extracurricular workshops. Visit our website for more information.",
        date: "2024-09-10"
    },
    {
        id: 8,
        title: "Vocational Guidance Talk",
        message: "On November 5th, there will be a talk on vocational guidance for high school students.",
        date: "2024-10-05"
    }
  ]

  return (
    <main className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <article className="flex gap-4 justify-between flex-wrap">
          {usersData &&
            usersData.map((user) => <UserCard user={user} key={user.type} />)}
        </article>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart students={studentsCount} />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart assistance={assistance} />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart finance={finance} />
        </div>
      </section>
      {/* RIGHT */}
      <section className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar events ={events}/>
        <Announcements announcements={announcements}/>
      </section>
    </main>
  );
}
