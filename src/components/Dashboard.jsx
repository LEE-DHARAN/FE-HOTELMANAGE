import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios

function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [error, setError] = useState("");
  const totalRooms = 800;

  // Fetch available rooms
  const fetchAvailableRooms = async () => {
    try {
      const roomsData = await axios.get("/api/rooms/available");
      setRooms(roomsData.data); // Store the data (array of rooms)
    } catch (err) {
      setError("Failed to load available rooms");
    }
  };

  // Fetch maintenance requests
  const fetchMaintenanceRequests = async () => {
    try {
      const response = await axios.get("/api/maintenance/requests");
      setMaintenanceRequests(response.data); // Store the maintenance requests
    } catch (error) {
      setError("Failed to load maintenance requests");
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
    fetchMaintenanceRequests();
  }, []);

  // Calculate available rooms and occupied rooms
  const availableRoomsCount = rooms.length; // Get the length of available rooms
  const occupiedRooms = totalRooms - availableRoomsCount;
  const pendingMaintenance = maintenanceRequests.length; // Get the length of maintenance requests

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Hostel Management System</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-200 p-4 rounded shadow">
          <p>Total Rooms: {totalRooms}</p>
          <p>Available Rooms: {availableRoomsCount}</p>
        </div>
        <div className="bg-yellow-200 p-4 rounded shadow">
          <p>Occupied Rooms: {occupiedRooms}</p>
        </div>
        <div className="bg-red-200 p-4 rounded shadow">
          <p>Pending Maintenance: {pendingMaintenance}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
