import { role } from "@/lib/data";
import Image from "next/image";
import React from "react";
import FormModal from "../FormModal";

interface TeacherCardProps {
  teacher: {
    id: number;
    teacherId: string;
    name: string;
    email: string;
    bloodType: string;
    birthDay: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
  };
}
export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className="flex flex-col lg:flex-row gap-4">
      {/* USER INFO CARD */}
      <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
        <div className="w-1/3">
          <Image
            src={teacher.photo}
            alt=""
            width={144}
            height={144}
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">{teacher.name}</h1>
            {role === "admin" && (
              <FormModal
                table="teacher"
                type="update"
                data={{
                  username: "deanguerrero",
                  email: "deanguerrero@gmail.com",
                  password: "password",
                  firstName: "Dean",
                  lastName: "Guerrero",
                  phone: "+1 234 567 89",
                  address: "1234 Main St, Anytown, USA",
                  bloodType: "A+",
                  birthday: "2000-01-01",
                  sex: "male",
                  img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                }}
              />
            )}
          </div>
          <p className="text-sm text-gray-500">{teacher.address}</p>
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/blood.png" alt="" width={14} height={14} />
              <span>{teacher.bloodType}</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/date.png" alt="" width={14} height={14} />
              <span>{teacher.birthDay}</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14} />
              <span>{teacher.email}</span>
            </div>
            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
              <Image src="/phone.png" alt="" width={14} height={14} />
              <span>{teacher.phone}</span>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL CARDS */}
      <div className="flex-1 flex gap-4 justify-between flex-wrap">
        {/* CARD */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <Image
            src="/singleAttendance.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="">
            <h1 className="text-xl font-semibold">90%</h1>
            <span className="text-sm text-gray-400">Attendance</span>
          </div>
        </div>
        {/* CARD */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <Image
            src="/singleBranch.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="">
            <h1 className="text-xl font-semibold">2</h1>
            <span className="text-sm text-gray-400">Branches</span>
          </div>
        </div>
        {/* CARD */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <Image
            src="/singleLesson.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="">
            <h1 className="text-xl font-semibold">6</h1>
            <span className="text-sm text-gray-400">Lessons</span>
          </div>
        </div>
        {/* CARD */}
        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <Image
            src="/singleClass.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <div className="">
            <h1 className="text-xl font-semibold">6</h1>
            <span className="text-sm text-gray-400">Classes</span>
          </div>
        </div>
      </div>
    </article>
  );
}
