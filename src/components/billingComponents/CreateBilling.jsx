import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateBilling = () => {
  const [email, setEmail] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/billing", {
        email,
        roomNumber,
        amount,
        dueDate,
      });

      // After successful billing creation, navigate back to the Billing List
      navigate("/billing");
    } catch (error) {
      console.error("Error creating billing record", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Billing
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Room Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Amount</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Due Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Create Billing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBilling;
