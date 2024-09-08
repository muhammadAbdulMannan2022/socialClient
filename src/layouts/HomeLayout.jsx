import React from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";
import SearchBar from "../components/NaveBar/SearchBar";

const HomeLayout = () => {
  return (
    <div className="h-full">
      <SearchBar />
      <div>
        <Outlet></Outlet>
      </div>
      <NaveBar />
    </div>
  );
};

export default HomeLayout;
