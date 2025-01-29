
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterResident from "../components/usercomponents/RegisterResident";
import LoginResident from "../components/usercomponents/LoginResident";
import LogoutResident from "../components/usercomponents/LogoutResident";
import Dashboard from "../pages/Dashboard"; 

const UserRoutes = ()=> {
  return (
    
      <Routes>
        <Route path="register" element={<RegisterResident />} />
        <Route path="login" element={<LoginResident />} />
        <Route path="logout" element={<LogoutResident />} />
        <Route path="dashboard" element={<Dashboard />} />
    
      </Routes>
    
  );
};

export default UserRoutes;
