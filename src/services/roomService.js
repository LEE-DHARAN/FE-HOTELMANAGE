import axios from "axios";

const API_URL = "/api/rooms"; // Adjust according to your backend setup

// Fetch all available rooms
export const getAvailableRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/available`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    throw error;
  }
};

// Allocate a room to a resident
export const allocateRoom = async (roomData) => {
  try {
    const response = await axios.post(`${API_URL}/allocate`, roomData);
    return response.data;
  } catch (error) {
    console.error("Error allocating room:", error);
    throw error;
  }
};

// Create a new room
export const createRoom = async (roomData) => {
  try {
    const response = await axios.post(API_URL, roomData);
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

// Update room status (available or occupied)
export const updateRoomStatus = async (statusData) => {
  try {
    const response = await axios.put(`${API_URL}/status`, statusData);
    return response.data;
  } catch (error) {
    console.error("Error updating room status:", error);
    throw error;
  }
};

// Delete a room
export const deleteRoom = async (roomNumber) => {
  try {
    const response = await axios.delete(`${API_URL}/${roomNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
};
