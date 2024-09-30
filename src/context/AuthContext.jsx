import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post("auth/login", { username, password });
    setUser(response.data);
  };

  const signup = async (username, password) => {
    const response = await axios.post("auth/signup", { username, password });
    setUser(response.data);
  };

  const logout = async () => {
    try {
      await axios.post("auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
        {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
    return useContext(AuthContext);
}
