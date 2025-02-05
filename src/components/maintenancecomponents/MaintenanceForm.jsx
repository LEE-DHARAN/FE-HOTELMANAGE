import React, { useState } from "react";
import api from "../../services/api";

const MaintenanceForm = () => {
  const [description, setDescription] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await api.post("/maintenance", { description, roomNumber });
      setMessage("Maintenance request created successfully!");
      setDescription("");
      setRoomNumber("");
    } catch (err) {
      setError("Failed to create maintenance request.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Create Maintenance Request
      </h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {message && <p className="text-green-500 mb-3">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Room Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
            placeholder="Enter Room Number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MaintenanceForm;
