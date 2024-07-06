"use client";

import BarChart from "@/components/chart/bar";
import { CardBtns } from "@/constants";
import { useState } from "react";

export default function Operations() {
  const [index, setIndex] = useState<number>(1);

  const inflowData: number[] = [
    50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 60, 70, 80, 90, 100,
    110, 120, 130, 140, 150, 160,
  ];
  const outflowData: number[] = [
    40, 0, 0, 0, 0, 0, 0, 0, 125, 0, 0, 0, 0, 0, 65, 0, 0, 0, 0, 0, 30,
  ];

  const months: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <section className="rounded-lg bg-white py-[21px] w-full">
      <ul className="flex justify-center border-b-2 border-[#F2F3F5] mb-5 px-8 gap-[35px]">
        {CardBtns.map((btn) => (
          <li
            className={`font-bold text-xs ${
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
      <div className="md:px-[45px] px-[15px]">
        <BarChart
          data={inflowData}
          labels={months}
          backgroundColor="#FFA500"
          borderColor="#D3A22F"
        />
        <BarChart
          data={outflowData}
          labels={months}
          backgroundColor="#00FF00"
          borderColor="#008000"
        />
      </div>
    </section>
  );
}
