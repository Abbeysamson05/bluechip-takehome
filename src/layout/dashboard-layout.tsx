
"use client"

import Navbar from "@/components/navbar";
import LeftSidebar from "@/components/sidebar/left-sidebar";
import RightSidebar from "@/components/sidebar/right-sidebar";
import { FC, ReactNode, useState } from "react";

interface IDashboard {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboard> = ({ children }) => {

  const [rightSidebar, setRightSidebar] = useState(false);
  const [leftSidebar, setLeftSidebar] = useState(false);
  console.log(rightSidebar)
  return (
    <>
      <main>
        <Navbar rightSidebar={rightSidebar} setRightSidebar={setRightSidebar} leftSidebar={leftSidebar} setLeftSidebar={setLeftSidebar}/>
        <div className="flex">
          <LeftSidebar leftSidebar={leftSidebar} setLeftSidebar={setLeftSidebar}/>
          <div className="w-full">{children}</div>
          <RightSidebar rightSidebar={rightSidebar} setRightSidebar={setRightSidebar}/>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
