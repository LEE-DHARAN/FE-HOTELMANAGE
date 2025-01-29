import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResidentList from "../components/residentComponents/ResidentList";
import CreateResidentForm from "../components/residentComponents/CreateResidentForm";
import UpdateResidentForm from "../components/residentComponents/UpdateResidentForm";

const ResidentManagementRoutes = () => {
  return (
    
      <Routes>
        <Route path="resident-list" element={<ResidentList />} />
        <Route path="create-resident" element={<CreateResidentForm />} />
        <Route path="update-resident/:id" element={<UpdateResidentForm />} />
      </Routes>
    
  );
};

export default ResidentManagementRoutes;
