
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginResident from "../components/usercomponents/LoginResident";
import LogoutResident from "../components/usercomponents/LogoutResident";


const UserRoutes = ()=> {
  return (
    
      <Routes>
        <Route path="/" element={<LoginResident />} />
        <Route path="logout" element={<LogoutResident />} />
      </Routes>
    
  );
};

export default UserRoutes;
