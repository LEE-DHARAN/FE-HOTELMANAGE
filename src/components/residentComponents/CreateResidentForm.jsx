
import React, { useState } from "react";
import api from "../../services/api";

const CreateResidentForm = ({ setResidents, setError, setSuccessMessage }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleCreateResident = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(""); 

    try {
      
      const response = await api.post("/resident", {
        name,
        contact,
        email,
        roomId,
      });
      setResidents((prev) => [...prev, response.data]); 
      setSuccessMessage("Resident created successfully!");
      setName("");
      setContact("");
      setEmail("");
      setRoomId("");
    } catch (error) {
      setError(error.response?.data?.msg || "Error creating resident");
    }
  };

  return (
    <form onSubmit={handleCreateResident}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        required
      />
      <button type="submit">Create Resident</button>
    </form>
  );
};

export default CreateResidentForm;
