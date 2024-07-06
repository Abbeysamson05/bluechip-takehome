"use client";

import useResponsive from "@/hooks/useResponsive";
import Accounts from "@/parts/accounts";
import Ads from "@/parts/ads";
import Profile from "@/parts/profile";
import Settings from "@/parts/settings";
import ModalComponent from "../modal";

interface IProps{ 
  rightSidebar: boolean;
  setRightSidebar: any;
}

export default function RightSidebar({rightSidebar, setRightSidebar}: IProps) {
  const { screenWidth } = useResponsive();
  return (
    <>
      <div
        className="w-[300px] ps-8 py-[30px] pe-[5px] h-[calc(100vh-100px)] overflow-y-scroll"
        style={{ display: `${screenWidth < 1600 ? "none" : "block"}` }}
      >
        <Profile />
        <Accounts />
        <Settings />
        <Ads />
      </div>
      {rightSidebar &&
      <ModalComponent isEnd={true} onClick={() => setRightSidebar(!rightSidebar)}>
        <div className="w-[300px] ps-8 py-[30px] pe-[5px]">
          <Profile />
          <Accounts />
          <Settings />
          <Ads />
        </div>
      </ModalComponent>
} 
    </>
  );
}
