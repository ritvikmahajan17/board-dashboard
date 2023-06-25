import React from "react";
import chevron_down from "../../assets/chevron-right.svg";
import { Meetings } from "../Meetings";

export const Scheduler = () => {
  const dummyMeetingsData = [
    {
      heading: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
    },
    {
      heading: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta",
    },
  ];

  return (
    <div className=" bg-white font-montserrat rounded-[20px]  w-[480px]">
      <div className="flex pt-[30px] px-10 justify-between">
        <div className="text-lg font-bold font-montserrat">
          Today’s schedule
        </div>
        <div className="flex items-center gap-x-[5px]">
          <div className="text-sm text-[#858585]">See All</div>
          <img src={chevron_down} className="w-3 h-2" alt="hello" />
        </div>
      </div>
      <div className="flex items-center px-10 pt-6 pb-6 gap-x-5">
        <div className="flex flex-col gap-y-4">
          {dummyMeetingsData.map((meeting, index) => (
            <Meetings
              heading={meeting.heading}
              time={meeting.time}
              location={meeting.location}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
