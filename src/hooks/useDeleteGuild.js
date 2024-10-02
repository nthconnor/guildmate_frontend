import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const useDeleteGuild = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteGuild = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://guildmateapi.onrender.com/api/guilds/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to delete guild");
      }

      return true;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteGuild, loading, error };
};

export default useDeleteGuild;
