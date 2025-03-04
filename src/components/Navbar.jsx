import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(""); 
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Quiz App</h1>

      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user}!</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/" className="bg-blue-500 px-4 py-2 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
