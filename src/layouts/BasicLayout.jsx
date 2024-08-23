import React from "react";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default BasicLayout;
