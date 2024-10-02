import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const useGetGuildById = (guildId) => {
  const { token } = useAuth();
  const [guild, setGuild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuild = async () => {
      if (guildId) {
        setLoading(true);
        setError(null);

        try {
          const res = await fetch(
            `https://guildmateapi.onrender.com/api/guilds/${guildId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
              credentials: "include",
            }
          );

          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText || "Failed to fetch guild");
          }

          const data = await res.json();
          setGuild(data);
        } catch (error) {
          setError(error.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGuild();
  }, [guildId, token]);

  return { guild, loading, error };
};

export default useGetGuildById;
