import { menuItems } from "@/constants";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Menu() {
  // TODO: Search svg icons
  return (
    <article className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <h1 className="hidden lg:block text-gray-900 font-bold text-start pl-2 my-4 cursor-default">
            {i.title}
          </h1>
          <div className="w-[90%] border-b-2 border-gray-800"/>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md font-semibold 
                  text-[#333] bg-[#FFF] hover:bg-gray-200/50 hover:text-[#0056b3]
                  
                  transition-colors duration-150 ease-in-out"
                >
                  <Image src={item.icon} alt={`${item.label + ' icon'}`} width={20} height={20} />
                  <span className="hidden lg:block font-semibold">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </article>
  );
}
