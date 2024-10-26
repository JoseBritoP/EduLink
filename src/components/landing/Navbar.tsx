"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./NavItem";

export default function Navbar() {
  const size = 40;

  // const lightGradiant = `bg-gradient-to-r from-sky-600/80 via-sky-600 to-green-800/80`
  // const darkGradiant = `dark:bg-gradient-to-r dark:from-sky-700/80 dark:via-slate-400/80 dark:to-green-700/80`
  return (
    <nav className={`flex justify-between items-center space-x-6 bg-sky-700 dark:bg-[#151825] py-6 px-4 h-[65px]`}>
      <div>
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={size} height={size} />
          <span className="hidden lg:block font-bold text-gray-100 dark:text-sky-500 text-center pl-2  ">EduLink</span>
        </Link>
      </div>

      <NavItem />
    </nav>
  );
}
