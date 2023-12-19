import React from "react";
import Image from "next/image";

interface PatientCardProps {
  img: any;
  name: string;
  designation: string;
  year: number;
  onClick?: () => void;
}

const PatientCard = ({
  img,
  name,
  designation,
  year,
  onClick,
}: PatientCardProps) => {
  return (
    <div
      onClick={onClick}
      className="flex group flex-row py-3 gap-5 items-center justify-start px-4 border-2 border-[#ECECEC;] rounded-xl hover:bg-green-theme cursor-pointer text-black hover:text-white"
    >
      <Image
        src={img}
        alt="manisha"
        width={60}
        height={60}
        className="rounded-full"
      />

      <div className="rigth flex flex-col gap-[5px] ">
        <h4 className=" text-base md:text-[20px] font-semibold text-green-theme group-hover:text-white">
          {name}
        </h4>
        <p className=" text-sm font-medium text-[#AAA] group-hover:text-white">
          {designation}
        </p>
      </div>

      <span className="text-sm font-medium text-[#B4B4B4] group-hover:text-white">
        {year}yr
      </span>
    </div>
  );
};

export default PatientCard;
