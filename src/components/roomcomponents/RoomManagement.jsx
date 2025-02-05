import React, { useState } from "react";
import CreateRoom from "./CreateRoom";
import AvailableRooms from "./AvailableRooms";

const RoomManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [viewAvailableRooms, setViewAvailableRooms] = useState(false);

  const closeForm = () => setShowForm(false);
  const closeAvailableRooms = () => setViewAvailableRooms(false);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Room Management</h2>

      <div className="flex gap-4 mb-4">
        <button onClick={() => setShowForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Room
        </button>
        <button onClick={() => setViewAvailableRooms(true)} className="bg-green-500 text-white px-4 py-2 rounded">
          Available Rooms
        </button>
      </div>

      {successMessage && <p className="text-green-600">{successMessage}</p>}

      {showForm ? (
        <CreateRoom closeForm={closeForm} setSuccessMessage={setSuccessMessage} />
      ) : viewAvailableRooms ? (
        <AvailableRooms closeAvailableRooms={closeAvailableRooms} />
      ) : null}
    </div>
  );
};

export default RoomManagement;
