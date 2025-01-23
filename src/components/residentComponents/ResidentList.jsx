
import React from "react";
import api from "../../services/api"; 

const ResidentList = ({
  residents,
  setResidents,
  setError,
  setSuccessMessage,
}) => {
  const handleDeleteResident = async (id) => {
    setError(null);
    setSuccessMessage(""); 

    try {
      await api.delete(`/resident/${id}`);
      setResidents(residents.filter((resident) => resident._id !== id)); 
      setSuccessMessage("Resident deleted successfully");
    } catch (error) {
      setError(error.response?.data?.msg || "Error deleting resident");
    }
  };

  return (
    <ul>
      {residents.map((resident) => (
        <li key={resident._id}>
          <strong>{resident.name}</strong> - {resident.contact} -{" "}
          {resident.email}
          <button onClick={() => handleDeleteResident(resident._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ResidentList;
