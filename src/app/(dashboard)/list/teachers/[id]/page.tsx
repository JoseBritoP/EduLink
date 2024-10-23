import TeacherCard from "@/components/shared/card/TeacherCard";
import FormModal from "@/components/shared/FormModal";
import Performance from "@/components/shared/Performance";
import { AnnouncementsStudent, BigCalendar } from "@/components/shared/student";
import { announcementsData, calendarEvents, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const shortCutsMenu = [
  {
    label:`Teacher's Classes`,
    href:'/classes',
    className:'p-3 rounded-md bg-lamaSkyLight hover:bg-lamaSky font-medium text-center'
  },
  {
    label:`Teacher's Students`,
    href:'/students',
    className:'p-3 rounded-md bg-lamaSkyLight hover:bg-lamaSky font-medium text-center'
  },
  {
    label:`Teacher's Lessons`,
    href:'/lessons',
    className:'p-3 rounded-md bg-lamaYellowLight hover:bg-lamaYellow font-medium text-center'
  },
  {
    label:`Teacher's Exams`,
    href:'/exams',
    className:'p-3 rounded-md bg-pink-50 hover:bg-pink-100 font-medium text-center'
  },
  {
    label:`Teacher's Assignments`,
    href:'/assignments',
    className:'p-3 rounded-md bg-lamaSkyLight hover:bg-lamaSky font-medium text-center'
  },
 
]

const SingleTeacherPage = ({params}:{params:{id:string}}) => {
  console.log(params)

  const teacherDetail = {
    id: 1,
    teacherId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    bloodType:'+A',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    birthDay:'January 2025',
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Anytown, USA",
  };

  return (
    <article className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <section className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                {role === "admin" && <FormModal
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
                />}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
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
        </div>
        <TeacherCard teacher={teacherDetail}/>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar  calendarEvents={calendarEvents}/>
        </div>
      </section>
      {/* RIGHT */}
      <aside className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <nav className="mt-4 gap-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-xs text-gray-500">
            {shortCutsMenu.map((short)=>(
              <Link key={short.href} href={short.href} className={short.className}>{short.label}</Link>
            ))}
          </nav>
        </div>
        <Performance />
        <AnnouncementsStudent announcements={announcementsData}/>
      </aside>
    </article>
  );
};

export default SingleTeacherPage;