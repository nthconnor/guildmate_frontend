import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const useUpdateGuild = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateGuild = async (id, updatedData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://guildmateapi.onrender.com/api/guilds/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to update guild");
      }

      const data = await response.json();
      return data.guild;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateGuild, loading, error };
};

export default useUpdateGuild;
