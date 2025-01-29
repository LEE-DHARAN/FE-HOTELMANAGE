
import React, { useState, useEffect } from "react";
import api from "../../services/api";

const UpdateResidentForm = ({
  residentIdToUpdate,
  setResidents,
  setError,
  setSuccessMessage,
}) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    if (residentIdToUpdate) {
      
      axios
        .get(`/resident/${residentIdToUpdate}`)
        .then((response) => {
          const { name, contact, email, roomId } = response.data;
          setName(name);
          setContact(contact);
          setEmail(email);
          setRoomId(roomId);
        })
        .catch(() => setError("Error fetching resident data"));
    }
  }, [residentIdToUpdate, setError]);

  const handleUpdateResident = async (e) => {
    e.preventDefault();
    setError(null); // 
    setSuccessMessage(""); 

    try {
      const response = await api.put(`/resident/${residentIdToUpdate}`, {
        name,
        contact,
        email,
        roomId,
      });
      setResidents((prev) =>
        prev.map((resident) =>
          resident._id === residentIdToUpdate ? response.data : resident
        )
      );
      setSuccessMessage("Resident updated successfully!");
      setName("");
      setContact("");
      setEmail("");
      setRoomId("");
    } catch (error) {
      setError(error.response?.data?.msg || "Error updating resident");
    }
  };

  return (
    <form onSubmit={handleUpdateResident}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button type="submit">Update Resident</button>
    </form>
  );
};

export default UpdateResidentForm;
