

import React from "react";
import { Link } from "react-router-dom";

const RoomManagementPage = () => {
  return (
    <div>
      <h2>Room Management Dashboard</h2>
      <p>Welcome to the Room Management System! Choose an option below:</p>
      <nav>
        <ul>
          <li>
            <Link to="/available-rooms">View Available Rooms</Link>
          </li>
          <li>
            <Link to="/allocate-room">Allocate Room</Link>
          </li>
          <li>
            <Link to="/update-room-status">Update Room Status</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RoomManagementPage;
