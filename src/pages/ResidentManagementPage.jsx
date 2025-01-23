import React, { useState, useEffect } from "react";
import axios from "../services/api";
import CreateResidentForm from "../components/residentComponents/CreateResidentForm";
import UpdateResidentForm from "../components/residentComponents/UpdateResidentForm";
import ResidentList from "../components/residentComponents/ResidentList";

const ResidentManagementPage = () => {
  const [residents, setResidents] = useState([]);
  const [residentIdToUpdate, setResidentIdToUpdate] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await axios.get("/resident");
        setResidents(response.data);
      } catch (error) {
        setError("Error fetching residents");
      }
    };
    fetchResidents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resident Management</h1>

      {/* Display error or success messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {/* Create Resident Form */}
      <h2>Create New Resident</h2>
      <CreateResidentForm
        setResidents={setResidents}
        setError={setError}
        setSuccessMessage={setSuccessMessage}
      />

      {/* Update Resident Form - only shows if a resident is selected for updating */}
      {residentIdToUpdate && (
        <div>
          <h2>Update Resident</h2>
          <UpdateResidentForm
            residentIdToUpdate={residentIdToUpdate}
            setResidents={setResidents}
            setError={setError}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      )}

      {/* Resident List */}
      <h2>All Residents</h2>
      <ResidentList
        residents={residents}
        setResidents={setResidents}
        setError={setError}
        setSuccessMessage={setSuccessMessage}
        setResidentIdToUpdate={setResidentIdToUpdate}
      />
    </div>
  );
};

export default ResidentManagementPage;
