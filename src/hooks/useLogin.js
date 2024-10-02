import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const login = async (username, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
