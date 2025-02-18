import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // Check if the user is logged in (based on token in localStorage)
  const isLoggedIn = localStorage.getItem("token");

  // Handle logout by clearing the token and redirecting to login page
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Hostel Management</h1>
        <div className="space-x-6 hidden md:flex">
          {/* Conditionally render Dashboard if logged in */}
          {isLoggedIn && (
            <Link
              to="/dashboard"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/rooms"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Rooms
          </Link>
          <Link
            to="/residents"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Residents
          </Link>
          <Link
            to="/maintenance"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Maintenance
          </Link>
          <Link
            to="/billing"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Billing
          </Link>
          {/* Conditionally render Login or Logout based on login state */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-white"></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
