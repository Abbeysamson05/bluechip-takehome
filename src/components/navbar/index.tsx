"use client";

import { NavbarList } from "@/constants";
import Button from "../button";
import BasicMenu from "../menu";
import { Input } from "@mui/material";
import useResponsive from "@/hooks/useResponsive";
import { useState } from "react";
import { IoMenu, IoNotificationsOutline, IoPerson, IoPersonOutline, IoSearch } from "react-icons/io5";

interface IProps{
  rightSidebar: any;
  setRightSidebar: any;
  leftSidebar: any;
  setLeftSidebar: any;
}
export default function Navbar({rightSidebar, setRightSidebar, leftSidebar, setLeftSidebar} : IProps) {
  const { screenWidth } = useResponsive();

  

  return (
    <nav className="h-[100px] border-b-2 border-[#EDEFF2] flex items-center px-[25px] w-full">
      <div className="w-[50px] h-[50px] bg-white rounded-full me-[35px] flex justify-center items-center" onClick={() =>setLeftSidebar(!leftSidebar)}>
        <IoMenu size={18}/>
      </div>
      <h6 className="font-bold text-lg text-blue-500 me-auto">Constructor</h6>
      {screenWidth >= 1100 && (
        <ul className="flex gap-[21px] items-center me-[30px]">
          {NavbarList.map((nav) => (
            <li className="font-bold text-[13px] text-blue-700" key={nav.id}>
              {nav.text}
            </li>
          ))}
        </ul>
      )}
      {screenWidth >= 1100 && (
        <div className="me-auto">
          <Button />
        </div>
      )}
      {screenWidth >= 1600 && (
        <Input
          type="text"
          // prefix={<CiSearch />}
          placeholder="Search Transactions and Documents"
          style={{
            height: "60px",
            borderRadius: "30px",
            width: "298px",
            paddingLeft: "26px",
            outline: "none",

            background: "#fff",
            color: "#ADB8CC",
            fontSize: "12px",
            borderBottom: "0px !important",
            marginRight: "180px",
          }}
        />
      )}
      {screenWidth >= 700 && (
        <ul className="flex items-center">
          <li className="w-[20px] h-[20px] me-5 bg-[#C3CAD9] rounded-full flex justify-center items-center">
          <IoPerson size={18} fill={"#fff"}/>
          </li>
          <li className="font-bold text-[13px] text-blue-600 me-[30px]">
            Clayton Santos
          </li>
          <li className="w-[50px] h-[50px] me-5 bg-[#fff] rounded-full relative flex justify-center items-center">
            <IoNotificationsOutline size={18} color={"#C3CAD9"}/>
            <span className="absolute w-[10px] h-[10px] bg-[#E62E7B] right-0 top-0 rounded-full shadow-[#26334D08]"></span>
          </li>
          
          <li className="w-[50px] h-[50px] me-5 bg-[#fff] rounded-full flex justify-center items-center">
            <IoSearch size={18} color={"#C3CAD9"}/>
          </li>
        </ul>
      )}
      {screenWidth < 1600 && 
      <div className="w-[50px] h-[50px] me-[10px] bg-[#fff] rounded-full flex items-center justify-center" onClick={() => setRightSidebar(!rightSidebar)}>
      <IoPersonOutline size={18} color={"#C3CAD9"}/>
      </div>
}
    </nav>
  );
}
