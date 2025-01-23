import React, { useEffect, useState } from "react";
import api from "../services/api"; // Assuming you've set up API calls

const BillingList = () => {
  const [billingRecords, setBillingRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingRecords = async () => {
      try {
        const response = await api.get("/billing"); // Assuming `/billing` is the route to fetch all billing records
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
    <div>
      <h1>Billing Records</h1>
      {loading ? (
        <p>Loading...</p>
      ) : billingRecords.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Resident</th>
              <th>Room</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {billingRecords.map((billing) => (
              <tr key={billing._id}>
                <td>{billing.residentId.name}</td>
                <td>{billing.roomId.roomNumber}</td>
                <td>{billing.amount}</td>
                <td>{billing.status}</td>
                <td>{new Date(billing.dueDate).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleViewBilling(billing._id)}>
                    View
                  </button>
                  <button onClick={() => handleDeleteBilling(billing._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No billing records found</p>
      )}
    </div>
  );

  const handleViewBilling = (id) => {
    // Logic to navigate to BillingDetails page
  };

  const handleDeleteBilling = async (id) => {
    try {
      await api.delete(`/billing/${id}`);
      setBillingRecords(billingRecords.filter((billing) => billing._id !== id));
    } catch (error) {
      console.error("Error deleting billing record", error);
    }
  };
};

export default BillingList;
