"use client"
import FormModal from "@/components/shared/FormModal";
import ListTableData from "@/components/shared/list/ListTable";
import TableSearch from "@/components/shared/list/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden xl:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter_img" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sort_img" width={14} height={14} />
            </button>
            {role === "admin" && (
              <>
                <button
                  aria-label="Delete teacher"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
                >
                  <Image
                    src="/plus.png"
                    alt="delete_teacher"
                    width={14}
                    height={14}
                  />
                </button>
                <FormModal table="teacher" type="create" />
              </>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      {/* <ListTeacher columns={columns} renderRow={renderRow} data={teachersData}/> */}
      <ListTableData columns={columns} type={'teacher'}data={teachersData}/>
    </div>
  );
};

export default TeacherListPage;
