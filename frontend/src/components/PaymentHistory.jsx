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

const PaymentHistory = ({ userId }) => {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/payments/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPayments(response.data);
      } catch (error) {
        setError(
          "Error fetching payment history: " + error.response?.data?.detail ||
            error.message
        );
      }
    };
    fetchPayments();
  }, [userId]);

  const chartData = {
    labels: payments.map((payment) => payment.created_at),
    datasets: [
      {
        label: "Amount",
        data: payments.map((payment) => payment.amount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        Your Payment History
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">House Number</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Created At</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {payment.id}
                </td>
                <td className="py-3 px-6 text-left">{payment.amount}</td>
                <td className="py-3 px-6 text-left">{payment.house_number}</td>
                <td className="py-3 px-6 text-left">{payment.status}</td>
                <td className="py-3 px-6 text-left">
                  {new Date(payment.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Payment Amounts
        </h3>
        <div className="h-64">
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
