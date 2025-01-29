import React, { useState, useEffect } from "react";
import api from "../../services/api"; 

const MaintenanceForm = () => {
  const [description, setDescription] = useState("");
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    
    const fetchRooms = async () => {
      try {
        const response = await api.get("/rooms/available");
        setRooms(response.data);
      } catch (err) {
        setError("Failed to fetch rooms");
      }
    };
    fetchRooms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/maintenance", { description, roomId });
      setMessage("Maintenance request created successfully!");
      setDescription("");
      setRoomId("");
    } catch (err) {
      setMessage("");
      setError("Failed to create maintenance request");
    }
  };

  return (
    <div>
      <h2>Create Maintenance Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Room</label>
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          >
            <option value="">Select Room</option>
            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.roomNumber}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default MaintenanceForm;
