import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../index.css";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-neutral-50 text-black shadow-md">
      <div className="container mx-auto flex items-center p-2 relative">
        <div className="absolute left-0 flex items-center">
          <img src="/guildmate.svg" alt="Logo" className="h-8 w-auto" />
          <div className="text-xl font-bold ml-2">GUILDMATE</div>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-10">
            <NavLink to="/" exact className="hover:text-gray-300">
              Dashboard
            </NavLink>
            <span className="text-gray-400">|</span>
            <NavLink to="/" className="hover:text-gray-300">
              Discover
            </NavLink>
            <span className="text-gray-400">|</span>
            <NavLink to="/" className="hover:text-gray-300">
              Create
            </NavLink>
          </div>
        </div>
        <div className="flex-none">
          <Button variant="ghost">Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
