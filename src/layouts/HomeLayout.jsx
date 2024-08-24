import React from "react";
import { Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar/NaveBar";

const HomeLayout = () => {
  return (
    <div>
      <NaveBar />
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
