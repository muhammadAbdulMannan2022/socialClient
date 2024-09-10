import React from "react";
import { useNavigate } from "react-router-dom";

const isLoggedin = false;

const VerifyAuth = ({ children }) => {
  const navigate = useNavigate();
  return isLoggedin ? children : navigate("/login");
};

export default VerifyAuth;
