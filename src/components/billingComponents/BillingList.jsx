import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const BillingList = () => {
  const [billingRecords, setBillingRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleViewBilling = (id) => {
    navigate(`/billing/${id}`);
  };

  const handleDeleteBilling = async (id) => {
    try {
      await api.delete(`/billing/${id}`);
      setBillingRecords(billingRecords.filter((billing) => billing._id !== id));
    } catch (error) {
      console.error("Error deleting billing record", error);
    }
  };

  const handleCreateBilling = () => {
    navigate("/billing/create");
  };

  useEffect(() => {
    const fetchBillingRecords = async () => {
      try {
        const response = await api.get("/billing");
        setBillingRecords(response.data);
      } catch (error) {
        console.error("Error fetching billing records", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingRecords();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-center text-gray-800">Billing Records</h1>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        ) : billingRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Resident</th>
                  <th className="px-4 py-2 text-left">Room</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Due Date</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingRecords.map((billing) => (
                  <tr key={billing._id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{billing.residentId.name}</td>
                    <td className="px-4 py-2">{billing.roomId.roomNumber}</td>
                    <td className="px-4 py-2">${billing.amount}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-sm ${
                          billing.status === "Paid"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {billing.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(billing.dueDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleViewBilling(billing._id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteBilling(billing._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No billing records found
          </p>
        )}
      </div>
    </div>
  );
};

export default BillingList;
