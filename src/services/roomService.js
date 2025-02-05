
import api from "../services/api";
const API_URL = "http://localhost:3001/api/rooms"; 

// Fetch all available rooms
export const getAvailableRooms = async () => {
  try {
    const response = await api.get(`rooms/available`);
    return response.data;
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    throw error;
  }
};

// Allocate a room to a resident
export const allocateRoom = async (roomData) => {
  try {
    const response = await api.post(`${API_URL}/allocate`, roomData);
    return response.data;
  } catch (error) {
    console.error("Error allocating room:", error);
    throw error;
  }
};

// Create a new room
export const createRoom = async (roomData) => {
  try {
    const response = await api.post(`${API_URL}`, roomData);
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

// Update room status 
export const updateRoomStatus = async (roomNumber,statusData) => {
  try {
    const response = await api.put(`${API_URL}/${roomNumber}/status`, statusData);
    return response.data;
  } catch (error) {
    console.error("Error updating room status:", error);
    throw error;
  }
};

// Delete a room
export const deleteRoom = async (roomNumber) => {
  try {
    const response = await api.delete(`${API_URL}/${roomNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
};

// In roomService.js

export const getRoomIdByNumber = async (roomNumber) => {
  try {
    const response = await api.get(`${API_URL}/${roomNumber}`);
    return response.data._id; // Assuming the response contains the room's _id
  } catch (error) {
    console.error("Error fetching room by number:", error);
    throw error;
  }
};

