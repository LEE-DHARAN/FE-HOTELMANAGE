// import React, { useState } from "react";
// import { createRoom } from "../../services/roomService";

// const CreateRoom = () => {
//   const [roomNumber, setRoomNumber] = useState("");
//   const [type, setType] = useState("Single");
//   const [price, setPrice] = useState("");
//   const [status, setStatus] = useState("available");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const roomData = { roomNumber, type, price, status };
//     try {
//       const response = await createRoom(roomData);
//       setMessage(`Room ${response.roomNumber} created successfully!`);
//       setRoomNumber("");
//       setType("Single");
//       setPrice("");
//       setStatus("available");
//     } catch (err) {
//       setError("Failed to create room");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Room</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Room Number:</label>
//           <input
//             type="text"
//             value={roomNumber}
//             onChange={(e) => setRoomNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Type:</label>
//           <select value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="Single">Single</option>
//             <option value="Double">Double</option>
//             <option value="Suite">Suite</option>
//           </select>
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="available">Available</option>
//             <option value="occupied">Occupied</option>
//           </select>
//         </div>
//         <button type="submit">Create Room</button>
//       </form>
//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default CreateRoom;
import React, { useState } from "react";
import { createRoom } from "../../services/roomService";

const CreateRoom = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    type: "Single",
    price: "",
    status: "available",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRoom(formData);
      setMessage(`Room ${response.roomNumber} created successfully!`);
      setFormData({ roomNumber: "", type: "Single", price: "", status: "available" });

      // Close form after success
      setTimeout(() => {
        setMessage("");
        closeForm();
      }, 2000);
    } catch (err) {
      setError("Failed to create room");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Room Number:</label>
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Room
          </button>
          <button type="button" onClick={closeForm} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </form>
      {message && <p className="text-green-600 mt-2">{message}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default CreateRoom;
