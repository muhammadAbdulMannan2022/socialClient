import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

export default function OnlyUsers({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log(loading, user);

  if (!loading) {
    return user ? (
      <>{children}</>
    ) : (
      <>
        <Navigate to="/login"></Navigate>
      </>
    );
  } else {
    return <p>loading....</p>;
  }
}
