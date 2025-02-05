import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MaintenanceManagement from "../components/maintenancecomponents/MaintenanceManagement";

const MaintenanceManageRoutes = () => {
  return (
    
      <Routes>
        <Route path="" element={<MaintenanceManagement />} />
        {/* <Route path="" element={<MaintenanceList />} /> */}
      </Routes>
    
  );
};

export default MaintenanceManageRoutes;
