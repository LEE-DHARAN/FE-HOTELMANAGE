import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import Rooms from "../pages/Rooms";
import Residents from "../pages/Residents";
import Maintenance from "../pages/Maintenance";
import Billing from "../pages/Billing";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <>
      <Navbar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/residents" element={<Residents />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Router;
