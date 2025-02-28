import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterResident from "./RegisterResident";
import api from "../../services/api"; // Make sure api is set up correctly

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false); // State to toggle between login and register
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      // Make a POST request to your backend API to login
      const response = await api.post("login", { email, password });

      if (response.status === 200) {
        // If the login is successful, store the token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        // Redirect the user to the dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      // Handle errors such as invalid credentials or other issues
      setError(err.response?.data?.message || "Failed to login. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {showRegister ? (
          // Show RegisterResident component when showRegister is true
          <RegisterResident setShowRegister={setShowRegister} />
        ) : (
          // Show Login Form when showRegister is false
          <>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            {/* Display error message if there's any */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center mt-4">
              <span className="mr-2">New User?</span>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setShowRegister(true)} // Toggle to show register form
              >
                Create an account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
