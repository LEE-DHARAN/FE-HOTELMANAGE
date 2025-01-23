// LogoutResident.jsx
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LogoutResident = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout");
      localStorage.removeItem("token");
      history.push("/login"); // redirect to login after logout
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
