import React, { useState } from "react";
import { updateRoomStatus } from "../../services/roomService";

const UpdateRoomStatus = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [status, setStatus] = useState("available");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await updateRoomStatus(roomNumber, { status });
    setMessage(`Room ${response.roomNumber} status updated to ${status}`);
    setRoomNumber("");
    setStatus("available");
  } catch (err) {
    setError("Failed to update room status");
  }
};

  return (
    <div>
      <h2>Update Room Status</h2>
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
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
          </select>
        </div>
        <button type="submit">Update Status</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UpdateRoomStatus;
