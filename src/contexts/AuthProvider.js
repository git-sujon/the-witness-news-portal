import React from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)

  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInThirdparty = (provider) => {

    return signInWithPopup(auth, provider);
  };

  const emailVarification = () => {

    return sendEmailVerification(auth.currentUser)
 
      
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInformationProviding = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
   
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signInThirdparty,
    loading,
    LogOut,
    signIn,
    createUser,
    emailVarification,
    userInformationProviding,
    loading,
    userInformationProviding,
    setLoading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
