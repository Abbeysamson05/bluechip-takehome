"use client";

import CashbackAnalytics from "@/components/cards/cashback";
import CategoriesStatistics from "@/components/cards/categories";
import Income from "@/components/cards/income";
import Place from "@/components/cards/place";
import Operations from "../recent-operation";
import useResponsive from "@/hooks/useResponsive";

export default function Contents() {
  const { screenWidth } = useResponsive();
  return (
    <section className={`${screenWidth >= 1600 ? "border-x-2" : ""} border-[#EDEFF2] md:p-[30px] p-[15px]`}>
      <div
        className={`gap-[30px] ${
          screenWidth <= 700 ? "block" : "flex"
        }`}
      >
        {screenWidth >= 1000 && <CashbackAnalytics />}
        <CategoriesStatistics />
        <Income />
      </div>
      {screenWidth < 1000 && <CashbackAnalytics />}
      <div
        className={` gap-[30px] mt-[30px] h-[600px] ${screenWidth >= 800 ? "flex" : ""}`}
      >
        <div className="w-full bg-white">
          <Operations />
        </div>
        <div
          className={`rounded-lg bg-white py-[21px] ${
            screenWidth >= 800 ? "w-[900px]" : "w-full"
          }`}
        >
          <Place />
        </div>
      </div>
    </section>
  );
}
