import React, { useState, useEffect } from "react";
import { getAvailableRooms } from "../../services/roomService";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const roomsData = await getAvailableRooms();
        setRooms(roomsData);
      } catch (err) {
        setError("Failed to load available rooms");
      }
    };
    fetchAvailableRooms();
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {rooms.length > 0 ? (
        <ul>
          {rooms.map((room) => (
            <li key={room.roomNumber}>
              Room Number: {room.roomNumber}, Type: {room.type}, Price: $
              {room.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No available rooms.</p>
      )}
    </div>
  );
};

export default AvailableRooms;
