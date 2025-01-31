import React, { useState } from "react";
import ResidentForm from "./ResidentForm";
import ResidentList from "./ResidentList";

const ResidentManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [residents, setResidents] = useState([]);

  const closeForm = () => setShowForm(false);
  
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Resident Management</h2>

      {/* Buttons to trigger actions */}
      <div className="flex gap-4 mb-4">
        <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded" >
          Create Resident
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Update Resident
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete Resident
        </button>
      </div>
      {/* Toggle between list of residents or resident form */}
      {showForm ? (
        <ResidentForm
          closeForm={closeForm}
          setResidents={setResidents} // Pass setResidents
          setSuccessMessage={setSuccessMessage}
        />
      ) : (
        <ResidentList residents={residents} />
      )}
    </div>
  );
};

export default ResidentManagement;
