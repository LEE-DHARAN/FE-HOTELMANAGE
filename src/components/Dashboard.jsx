/*import React, { useEffect, useState } from "react";
import axios from "axios"; 

function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [error, setError] = useState("");
  const totalRooms = 800;

  // Fetch available rooms
  const fetchAvailableRooms = async () => {
    try {
      const roomsData = await axios.get("/api/rooms/available");
      setRooms(roomsData.data); 
    } catch (err) {
      setError("Failed to load available rooms");
    }
  };

  // Fetch maintenance requests
  const fetchMaintenanceRequests = async () => {
    try {
      const response = await axios.get("/api/maintenance/requests");
      setMaintenanceRequests(response.data); 
    } catch (error) {
      setError("Failed to load maintenance requests");
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
    fetchMaintenanceRequests();
  }, []);

  // Calculate available rooms and occupied rooms
  const availableRoomsCount = rooms.length; 
  const occupiedRooms = totalRooms - availableRoomsCount;
  const pendingMaintenance = maintenanceRequests.length;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Hostel Management System</h2>
      {error && <p className="text-red-500">{error}</p>} 
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

export default Dashboard;*/



import React from "react";

function Dashboard() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Hostel Management System
      </h2>
    </div>
  );
}

export default Dashboard;

