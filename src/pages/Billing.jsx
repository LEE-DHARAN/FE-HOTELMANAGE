import React, { useState, useEffect } from "react";
import { useRooms } from "../context/RoomContext";

const Billing = () => {
  const { rooms } = useRooms();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCharge, setRoomCharge] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [additionalServices, setAdditionalServices] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (selectedRoom) {
      // Fetch the room charge from the selected room
      const selectedRoomDetails = rooms.find(
        (room) => room.id === selectedRoom
      );
      setRoomCharge(selectedRoomDetails ? selectedRoomDetails.price : 0);
    }
  }, [selectedRoom, rooms]);

  useEffect(() => {
    // Calculate the total charge whenever room charge, utilities, or services change
    setTotal(roomCharge + utilities + additionalServices);
  }, [roomCharge, utilities, additionalServices]);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handlePayment = () => {
    // Simulate a payment (in real-world use, integrate with a payment gateway here)
    alert(`Payment of ₹${total} has been successfully made.`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Billing</h2>

      <div className="mb-4">
        <label className="block text-lg">Select Room:</label>
        <select
          value={selectedRoom || ""}
          onChange={handleRoomChange}
          className="border p-2 w-full"
        >
          <option value="">Select a room</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {`Room ${room.number} - ${room.type}`}
            </option>
          ))}
        </select>
      </div>

      {selectedRoom && (
        <>
          <div className="mb-4">
            <label className="block text-lg">Room Charge (₹):</label>
            <input
              type="number"
              value={roomCharge}
              onChange={(e) => setRoomCharge(Number(e.target.value))}
              className="border p-2 w-full"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Utilities Charge (₹):</label>
            <input
              type="number"
              value={utilities}
              onChange={(e) => setUtilities(Number(e.target.value))}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg">Additional Services (₹):</label>
            <input
              type="number"
              value={additionalServices}
              onChange={(e) => setAdditionalServices(Number(e.target.value))}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold">Total: ₹{total}</label>
          </div>

          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
          >
            Make Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Billing;
