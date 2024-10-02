import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("activeUser")) || null);
  return <AuthProvider value={{ authUser, setAuthUser }}>{ children }</AuthProvider>

}
