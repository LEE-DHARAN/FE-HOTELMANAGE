import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import the edit and delete icons

const ResidentList = () => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await api.get(`/resident`);
        console.log(response.data);
        setResidents(response.data);
      } catch (error) {
        console.error("Error fetching resident list", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, []);


  const handleDelete = async (id) => {
    try {
      await api.delete(`/resident/${id}`);
      setResidents(residents.filter((resident) => resident._id !== id));
    } catch (error) {
      console.error("Error deleting resident", error);
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">Resident List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {residents.map((resident) => (
          <div
            key={resident._id}
            className="bg-white shadow-lg rounded-lg p-4 border"
          >
            <h4 className="text-xl font-semibold">{resident.name}</h4>
            <p className="text-sm text-gray-600">Contact: {resident.contact}</p>
            {resident.roomId && (
              <p className="text-sm text-gray-600">Room Number: {resident.roomId.roomNumber}</p>
            )}
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => handleDelete(resident._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentList;
