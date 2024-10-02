import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useParams, useNavigate } from "react-router-dom";
import useUpdateGuild from "../hooks/useUpdateGuild";
import useGetGuildById from "../hooks/useGetGuildById";
import useDeleteGuild from "../hooks/useDeleteGuild";

const UpdateGuild = () => {
  const { id } = useParams();
  const {
    guild,
    loading: loadingGuild,
    error: guildError,
  } = useGetGuildById(id);
  const { updateGuild, loading, error } = useUpdateGuild();
  const { deleteGuild } = useDeleteGuild();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    tags: "",
    logo: "",
  });

  useEffect(() => {
    if (guild) {
      setInputs({
        name: guild.name,
        description: guild.description,
        logo: guild.logo,
        tags: guild.tags.join(", "),
      });
    }
  }, [guild]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this guild?")) {
      await deleteGuild(id);
      if (!error) {
        navigate("/dashboard");
      } else {
        alert("Failed to delete guild");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, tags, logo } = inputs;

    if (!name) {
      alert("Enter a name");
      return;
    }

    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    try {
      const updatedGuild = await updateGuild(id, {
        name,
        description,
        logo,
        tags: tagsArray,
      });
      console.log("Guild updated:", updatedGuild);
      navigate(`/guilds/${id}`);
    } catch (err) {
      alert("Failed to update guild: " + err.message);
    }
  };

  if (loadingGuild) return <p>Loading guild...</p>;
  if (guildError) return <p className="text-red-500">{guildError}</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Guild
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-gray-500 mb-4">Updating...</p>}{" "}
        {/* load component eventually */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Guild Name"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Description (optional)"
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Logo URL"
            value={inputs.logo}
            onChange={(e) => setInputs({ ...inputs, logo: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Tags (comma separated)"
            value={inputs.tags}
            onChange={(e) => setInputs({ ...inputs, tags: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Updating..." : "Update Guild"}
        </Button>
        <Button
          type="button"
          className="w-full mt-4 bg-red-500"
          onClick={handleDelete}
        >
          Delete Guild
        </Button>
      </form>
    </div>
  );
};

export default UpdateGuild;
