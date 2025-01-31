
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Hostel Management</h1>
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/rooms/available"
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
          <Link
            to="/login"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">
           
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
