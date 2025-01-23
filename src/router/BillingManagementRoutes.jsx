import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BillingList from "./components/BillingList";
import CreateBilling from "./components/CreateBilling";
import BillingDetails from "./components/BillingDetails";
import UpdateBillingStatus from "./components/UpdateBillingStatus";

const BillingManagementRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/billing" element={<BillingList />} />
        <Route path="/billing/create" element={<CreateBilling />} />
        <Route path="/billing/:id" element={<BillingDetails />} />
        <Route path="/billing/update/:id" element={<UpdateBillingStatus />} />
      </Routes>
    </Router>
  );
};

export default BillingManagementRoutes;
