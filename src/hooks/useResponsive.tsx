"use client";
import { useState, useEffect } from "react";

const useResponsive = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line
  }, []);

  return {
    xs: screenWidth <= 600,
    sm: 600 < screenWidth,
    md: 768 < screenWidth,
    lg: 1024 < screenWidth,
    xl: 1280 < screenWidth,
    "2xl": screenWidth > 1536,
    screenWidth,
  };
};

export default useResponsive;
