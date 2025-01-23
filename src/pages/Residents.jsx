import React, { useState, useEffect } from "react";

const Resident = () => {
  const [residentData, setResidentData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulating fetching resident data from the server (you'd replace this with an actual API call)
  useEffect(() => {
    const fetchResidentData = async () => {
      // Simulate a resident data object
      const data = {
        name: "",
        email: "",
        contact: "",
        emergencyContact: "",
        checkInDate: "",
        checkOutDate: "",
        roomNumber: "",
      };
      setResidentData(data);
      setName(data.name);
      setEmail(data.email);
      setContact(data.contact);
      setEmergencyContact(data.emergencyContact);
      setCheckInDate(data.checkInDate);
      setCheckOutDate(data.checkOutDate);
      setRoomNumber(data.roomNumber);
      setLoading(false);
    };

    fetchResidentData();
  }, []);

  const handleSave = () => {
    // In a real-world scenario, you would send this data to the backend
    alert("Resident details updated successfully!");
  };

  if (loading) return <p>Loading resident data...</p>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Resident Information</h2>

      <div className="mb-6">
        <label className="block text-lg">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Contact Number:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Emergency Contact:</label>
        <input
          type="text"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Room Number:</label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Check-in Date:</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg">Check-out Date:</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Resident;
