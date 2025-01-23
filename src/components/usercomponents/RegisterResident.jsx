// RegisterResident.jsx
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterResident = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      localStorage.setItem("token", response.data.token);
      history.push("/dashboard"); // redirect to dashboard after registration
    } catch (error) {
      console.error(
        "Error registering:",
        error.response?.data?.message || error
      );
    }
  };

  return (
    <div>
      <h2>Register Resident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
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
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
        />
        <input
          type="text"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          placeholder="Emergency Contact"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterResident;
