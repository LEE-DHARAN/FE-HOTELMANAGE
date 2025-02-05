import React, { useState, useEffect } from "react";
import { getAvailableRooms } from "../../services/roomService";
import api from "../../services/api";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedResident, setSelectedResident] = useState("");
  const [showResidentDropdown, setShowResidentDropdown] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const roomsData = await getAvailableRooms();
        setRooms(roomsData);
      } catch (err) {
        setError("Failed to load available rooms");
      }
    };

    const fetchResidents = async () => {
      try {
        const response = await api.get("/resident");
        setResidents(response.data.filter((resident) => !resident.roomId)); 
      } catch (err) {
        setError("Failed to fetch residents");
      }
    };

    fetchAvailableRooms();
    fetchResidents();
  }, []);

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
    setShowResidentDropdown(true); 
  };

  const handleAllocateRoom = async () => {
    try {
      const response = await api.post("/rooms/allocate", {
        residentId: selectedResident,
        roomId: selectedRoom,
      });
      setShowResidentDropdown(false); 
      setSelectedRoom("");     
      setSelectedResident("");
      console.log(response.data.msg)
      setSuccessMessage(response.data.msg);
      console.log(response.data.room)
      setRooms(response.data.room);
      setError(""); 
    } catch (err) {
      setError("Failed to allocate room");
      setSuccessMessage(""); 
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Available Rooms</h2>
      
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
      {rooms.length > 0 ? (
        <div className="space-y-4">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer"
              onClick={() => handleRoomClick(room._id)}>
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-xl font-semibold text-gray-800 cursor-pointer underline hover:text-blue-500"
                  style={{ textDecoration: "underline" }}>
                  Room Number: {room.roomNumber}
                </h3>
              </div>
              <div className="text-gray-600">
                <p className="text-sm">Price: ${room.price}</p>
                <p className="text-sm">Type: {room.type}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No available rooms at the moment.</p>
      )}

      {showResidentDropdown && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Select a Resident to Allocate Room</h3>
          {residents.length > 0 ? (
            <div>
              <select value={selectedResident} onChange={(e) => setSelectedResident(e.target.value)} className="border p-2 rounded w-full mb-4">
                <option value="">-- Select Resident --</option>
                {residents.map((resident) => (
                  <option key={resident._id} value={resident._id}>
                    {resident.name} ({resident.contact})
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <p>No residents available for room allocation.</p>
          )}

          <button onClick={handleAllocateRoom} className="bg-green-500 text-white px-4 py-2 rounded" disabled={!selectedResident}>
            Allocate Room
          </button>
        </div>
      )}
    </div>
  );
};

export default AvailableRooms;
