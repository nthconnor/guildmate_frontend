import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';
import useCreateGuild from '../hooks/useCreateGuild';

const CreateGuild = () => {
  const { createGuild, loading, error } = useCreateGuild();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    tags: '',
    logo: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, description, tags, logo } = inputs;

    if (!name) {
      alert("Enter a name");
      return;
    }

    const tagsArray = tags.split(',').map(tag => tag.trim());

    const guild = await createGuild(name, description, logo, tagsArray,);
    
    if (guild) {
      console.log('Guild created:', guild);
      navigate(`/dashboard`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Create a Guild</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
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
          {loading ? 'Creating...' : 'Create Guild'}
        </Button>
      </form>
    </div>
  );
};

export default CreateGuild;
