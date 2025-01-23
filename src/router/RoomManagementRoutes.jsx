import React from "react";
import { Route } from "react-router-dom";
import AvailableRooms from "../components/roomcomponents/AvailableRooms";
import AllocateRoom from "../components/roomcomponents/AllocateRoom";
import CreateRoom from "../components/roomcomponents/CreateRoom";
import UpdateRoomStatus from "../components/roomcomponents/UpdateRoomStatus";

const RoomManagementRoutes = () => {
  return (
    <>
      <Route path="/rooms/available" element={<AvailableRooms />} />
      <Route path="/rooms/allocate" element={<AllocateRoom />} />
      <Route path="/rooms/create" element={<CreateRoom />} />
      <Route path="/rooms/update" element={<UpdateRoomStatus />} />
    </>
  );
};

export default RoomManagementRoutes;
