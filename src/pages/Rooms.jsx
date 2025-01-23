import React, { useState, useEffect } from "react";
import axios from "axios";


function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/rooms")
      .then((response) => setRooms(response.data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Room Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="p-4 border rounded shadow">
            <p>
              <strong>Room Number:</strong> {room.number}
            </p>
            <p>
              <strong>Type:</strong> {room.type}
            </p>
            <p>
              <strong>Available:</strong> {room.availability ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
