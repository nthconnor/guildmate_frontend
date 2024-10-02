import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  return <AuthContext.Provider value={{ user, setUser }}>{ children }</AuthContext.Provider>

}
