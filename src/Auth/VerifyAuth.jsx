import React from "react";
import BasicPage from "../components/basicPage/BasicPage";

const isLoggedin = false;

const VerifyAuth = ({ children }) => {
  return isLoggedin ? children : <BasicPage />;
};

export default VerifyAuth;
