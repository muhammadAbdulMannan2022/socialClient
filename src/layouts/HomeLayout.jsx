import React from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";
import SearchBar from "../components/NaveBar/SearchBar";

const HomeLayout = () => {
  return (
    <div className="h-screen md:flex md:flex-row flex flex-col">
      {/* SearchBar on top for small screens */}
      <SearchBar />

      {/* Main content that scrolls */}
      <div className="md:h-full md:order-2 md:w-[90%] lg:w-[75%] bg-black flex-grow overflow-auto">
        <Outlet />
      </div>

      {/* NaveBar on the left (medium screens and up) and bottom (small screens) */}
      <NaveBar />
    </div>
  );
};

export default HomeLayout;
