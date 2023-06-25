import React from "react";
import chevron_down from "../../assets/chevron-down.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "",
    guest: 4000,
    user: 2400,
    amt: 2400,
  },
  {
    name: "Week 1",
    guest: 3000,
    user: 1398,
    amt: 2210,
  },
  {
    name: "",
    guest: 2000,
    user: 9800,
    amt: 2290,
  },
  {
    name: "Week 2",
    guest: 2780,
    user: 3908,
    amt: 2000,
  },
  {
    name: "",
    guest: 2000,
    user: 9800,
    amt: 2290,
  },
  {
    name: "Week 3",
    guest: 2780,
    user: 3908,
    amt: 2000,
  },
  {
    name: "",
    guest: 2000,
    user: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    guest: 2780,
    user: 3908,
    amt: 2000,
  },
  {
    name: "",
    guest: 2000,
    user: 9800,
    amt: 2290,
  },
];

export const LineGraph = () => {
  return (
    <div className="pt-8 pb-7 bg-white font-montserrat rounded-[20px] w-full  min-w-[1000px]">
      <div className="flex justify-between items-center mb-[31px] ml-[44px]">
        <div className="flex flex-col">
          <div className="text-lg font-bold text-slate-900">Activities</div>
          <div className="flex gap-x-[5px]">
            <div className="text-sm text-[#858585]">May-June 2021</div>
            <img src={chevron_down} alt="hello" />
          </div>
        </div>
        <div className="flex gap-x-[35px] pr-[60px]">
          <div className="inline-flex items-center">
            <span className="inline-block w-2 h-2 mr-2 bg-[#E9A0A0] rounded-full"></span>
            <span className="font-lato">Guest</span>
          </div>
          <div className="inline-flex items-center">
            <span className="inline-block w-2 h-2 mr-2 bg-[#9BDD7C] rounded-full"></span>
            <span className="font-lato">User</span>
          </div>
        </div>
      </div>
      <LineChart
        width={1000}
        height={359}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 40,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" tickLine={false} axisLine={false} tickCount={4} />
        <YAxis tickLine={false} axisLine={false} tickCount={6} />
        <Tooltip />
        <CartesianGrid vertical={false} />

        <Line
          type="monotone"
          dataKey="guest"
          dot={false}
          stroke="#E9A0A0"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dot={false}
          dataKey="user"
          stroke="#9BDD7C"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};
