import React from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";
import SearchBar from "../components/NaveBar/SearchBar";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <SearchBar />
        <NaveBar />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
