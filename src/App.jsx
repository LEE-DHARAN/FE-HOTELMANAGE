import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomManagementRoutes from "./router/RoomManagementRoutes";
import ResidentManagementRoutes from "./router/ResidentManagementRoutes";
import BillingManagementRoutes from "./router/BillingManagementRoutes";
import MaintenanceManageRoutes from "./router/MaintenanceManageRoutes";
import UserRoutes from "./router/UserRoutes";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import RegisterResident from "./components/usercomponents/RegisterResident";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
          
            <Route path="/register" element={<RegisterResident />} />
            <Route path="/rooms/*" element={<RoomManagementRoutes />} />
            <Route path="/residents/*" element={<ResidentManagementRoutes />} />
            <Route path="/billing/*" element={<BillingManagementRoutes />} />
            <Route
              path="/maintenance/*"
              element={<MaintenanceManageRoutes />}
            />
            <Route path="/login/*" element={<UserRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}




export default App;





