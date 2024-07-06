"use client";

import { CardBtns } from "@/constants";
import { useState } from "react";
import LineChart from "../chart/line";

export default function CategoriesStatistics() {
  const [index, setIndex] = useState<number>(1);

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <section className="rounded-lg bg-white py-[21px] w-full">
      <ul className="flex justify-between border-b-2 border-[#F2F3F5] px-8">
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
      <div>
        <LineChart />
      </div>
    </section>
  );
}
