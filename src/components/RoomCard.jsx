import React, { useState } from "react";
const RoomCard = ({ room, onRoomAction }) => {
  const [status, setStatus] = useState(room.status);

  const handleAction = (action) => {
    // Handle the room action (e.g., assign, release)
    onRoomAction(room.id, action);
    setStatus(action === "assign" ? "Occupied" : "Available");
  };

  return (
    <div className="p-4 border rounded shadow-md flex flex-col items-start mb-4">
      <h3 className="text-xl font-semibold">Room {room.roomNumber}</h3>
      <p className="text-lg">Status: {status}</p>
      <p className="text-sm">Resident: {room.residentName || "Not assigned"}</p>
      <p className="text-sm">Room Type: {room.roomType}</p>
      <p className="text-sm">Price: ${room.price}</p>

      <div className="mt-4">
        {status === "Available" ? (
          <button
            onClick={() => handleAction("assign")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Assign Room
          </button>
        ) : (
          <button
            onClick={() => handleAction("release")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Release Room
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
