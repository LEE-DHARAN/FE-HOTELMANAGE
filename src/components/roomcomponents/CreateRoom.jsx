import React, { useState } from "react";
import { createRoom } from "../../services/roomService";

const CreateRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [type, setType] = useState("Single");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("available");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomData = { roomNumber, type, price, status };
    try {
      const response = await createRoom(roomData);
      setMessage(`Room ${response.roomNumber} created successfully!`);
      setRoomNumber("");
      setType("Single");
      setPrice("");
      setStatus("available");
    } catch (err) {
      setError("Failed to create room");
    }
  };

  return (
    <div>
      <h2>Create Room</h2>
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
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        <button type="submit">Create Room</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateRoom;
