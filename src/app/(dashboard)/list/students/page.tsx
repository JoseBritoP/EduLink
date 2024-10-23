"use client"
import FormModal from "@/components/shared/FormModal";
import ListTableData from "@/components/shared/list/ListTable";
import TableSearch from "@/components/shared/list/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
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

const StudentListPage = () => {

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                  <Image src="/plus.png" alt="" width={14} height={14} />
                </button>
                <FormModal table="student" type="create" />
              </>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      {/* PAGINATION */}
      {/* <StudentList columns={columns} data={studentsData} renderRow={renderRow}/> */}
      <ListTableData columns={columns} data={studentsData} type={'student'}/>
    </div>
  );
};

export default StudentListPage;
