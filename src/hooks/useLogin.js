import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch("https://guildmateapi.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;