import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MaintenanceForm from "../components/maintenancecomponents/MaintenanceForm";
import MaintenanceList from "../components/maintenancecomponents/MaintenanceList";

const MaintenanceManageRoutes = () => {
  return (
    
      <Routes>
        <Route path="create" element={<MaintenanceForm />} />
        <Route path="" element={<MaintenanceList />} />
      </Routes>
    
  );
};

export default MaintenanceManageRoutes;
