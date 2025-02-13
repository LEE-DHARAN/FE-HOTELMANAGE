import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AvailableRooms from "../components/roomcomponents/AvailableRooms";
import AllocateRoom from "../components/roomcomponents/AllocateRoom";
import CreateRoom from "../components/roomcomponents/CreateRoom";
import UpdateRoomStatus from "../components/roomcomponents/UpdateRoomStatus";
import RoomManagement from "../components/roomcomponents/RoomManagement";

const RoomManagementRoutes = () => {
  return (
    
      <Routes>
        <Route path="" element={<RoomManagement />} />
        {/* <Route path="allocate" element={<AllocateRoom />} /> */}
        <Route path="create" element={<CreateRoom />} />
        <Route path="update" element={<UpdateRoomStatus />} />
      </Routes>
    
  );
};

export default RoomManagementRoutes;
