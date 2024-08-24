import React from "react";
import BasicPage from "../components/basicPage/BasicPage";

const isLoggedin = true;

const VerifyAuth = ({ children }) => {
  return isLoggedin ? children : <BasicPage />;
};

export default VerifyAuth;
