import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ViewPayments = () => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/payments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPayments(response.data);
      } catch (error) {
        setError(
          "Error fetching payments: " + error.response?.data?.detail ||
            error.message
        );
      }
    };
    fetchPayments();
  }, []);

  const chartData = {
    labels: payments.map((payment) => payment.phone_number),
    datasets: [
      {
        label: "Amount",
        data: payments.map((payment) => payment.amount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2>All Payments</h2>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Phone</th>
              <th>Amount</th>
              <th>House Number</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.phone_number}</td>
                <td>{payment.amount}</td>
                <td>{payment.house_number}</td>
                <td>{payment.status}</td>
                <td>{payment.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart-container">
        <h3>Payment Amounts</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default ViewPayments;
