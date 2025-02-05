import React, { useState } from "react";
import MaintenanceForm from "../../components/maintenancecomponents/MaintenanceForm";
import MaintenanceList from "../../components/maintenancecomponents/MaintenanceList";

const MaintenanceManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [viewRequests, setViewRequests] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const closeForm = () => setShowForm(false);
  const closeRequests = () => setViewRequests(false);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Maintenance Management</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setViewRequests(false);
            setShowForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Maintenance Request
        </button>
        <button
          onClick={() => {
            setViewRequests(true);
            setShowForm(false);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          View Maintenance Requests
        </button>
      </div>

      {successMessage && <p className="text-green-600">{successMessage}</p>}

      {showForm ? (
        <MaintenanceForm closeForm={closeForm} setSuccessMessage={setSuccessMessage} />
      ) : viewRequests ? (
        <MaintenanceList closeRequests={closeRequests} />
      ) : null}
    </div>
  );
};

export default MaintenanceManagement;
