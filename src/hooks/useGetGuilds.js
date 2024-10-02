import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const useGetGuilds = () => {
  const { user, token } = useAuth();
  const [guilds, setGuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuilds = async () => {
      if (user) {
        setLoading(true);
        setError(null);

        try {
          const res = await fetch(
            `http://localhost:3000/api/guilds/users/${user._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
              credentials: "include",
            }
          );

          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText || "Failed to fetch guilds");
          }

          const data = await res.json();
          setGuilds(data);
        } catch (error) {
          setError("");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchGuilds();
  }, [user, token]);

  return { guilds, loading, error };
};

export default useGetGuilds;
