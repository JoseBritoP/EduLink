import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const size = 40;
  return (
    <footer className="flex bg-veryDarkGray dark:bg-gray-950 h-[120px] justify-center items-center gap-x-20 text-gray-200">
      <Link href='/' className="flex flex-col items-center justify-center gap-y-1 ">
      <Image src="/logo.png" alt="logo" height={size} width={size} />
      <span className="font-semibold text-xl">EduLink</span>
      </Link>
      <section>
        <p className="text-lg font-medium">School EduLink</p>
        <p className="text-lg font-medium">
          School Direction - <span>Mendoza - Argentina</span>
        </p>
      </section>
      <section>
        <p className="text-lg font-medium">
          Phone: <span>261455120</span>
        </p>
        <p className="text-lg font-medium">
          Gmail: <span>schooledulink@gmail.com</span>
        </p>
      </section>
    </footer>
  );
}
