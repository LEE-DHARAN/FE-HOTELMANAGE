import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const LogoutResident = () => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/api/logout"); 
      localStorage.removeItem("token"); 
      localStorage.removeItem("role");
      navigate("/login"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h2>Logout Resident</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutResident;
