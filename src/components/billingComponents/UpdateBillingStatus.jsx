import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateBillingStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    const fetchBilling = async () => {
      try {
        const response = await api.get(`/billing/${id}`);
        setBilling(response.data);
        setStatus(response.data.status);
      } catch (err) {
        console.error("Error fetching billing record", err);
      }
    };
    fetchBilling();
  }, [id]);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/billing/${id}`, { status });
      setBilling(response.data);
    } catch (err) {
      setError("Failed to update status");
    }
  };

  return (
    <div>
      <h1>Update Billing Status</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {billing && (
        <form onSubmit={handleUpdateStatus}>
          <div>
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
          <button type="submit">Update Status</button>
        </form>
      )}
    </div>
  );
};

export default UpdateBillingStatus;
