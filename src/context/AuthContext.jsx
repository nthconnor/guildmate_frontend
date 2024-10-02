import React, { createContext, useContext, useState} from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const token = Cookies.get('jwt');
  return <AuthContext.Provider value={{ user, setUser, token }}>{ children }</AuthContext.Provider>

}
