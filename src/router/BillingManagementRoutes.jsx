import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BillingList from "../components/billingComponents/BillingList";
import CreateBilling from "../components/billingComponents/CreateBilling";
import BillingDetails from "../components/billingComponents/BillingDetails";
import UpdateBillingStatus from "../components/billingComponents/UpdateBillingStatus";
import UserBillingList from "../components/billingComponents/UserBillingList";

const BillingManagementRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<BillingList />} />
        <Route path="/create" element={<CreateBilling />} />
        <Route path=":id" element={<BillingDetails />} />
        <Route path="/user" element={<UserBillingList />} />
        <Route path="update/:id" element={<UpdateBillingStatus />} />
      </Routes>
    
  );
};

export default BillingManagementRoutes;
