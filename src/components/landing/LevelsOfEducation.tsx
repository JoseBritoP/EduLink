import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LevelsOfEducation() {
  const levels = [
    {
      title: "Initial Level",
      img: "https:/colegioschweitzer.edu.ar//img2/inicial.jpeg",
      href: "/initial",
    },
    {
      title: "Elementary Level",
      img: "https:/colegioschweitzer.edu.ar//img2/primaria.jpeg",
      href: "/elementary",
    },
    {
      title: "High School Level",
      img: "https:/colegioschweitzer.edu.ar//img2/secundaria.jpeg",
      href: "/high-school",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-Y-5 bg-yellow-100 w-full pt-10 pb-14 border-t border-t-green-800 border-b border-b-green-800">
      <h1 className="uppercase text-2xl md:text-4xl pb-5 font-semibold text-center">
        Levels of Education
      </h1>
      <article className="flex items-center justify-evenly gap-x-5">
        {levels.map((lev, i) => (
          <Link href={lev.href} key={i} className="relative inline-block">
            <Image
              src={lev.img}
              alt={`${lev.title}_img`}
              width={400}
              height={400}
              className="block"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-lg hover:bg-sky-900 hover:bg-opacity-50 text-xl text-gray-200 font-semibold p-2 underline">
              {lev.title}
            </h2>
          </Link>
        ))}
      </article>
    </section>
  );
}
