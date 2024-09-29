import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: change the status and role
import app from "../firebase/firebase.config";
const urlOfBackend = "http://localhost:5000";
const auth = getAuth(app);
// context to get user
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userFdb, setUserFdb] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const [isOpen1, setIsOpen1] = useState(false);
  //   all functions
  const emailPasswordSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUserEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    signOut(auth).then(() => {
      console.log("sign out success");
    });
  };
  // const getCurrentUser = () => {
  //   setLoading(true);

  // };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      console.log(loading);
      unsubscribe();
    };
  }, []);
  const AuthData = {
    user,
    userFdb,
    loading,
    urlOfBackend,
    setLoading,
    logOutUser,
    emailPasswordSignup,
    logInUserEmailPassword,
  };
  console.log(userFdb);
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
