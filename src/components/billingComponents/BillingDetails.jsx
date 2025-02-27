import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const BillingDetails = () => {
  const { id } = useParams();
  const [billing, setBilling] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingDetails = async () => {
      try {
        const response = await api.get(`/billing/${id}`);
        setBilling(response.data);
      } catch (error) {
        console.error("Error fetching billing details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!billing) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Billing record not found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Billing Details
        </h2>
        <div className="space-y-3">
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-800">Resident:</strong>{" "}
            {billing.residentId.name}
          </p>
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-800">Room Number:</strong>{" "}
            {billing.roomId.roomNumber}
          </p>
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-800">Amount:</strong> $
            {billing.amount}
          </p>
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-800">Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full text-white text-sm ${
                billing.status === "Paid"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {billing.status}
            </span>
          </p>
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-800">Due Date:</strong>{" "}
            {new Date(billing.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
