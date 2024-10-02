import React from "react";
import { useParams } from "react-router-dom";
import useGetGuildById from '../hooks/useGetGuildById';

const GuildShow = () => {
  const { id } = useParams();
  const { guild, loading, error } = useGetGuildById(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex">
      <div className="fixed right-0 top-9 w-36 h-screen bg-gray-100 shadow-lg p-2 overflow-y-auto">
        <h3 className="text-xs font-semibold mb-2">Online</h3>
        <ul className="space-y-2">
          {guild.members.map((member) => (
            <li key={member._id} className="flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full flex overflow-hidden"
                style={{
                  backgroundImage: `url(${member.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <span className="mx-3 font-semibold text-sm">
                {member.displayName}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed left-20 top-9 w-36 h-screen bg-gray-100 shadow-lg p-2 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{guild.name}</h2>
        <span className="font-semibold text-sm">Members - {guild.members.length}</span>
        <p>{guild.description}</p>
      </div>
    </div>
  );
};

export default GuildShow;
