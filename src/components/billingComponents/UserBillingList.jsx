import React, { useEffect, useState } from "react";
import api from "../../services/api";

const UserBillingList = () => {
  const [billingRecords, setBillingRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingRecords = async () => {
      const email = localStorage.getItem("email");

      if (!email) {
        console.error("No email found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/billing/email/${email}`);
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
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          My Billing Records
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        ) : billingRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Room</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {billingRecords.map((billing) => (
                  <tr key={billing._id} className="border-b hover:bg-gray-100">
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

export default UserBillingList;
