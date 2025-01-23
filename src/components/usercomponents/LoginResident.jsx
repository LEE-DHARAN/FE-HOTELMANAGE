// LoginResident.jsx
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginResident = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      history.push("/dashboard"); // redirect to dashboard after login
    } catch (error) {
      console.error("Error logging in:", error.response?.data?.msg || error);
    }
  };

  return (
    <div>
      <h2>Login Resident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginResident;
