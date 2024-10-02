import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignupForm = () => {
  const [inputs, setInputs] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { loading, signup } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const { displayName, username, password, confirmPassword } = inputs;
  
    if (!displayName || !username || !password || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    setError("");
    await signup(inputs);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSignup}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Display name"
            value={inputs.displayName}
            onChange={(e) =>
              setInputs({ ...inputs, displayName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Confirm Password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Avatar URL"
            value={inputs.avatar}
            onChange={(e) => setInputs({ ...inputs, avatar: e.target.value })}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <p className="mt-2 text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-gray-300">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
