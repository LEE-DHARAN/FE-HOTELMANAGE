import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Hostel Management</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/rooms" className="hover:underline">
            Rooms
          </Link>
          <Link to="/residents" className="hover:underline">
            Residents
          </Link>
          <Link to="/maintenance" className="hover:underline">
            Maintenance
          </Link>
          <Link to="/billing" className="hover:underline">
            Billing
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
