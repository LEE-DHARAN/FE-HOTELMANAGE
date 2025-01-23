import React, { useState } from "react";
import api from "../services/api";

const CreateBilling = () => {
  const [residentId, setResidentId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/billing", {
        residentId,
        roomId,
        amount,
        dueDate,
      });
      // Redirect to billing list or show success message
    } catch (err) {
      setError("Failed to create billing record");
    }
  };

  return (
    <div>
      <h1>Create Billing Record</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Resident ID:</label>
          <input
            type="text"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Room ID:</label>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Billing</button>
      </form>
    </div>
  );
};

export default CreateBilling;
