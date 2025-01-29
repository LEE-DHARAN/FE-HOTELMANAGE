import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentHistory = ({ residentId }) => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`/api/payment-history/${residentId}`);
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payment history", error);
      }
    };

    fetchPayments();
  }, [residentId]);

  return (
    <div>
      <h2>Payment History</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment._id}>
            {payment.paymentDate} - {payment.amount} ({payment.paymentMethod})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
