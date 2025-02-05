import React, { useState, useEffect } from "react";
import api from "../../services/api";

const MaintenanceRequests = () => {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await api.get("/maintenance");
        setMaintenanceRequests(response.data);
      } catch (err) {
        setError("Failed to fetch maintenance requests");
      }
    };
    fetchRequests();
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
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Maintenance Requests
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      {maintenanceRequests.length === 0 ? (
        <p className="text-gray-500">No maintenance requests available.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {maintenanceRequests.map((request) => (
            <li key={request._id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Description:</span>{" "}
                    {request.description}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-sm font-medium ${
                        request.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {request.status}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleStatusUpdate(request._id, "In Progress")}
                    disabled={request.status === "In Progress"}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 disabled:opacity-50"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(request._id, "Completed")}
                    disabled={request.status === "Completed"}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:opacity-50"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleDelete(request._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MaintenanceRequests;
