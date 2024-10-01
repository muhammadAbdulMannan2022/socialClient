import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

export default function OnlyUsers({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log(loading, user);

  if (!loading) {
    // its orginal !loading
    return user ? (
      <>{children}</>
    ) : (
      <>
        <Navigate to="/login"></Navigate>
      </>
    );
  } else {
    return (
      <div className="w-screen h-screen bg-black">
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }
}
