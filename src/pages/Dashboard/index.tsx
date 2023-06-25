import React from "react";
import {
  Cards,
  LineGraph,
  Navbar,
  PieGraph,
  Scheduler,
  Sidebar,
} from "../../components";

const cardsData = [
  {
    title: "Total Revenues",
    amount: 2129430,
  },
  {
    title: "Total Transactions",
    amount: 1520,
  },
  {
    title: "Total Likes",
    amount: 9720,
  },
  {
    title: "Total Users",
    amount: 892,
  },
];

//props
interface DashboardProps {
  profilePicture: string;
}

export const Dashboard = ({ profilePicture }: DashboardProps) => {
  return (
    <div className="flex w-[100vw] h-full p-10 ">
      <Sidebar />
      <div className="flex flex-col gap-6 pt-5 pl-10">
        <Navbar profilePicture={profilePicture} />
        <div className="flex justify-between w-full gap-x-9">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              index={index}
              title={card.title}
              amount={card.amount}
            />
          ))}
        </div>
        <LineGraph />
        <div className="flex justify-between gap-x-10">
          <PieGraph />
          <Scheduler />
        </div>
      </div>
    </div>
  );
};
