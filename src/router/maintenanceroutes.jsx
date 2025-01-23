import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MaintenanceForm from "../components/maintenancecomponents/MaintenanceForm";
import MaintenanceList from "../components/maintenancecomponents/MaintenanceList";

const MaintenanceManageRoutes = () => {
  return (
    
        <Routes>
          <Route path="/maintenance/create" element={<MaintenanceForm />} />
          <Route path="/maintenance" element={<MaintenanceList />} />
        </Routes>
    
  );
};

export default MaintenanceManageRoutes;
