import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "../context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import "../index.css";

function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-neutral-50 text-black shadow-md">
      <div className="container mx-auto flex items-center p-2 relative">
        <div className="absolute left-0 flex items-center">
          <Link to="/">
            <img src="/guildmate.svg" alt="Logo" className="h-5 w-auto" />
          </Link>
          <div className="text-xl font-bold ml-2">
            <Link to="/">GUILDMATE</Link>
          </div>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-10">
            <NavLink to="/" className="hover:text-gray-300">
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
        <div className="flex-none absolute right-0">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => console.log("Profile")}>
                <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="ghost">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
