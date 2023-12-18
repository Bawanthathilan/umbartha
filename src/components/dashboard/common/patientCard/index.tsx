import React from "react";
import Image from "next/image";

interface PatientCardProps {
  img: any;
  name: string;
  designation: string;
  year: number;
}

const PatientCard = ({ img, name, designation, year }: PatientCardProps) => {
  return (
    <div className="flex group flex-row py-3 gap-5 items-center justify-start px-4 border-2 border-[#ECECEC;] rounded-xl hover:bg-green-theme cursor-pointer text-black hover:text-white">
      <Image
        src={img}
        alt="manisha"
        width={60}
        height={60}
        className="rounded-full"
      />

      <div className="rigth flex flex-col gap-0 ">
        <h4 className=" text-base md:text-[20px] font-semibold text-green-theme group-hover:text-white">
          {name}
        </h4>
        <p className=" text-sm font-medium">{designation}</p>
      </div>

      <span className="text-sm font-medium">{year}yr</span>
    </div>
  );
};

export default PatientCard;
