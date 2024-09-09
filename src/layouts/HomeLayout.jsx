import React from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";
import SearchBar from "../components/NaveBar/SearchBar";

const HomeLayout = () => {
  return (
    <div className="h-full md:flex md:flex-row">
      <SearchBar />
      <div className="md:h-full md:order-2 md:w-[90%] lg:w-[75%]">
        <Outlet></Outlet>
      </div>
      <NaveBar />
    </div>
  );
};

export default HomeLayout;
