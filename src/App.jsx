import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomManagementRoutes from "./router/RoomManagementRoutes";
import ResidentManagementRoutes from "./router/ResidentManagementRoutes";
import BillingManagementRoutes from "./router/BillingManagementRoutes";
import MaintenanceManageRoutes from "./router/maintenanceroutes";
import UserRoutes from "./router/UserRoutes";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <Routes>
          
          <Route path="/rooms/*" element={<RoomManagementRoutes />} />
          <Route path="/residents/*" element={<ResidentManagementRoutes />} />
          <Route path="/billing/*" element={<BillingManagementRoutes />} />
          <Route path="/maintenance/*" element={<MaintenanceManageRoutes />} />
          <Route path="/user/*" element={<UserRoutes />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
