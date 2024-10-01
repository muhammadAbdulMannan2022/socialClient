import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";
import SearchBar from "../components/NaveBar/SearchBar";
export const ScrollContext = createContext();
const HomeLayout = () => {
  const [scrollData, setScrollData] = useState({});
  return (
    <div className="h-screen md:flex md:flex-row flex flex-col">
      {/* SearchBar on top for small screens */}
      <SearchBar />

      {/* Main content that scrolls */}
      <div
        onScroll={(e) => {
          setScrollData({
            topMax: e?.target?.scrollTopMax,
            top: e?.target?.scrollTop,
          });
        }}
        className="border border-red-400 md:h-full md:order-2 md:w-[90%] lg:w-[75%] bg-black flex-grow overflow-auto"
      >
        <ScrollContext.Provider value={scrollData}>
          <Outlet />
        </ScrollContext.Provider>
      </div>

      {/* NaveBar on the left (medium screens and up) and bottom (small screens) */}
      <NaveBar />
    </div>
  );
};

export default HomeLayout;
