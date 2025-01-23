import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

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
    return <p>Loading...</p>;
  }

  if (!billing) {
    return <p>Billing record not found</p>;
  }

  return (
    <div>
      <h1>Billing Details</h1>
      <p>
        <strong>Resident:</strong> {billing.residentId.name}
      </p>
      <p>
        <strong>Room Number:</strong> {billing.roomId.roomNumber}
      </p>
      <p>
        <strong>Amount:</strong> {billing.amount}
      </p>
      <p>
        <strong>Status:</strong> {billing.status}
      </p>
      <p>
        <strong>Due Date:</strong>{" "}
        {new Date(billing.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BillingDetails;
