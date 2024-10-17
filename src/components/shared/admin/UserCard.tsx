import Image from "next/image";
import React from "react";

interface UserCardProps {
  user: {
    type: string;
    count: number;
    date: string;
    label: string;
  };
}
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold bg-white px-2 py-1 rounded-full text-emerald-600">
          {user.date}
        </span>
        <Image
          src="/more.png"
          alt={`${user.type + " image"}`}
          width={20}
          height={20}
        />
      </div>
      <h1 className="text-2xl font-bold my-4 text-gray-800">{user.count}</h1>
      <h2 className="capitalize text-sm md:text-base font-semibold text-gray-600">
        {user.label}
      </h2>
    </div>
  );
}
