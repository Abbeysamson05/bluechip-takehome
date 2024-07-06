"use client";

import { CardBtns} from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import { contentCard } from "@/interfaces";
import { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

export default function Income() {
  const [index, setIndex] = useState<number>(1);
  const { screenWidth } = useResponsive();
   const ContentList: contentCard[] = [
    {
      id: 1,
      text: "Entertainment",
      amount: "12,340$",
    },
    {
      id: 2,
      text: "Supermarket",
      amount: "11,453$",
    },
    {
      id: 3,
      text: "Fast Food",
      amount: "9,322$",
    },
    {
      id: 4,
      text: "Pharmacies",
      amount: "140$",
    },
  
    {
      id: 5,
      text: "Supermarket",
      amount: "11,453$",
    },
    {
      id: 6,
      text: "Fast Food",
      amount: "9,322$",
    },
    {
      id: 7,
      text: "Pharmacies",
      amount: "140$",
    },
    {
      id: 7,
      text: "Pharmacies",
      amount: "140$",
    },
  ];

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <section
      className={`rounded-lg bg-white py-[21px] w-full ${
        screenWidth <= 700 ? "mt-[30px]" : ""
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
      <ul className="px-[30px]  h-[255px] overflow-scroll">
        {ContentList.map((content) => (
          <li className="flex items-center font-bold text-xs text-blue-600 mb-5">
            <span className="w-[40px] h-[40px] me-[15px] flex justify-center items-center"><FaSmile size={28}/></span>
            <p className="me-auto ">{content.text}</p>
            <p className="">{content.amount}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
