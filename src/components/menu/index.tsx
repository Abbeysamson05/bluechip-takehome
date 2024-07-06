"use client";
import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="flex items-center w-[289px] py-[15px] pe-[40px] ps-[20px] rounded-[30px] bg-white"
        onClick={handleClick}
      >
        <div className="w-[30px] h-[30px]"></div>
        <p className="font-bold text-xs text-[#ADB8CC]">
          Search Transactions and Documents
        </p>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ width: "289px" }}
      >
        <MenuItem onClick={handleClose}></MenuItem>
      </Menu>
    </div>
  );
}
