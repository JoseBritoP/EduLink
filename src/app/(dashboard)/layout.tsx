import Menu from "@/components/shared/Menu";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const size = 40
  return (
    <html>
      <body>
        <div className="h-screen flex">
          <aside className="w-1/6 md:w-[8%] lg:w-[12%] xl:w-[16%] bg-white border-r border-r-slate-200">
            <Link
              href={"/"}
              className="flex items-center justify-center lg:justify-start gap-2 no-underline text-lg"
            >
              <Image src={"/logo.png"} alt="Logo" width={size} height={size} />
              <span className="hidden lg:block font-semibold ">EduLink</span>
            </Link>
            <Menu />
          </aside>
          <aside className="w-5/6 md:w-[92%] lg:w-[88%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll">
            <Navbar />
            {children}
          </aside>
        </div>
      </body>
    </html>
  );
}
