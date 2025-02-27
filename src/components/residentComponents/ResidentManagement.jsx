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

     
      <div className="flex gap-4 mb-4">
        <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded" >
          Create Resident
        </button>
      </div>
     
      {showForm ? (
        <ResidentForm
          closeForm={closeForm}
          setResidents={setResidents} 
          setSuccessMessage={setSuccessMessage}
        />
      ) : (
        <ResidentList residents={residents} />
      )}
    </div>
  );
};

export default ResidentManagement;
