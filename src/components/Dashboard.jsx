import React from "react";

function Dashboard() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-200 p-4 rounded shadow">Total Rooms: 50</div>
        <div className="bg-yellow-200 p-4 rounded shadow">
          Occupied Rooms: 40
        </div>
        <div className="bg-red-200 p-4 rounded shadow">
          Pending Maintenance: 5
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
