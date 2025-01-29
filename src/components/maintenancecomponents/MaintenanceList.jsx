import React, { useState, useEffect } from "react";
import api from "../../services/api"; 

const MaintenanceList = () => {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaintenanceRequests = async () => {
      try {
        const response = await api.get("/maintenance");
        setMaintenanceRequests(response.data);
      } catch (err) {
        setError("Failed to fetch maintenance requests");
      }
    };
    fetchMaintenanceRequests();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await api.put(`/maintenance/${id}/status`, { status });
      setMaintenanceRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status } : req))
      );
    } catch (err) {
      setError("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/maintenance/${id}`);
      setMaintenanceRequests((prev) => prev.filter((req) => req._id !== id));
    } catch (err) {
      setError("Failed to delete maintenance request");
    }
  };

  return (
    <div>
      <h2>Maintenance Requests</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {maintenanceRequests.map((request) => (
          <li key={request._id}>
            <p>
              {request.description} - Status: {request.status}
            </p>
            <div>
              <button
                onClick={() => handleStatusUpdate(request._id, "In Progress")}
                disabled={request.status === "In Progress"}
              >
                Mark In Progress
              </button>
              <button
                onClick={() => handleStatusUpdate(request._id, "Completed")}
                disabled={request.status === "Completed"}
              >
                Mark Completed
              </button>
              <button onClick={() => handleDelete(request._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceList;
