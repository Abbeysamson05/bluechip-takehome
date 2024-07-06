"use client";

import {  sidebarUserList } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import ModalComponent from "../modal";
import { IoAdd, IoAnalytics, IoBarChart, IoBrowsers, IoNavigate, IoPerson, IoStar } from "react-icons/io5";
import { sidebarIcon } from "@/interfaces";
import { FaFacebookMessenger } from "react-icons/fa";

interface IProps{
  
  leftSidebar: any;
  setLeftSidebar: any;
}

export default function LeftSidebar({leftSidebar, setLeftSidebar}: IProps) {

  const { screenWidth } = useResponsive();
   const sidebarIconList: sidebarIcon[] = [
    {
      id: 1,
      icon: <IoNavigate />,
    },
    {
      id: 2,
      icon: <IoStar />,
    },
    {
      id: 3,
      
      icon: <FaFacebookMessenger />,
    },
    {
      id: 4,
      icon: <IoAnalytics />,
    },
    {
      id: 5,
      icon: <IoBrowsers />,
    },
    {
      id: 6,
      icon: <IoBarChart />,
    },
  ];
  

  return (
    <>
      <section style={{ display: `${screenWidth < 1600 ? "none" : "block"}` }}>
        <div className="h-[calc(100vh - 100px)] py-[30px] pe-[25px] w-[75px] overflow-y-scroll">
          <ul className="mb-[282px]">
            {sidebarIconList.map((sidebar, index) => (
              <li
                key={sidebar.id}
                className="h-[50px] w-[50px] rounded-full bg-white text-[#C3CAD9] mb-5 flex justify-center items-center relative"
              >
                 {index === 2 && (
                    <span className="absolute w-[10px] h-[10px] bg-[#E62E7B] right-0 top-0 rounded-full shadow-[#26334D08]"></span>
                  )}
                {sidebar.icon}
              </li>
            ))}
          </ul>
          <ul className="">
            {sidebarUserList.map((sidebar, index) => (
              <li
                key={sidebar.id}
                className="h-[50px] w-[50px] rounded-full bg-white mb-5 relative flex justify-center items-center"
              >
                <IoPerson color={"#C3CAD9"}/>
                {index === 0 && (
                  <span className="absolute w-[10px] h-[10px] bg-[#3361FF] right-0 top-0 rounded-full shadow-[#26334D08]"></span>
                )}
              </li>
            ))}
             <li className="h-[50px] w-[50px] rounded-full bg-white gap-5 flex justify-center items-center"><div className="bg-[#C3CAD9] rounded-full"><IoAdd color={"#fff"}/></div></li>
          </ul>
        </div>
      </section>
      {leftSidebar && 
      <ModalComponent isEnd={false} onClick={() => {setLeftSidebar(!leftSidebar)
        console.log("Button clicked")
      }}>
        <section>
          <div className="py-[30px] pe-[25px] w-[75px]">
            <ul className="mb-[282px]">
              {sidebarIconList.map((sidebar, index) => (
                <li
                  key={sidebar.id}
                  className="h-[50px] w-[50px] rounded-full bg-white mb-5 text-[#C3CAD9]  flex justify-center items-center relative"
                >
                  {index === 2 && (
                    <span className="absolute w-[10px] h-[10px] bg-[#E62E7B] right-0 top-0 rounded-full shadow-[#26334D08]"></span>
                  )}
                 {sidebar.icon}
                </li>
              ))}
            </ul>
            <ul className="">
              {sidebarUserList.map((sidebar, index) => (
                <li
                  key={sidebar.id}
                  className="h-[50px] w-[50px] rounded-full bg-white mb-5 relative flex justify-center items-center"
                >
                  <IoPerson color={"#C3CAD9"}/>
                   {index === 0 && (
                    <span className="absolute w-[10px] h-[10px] bg-[#3361FF] right-0 top-0 rounded-full shadow-[#26334D08]"></span>
                  )}
                </li>
              ))}
              <li className="h-[50px] w-[50px] rounded-full bg-white gap-5 flex justify-center items-center"><div className="bg-[#C3CAD9] rounded-full"><IoAdd color={"#fff"}/></div></li>
            </ul>
          </div>
        </section>
      </ModalComponent> 
}
    </>
  );
}
