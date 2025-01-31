
import React, { useState } from "react";
import api from "../../services/api";

const ResidentForm = ({ closeForm, setResidents, setSuccessMessage }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleCreateResident = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(""); 

    try {
      
      const response = await api.post("resident", {
        name,
        contact,
        email
      });
      setResidents((prev) => [...prev, response.data]); 
      setSuccessMessage("Resident created successfully!");
      setName("");
      setContact("");
      setEmail("");
    } catch (error) {
      setError(error.response?.data?.msg || "Error creating resident");
    }
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Resident</h2>
      <form onSubmit={handleCreateResident} className="space-y-4">
        <input
          type="text"
          placeholder="Resident Name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        <input
          type="text"
          placeholder="Email"
          className="border p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <input
          type="text"
          placeholder="Emergency Contact"
          className="border p-2 rounded w-full"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required/>

        <div className="flex gap-3">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button type="button" onClick={closeForm} className="bg-gray-400 text-white px-4 py-2 rounded">
            Back
        </button>
        </div>
      </form>
    </div>
  );
};

export default ResidentForm;
