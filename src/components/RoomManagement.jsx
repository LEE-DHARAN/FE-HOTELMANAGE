import React, { useState, useEffect } from "react";
import api from "../services/api";

const RoomManagement = () => {
  
  const [rooms, setRooms] = useState([]);
  const [roomNumber, setRoomNumber] = useState("");
  const [residentId, setResidentId] = useState("");
  const [status, setStatus] = useState("available");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await api.get("/rooms/available");
        setRooms(response.data);
      } catch (err) {
        setError("No available rooms found");
      }
    };
    fetchAvailableRooms();
  }, []);

  // Handle room allocation
  const handleAllocateRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/rooms/allocate", {
        roomNumber,
        residentId,
      });
      setMessage(`Room ${roomNumber} allocated successfully`);
      setRoomNumber("");
      setResidentId("");
      setError("");
    } catch (err) {
      setMessage("");
      setError("Failed to allocate room");
    }
  };

  // Handle room status update
  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/rooms/status", { roomNumber, status });
      setMessage(`Room ${roomNumber} status updated to ${status}`);
      setRoomNumber("");
      setStatus("available");
      setError("");
    } catch (err) {
      setMessage("");
      setError("Failed to update room status");
    }
  };

  return (
    <div>
      <h1>Room Management</h1>

      {/* View Available Rooms */}
      <section>
        <h2>Available Rooms</h2>
        {error && <p>{error}</p>}
        {rooms.length > 0 ? (
          <ul>
            {rooms.map((room) => (
              <li key={room._id}>
                Room Number: {room.roomNumber}, Type: {room.type}, Price: $
                {room.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No available rooms</p>
        )}
      </section>

      {/* Allocate Room to Resident */}
      <section>
        <h2>Allocate Room</h2>
        <form onSubmit={handleAllocateRoom}>
          <div>
            <label>Room Number:</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Resident ID:</label>
            <input
              type="text"
              value={residentId}
              onChange={(e) => setResidentId(e.target.value)}
              required
            />
          </div>
          <button type="submit">Allocate Room</button>
        </form>
      </section>

      {/* Update Room Status */}
      <section>
        <h2>Update Room Status</h2>
        <form onSubmit={handleUpdateStatus}>
          <div>
            <label>Room Number:</label>
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>
          <button type="submit">Update Status</button>
        </form>
      </section>

      {/* Display Success or Error Message */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RoomManagement;
