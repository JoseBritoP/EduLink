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
        <EventCalendar />
        <Announcements />
      </section>
    </main>
  );
}
