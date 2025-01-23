import React, { useState } from "react";
import { allocateRoom } from "../../services/roomService";

const AllocateRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [residentId, setResidentId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomData = { roomNumber, residentId };
      const response = await allocateRoom(roomData);
      setMessage(
        `Room ${response.roomNumber} successfully allocated to resident ${residentId}`
      );
      setRoomNumber("");
      setResidentId("");
    } catch (err) {
      setError("Failed to allocate room");
    }
  };

  return (
    <div>
      <h2>Allocate Room</h2>
      <form onSubmit={handleSubmit}>
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
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AllocateRoom;
