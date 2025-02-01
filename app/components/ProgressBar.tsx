"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="progress"
      style={{ width: `${width}%` }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-800 to-blue-500 z-50 transition-width duration-100 ease-out"
    />
  );
}
