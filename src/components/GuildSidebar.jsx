import React from 'react';
import { Link } from 'react-router-dom';
import useGetGuilds from '../hooks/useGetGuilds';

const GuildSidebar = () => {
  const { guilds, loading, error } = useGetGuilds();

  if (loading) return <p>loading</p>; // use load component maybe
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="fixed left-0 top-9 w-20 h-screen bg-gray-100 shadow-lg p-2 overflow-y-auto">
      {guilds.length > 0 ? (
        <ul className="space-y-2">
          {guilds.map(guild => (
            <li key={guild._id} className="relative">
              <Link
                to={`/guilds/${guild._id}`}
                className="flex items-center justify-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden ${
                    guild.logo ? '' : 'bg-gray-300'
                  }`}
                  style={{
                    backgroundImage: guild.logo ? `url(${guild.logo})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!guild.logo && (
                    <span className="text-lg font-bold text-gray-600">{guild.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1">
                  {guild.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Link to="/create"><p className="text-xs text-center font-bold">+</p></Link> // replace with icon
      )}
    </div>
  );
};

export default GuildSidebar;
