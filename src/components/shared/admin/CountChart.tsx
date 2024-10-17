"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

interface CountChartProps {
  students: {
    label: string;
    count: number;
    fill: string;
  }[];
}
const CountChart = ({ students }: CountChartProps) => {
  const totalStudents = students.reduce(
    (total, student) => total + student.count,
    0
  );

  const boysPercentage = Math.floor((students[0].count / totalStudents) * 100);
  const girlsPercentage = Math.floor((students[1].count / totalStudents) * 100);

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx={`${boysPercentage.toString() + "%"}`}
            cy={`${girlsPercentage.toString() + "%"}`}
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={students}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="students graph"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        {students.map((student) => (
          <div key={student.label} className="flex flex-col">
            <div className={`w-5 h-5 ${student.fill} rounded-full`} />
            <h1 className="font-bold">{student.count}</h1>
            <h2 className="text-xs text-gray-300">{student.label === 'Boys' ? `${student.label + ' (' + boysPercentage + ' %)'}`  : `${student.label + ' ' + '(' + girlsPercentage + ' %)'}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
