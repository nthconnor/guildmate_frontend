import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const signup = async ({
    displayName,
    username,
    password,
    confirmPassword,
    avatar,
  }) => {

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName,
          username,
          password,
          confirmPassword,
          avatar,
        }),
        credentials: 'include',
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
  return { loading, signup };
};

export default useSignup;
