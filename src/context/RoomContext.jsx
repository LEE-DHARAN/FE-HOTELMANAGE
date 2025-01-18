import { createContext, useState, useContext, useEffect } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch rooms
    const fetchRooms = async () => {
      const response = [
        { id: 1, number: "101", type: "Single", availability: true },
        { id: 2, number: "102", type: "Double", availability: false },
      ];
      setRooms(response);
      setLoading(false);
    };
    fetchRooms();
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRooms = () => useContext(RoomContext);
