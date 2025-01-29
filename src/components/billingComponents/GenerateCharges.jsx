import React, { useState } from "react";
import axios from "axios";

const GenerateCharges = () => {
  const [residentId, setResidentId] = useState("");
  const [roomFee, setRoomFee] = useState("");
  const [utilitiesFee, setUtilitiesFee] = useState("");
  const [additionalServices, setAdditionalServices] = useState("");

  const handleGenerateCharges = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/generate-charges", {
        residentId,
        roomFee,
        utilitiesFee,
        additionalServices,
      });
      alert("Charges generated successfully");
    } catch (error) {
      alert("Error generating charges");
    }
  };

  return (
    <div>
      <h2>Generate Charges</h2>
      <form onSubmit={handleGenerateCharges}>
        <input
          type="text"
          value={residentId}
          onChange={(e) => setResidentId(e.target.value)}
          placeholder="Resident ID"
          required
        />
        <input
          type="number"
          value={roomFee}
          onChange={(e) => setRoomFee(e.target.value)}
          placeholder="Room Fee"
          required
        />
        <input
          type="number"
          value={utilitiesFee}
          onChange={(e) => setUtilitiesFee(e.target.value)}
          placeholder="Utilities Fee"
          required
        />
        <input
          type="number"
          value={additionalServices}
          onChange={(e) => setAdditionalServices(e.target.value)}
          placeholder="Additional Services"
          required
        />
        <button type="submit">Generate Charges</button>
      </form>
    </div>
  );
};

export default GenerateCharges;
