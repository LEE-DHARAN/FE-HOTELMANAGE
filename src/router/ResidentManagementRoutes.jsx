import React from "react";
import { Route } from "react-router-dom";
import ResidentList from "../components/residentComponents/ResidentList";
import CreateResidentForm from "../components/residentComponents/CreateResidentForm";
import UpdateResidentForm from "../components/residentComponents/UpdateResidentForm";

const ResidentManagementRoutes = () => {
  return (
    <>
      <Route path="/resident-list" element={<ResidentList />} />
      <Route path="/create-resident" element={<CreateResidentForm />} />
      <Route path="/update-resident/:id" element={<UpdateResidentForm />} />
    </>
  );
};

export default ResidentManagementRoutes;
