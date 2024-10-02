import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://guildmateapi.onrender.com/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
