import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useCreateGuild = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createGuild = async (name, description = "", logo = "", tags = []) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://guildmateapi.onrender.com/api/guilds/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({ name, description, logo, tags }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to create guild");
      }

      const data = await response.json();
      return data.guild;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createGuild, loading, error };
};

export default useCreateGuild;
