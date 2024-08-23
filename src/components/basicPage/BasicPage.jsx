import React, { useState } from "react";
import Top from "../basic/Top";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Bottom from "../basic/Bottom";

const BasicPage = () => {
  const [toggle, setToggle] = useState(true);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <main className="flex-grow flex items-center justify-center">
        {toggle ? (
          <LogIn changeToggle={changeToggle} />
        ) : (
          <SignUp changeToggle={changeToggle} />
        )}
      </main>
      <Bottom />
    </div>
  );
};

export default BasicPage;
