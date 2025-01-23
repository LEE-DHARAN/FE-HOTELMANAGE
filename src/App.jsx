import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoomManagementRoutes from "./router/RoomManagementRoutes"; 
import ResidentManagementRoutes from "./router/ResidentManagementRoutes";
import BillingManagementRoutes from "./router/BillingManagementRoutes";
import MaintenanceManageRoutes from "./router/maintenanceroutes";
import UserRoutes from "./router/UserRoutes";



function App() {
  return (
    <Router>
      <RoomManagementRoutes />
      <ResidentManagementRoutes />
      <BillingManagementRoutes />
      <MaintenanceManageRoutes />
      <UserRoutes />
    </Router>
  );
}

export default App;
