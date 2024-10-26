import Image from "next/image";
import React from "react";

export default function Footer() {
  const size = 40;
  return (
    <footer className="flex bg-veryDarkGray h-[120px] justify-center items-center gap-x-20">
      <Image src="/logo.png" alt="logo" height={size} width={size} />
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
