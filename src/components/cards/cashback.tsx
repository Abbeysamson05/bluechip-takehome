"use client";

import { CardBtns } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export default function CashbackAnalytics() {
  const [index, setIndex] = useState<number>(1);
  const { screenWidth } = useResponsive();

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <section
      className={`rounded-lg bg-white py-[21px] w-full ${
        screenWidth < 1000 ? "mt-[30px]" : "*:"
      }`}
    >
      <ul className="flex justify-between border-b-2 border-[#F2F3F5] mb-5 px-8">
        {CardBtns.map((btn) => (
          <li
            className={`font-bold text-xs cursor-pointer ${
              btn.id === index
                ? "text-[#FF6633] border-b-2 border-[#FF6633] pb-[22px]"
                : "text-blue-700"
            }`}
            onClick={() => handleIndex(btn.id)}
          >
            {btn.text}
          </li>
        ))}
      </ul>
      <div
        className={`px-5 ${
          screenWidth < 1000 && screenWidth > 600 ? "flex" : ""
        }`}
      >
        <div className="rounded-t-[10px] bg-[#29CC391A] h-[120px] mb-[5px] flex justify-center items-center w-full">
          <span className="bg-[#29CC391A] py-[10px] pe-[26.5px] ps-[15px] flex rounded-[120px] items-center gap-[15px]">
          <li className="rounded-full gap-5 flex justify-center items-center"><div className="bg-[#29CC39] rounded-full"><IoAdd color={"#fff"}/></div></li>

            <p className=" text-[#29CC39] font-bold text-lg">5500 $</p>
          </span>
        </div>
        <div className="rounded-b-[10px] bg-[#E62E2E1A] h-[120px] mb-[5px] flex justify-center items-center w-full">
          <span className="bg-[#E62E2E1A] py-[10px] pe-[26.5px] ps-[15px] flex rounded-[120px] items-center gap-[15px]">
          <li className="rounded-full gap-5 flex justify-center items-center"><div className="bg-[#E62E2E] rounded-full"><IoAdd color={"#fff"}/></div></li>

          <p className=" text-[#E62E2E] font-bold text-lg">2150 $</p>
          </span>
        </div>
        
      </div>
      
    </section>
  );
}
