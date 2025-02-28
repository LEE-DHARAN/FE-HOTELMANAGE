import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Retrieve user role

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // Remove role on logout
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Hostel Management</h1>
        <div className="space-x-6 hidden md:flex">
        {isLoggedIn && (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Dashboard
              </Link>
            </>
          )}
          {isLoggedIn && userRole === "admin" && (
            <>
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
            </>
          )}

          {isLoggedIn && userRole === "admin" && (
            <>
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
            </>
          )}

          {isLoggedIn && userRole === "user" && (
            <>
              <Link
                to="/maintenance"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Maintenance
              </Link>
              <Link
                to="/billing/user"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Billing
              </Link>
            </>
          )}

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
      </div>
    </nav>
  );
}

export default Navbar;
