import React from "react";

interface DateChipProps {
  date: string;
  onClick?: void;
}

const DateChip = ({ date, onClick }: DateChipProps) => {
  return (
    <div className="flex w-full cursor-pointer flex-row gap-5 px-7 py-3 border-2 border-[#ECECEC] hover:border-[#26AF9F] rounded-xl bg-white hover:bg-[#F0FFFD] text-black hover:text-green-theme ">
      <div className="flex items-center justify-center w-full">
        <h4 className=" text-sm font-semibold">{date}</h4>
      </div>
    </div>
  );
};

export default DateChip;
