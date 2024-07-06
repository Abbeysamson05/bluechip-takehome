"use client";

import { CardBtns, PlaceList } from "@/constants";
import { useState } from "react";
import { IoFastFood } from "react-icons/io5";

export default function Place() {
  const [index, setIndex] = useState<number>(1);

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <section className="rounded-lg bg-white py-[21px] h-full overflow-scroll">
      <ul className="flex border-b-2 border-[#F2F3F5] mb-5 gap-[35px] justify-center">
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
      <ul className="overflow-scroll">
        {PlaceList.map((place) => (
          <li className="flex items-center font-bold text-xs text-blue-600 pb-[18px] border-b-2 border-[#F5F6F7]">
            <span className="w-[50px] h-[50px] md:mx-[25px] mx-[15px]  flex justify-center items-center">
              <IoFastFood size={50}/>
            </span>
            <p className="me-auto">{place.text}</p>
            <p className="rounded-[15px] bg-[#F7F8FA] py-[5px] px-[15px] me-[10px]">
              {place.quantity}
            </p>
            <p className=" rounded-[15px] bg-[#F7F8FA] py-[5px] px-[15px] me-[25px]">
              {place.amount}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
