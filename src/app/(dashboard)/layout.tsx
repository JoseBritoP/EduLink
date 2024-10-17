import Menu from "@/components/shared/Menu";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="h-screen flex">
          <aside className="w-1/6 md:w-[8%] lg:w-[12%] xl:w-[16%] bg-gray-200">
            <Link
              href={"/"}
              className="flex items-center justify-center lg:justify-start gap-2 no-underline"
            >
              <Image src={"/logo.png"} alt="Logo" width={32} height={32} />
              <span className="hidden lg:block font-semibold ">EduLink</span>
            </Link>
            <Menu/>
          </aside>
          {children}
          <aside className="w-5/6 md:w-[92%] lg:w-[88%] xl:w-[84%] bg-sky-200">R</aside>
        </div>
      </body>
    </html>
  );
}
