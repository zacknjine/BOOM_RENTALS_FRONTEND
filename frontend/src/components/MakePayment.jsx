import React, { useState } from "react";

const MakePayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8000/payments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          amount: parseFloat(amount),
          house_number: houseNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Payment created successfully! ID: ${data.id}`);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.detail || "Failed to create payment"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while creating the payment.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Make Payment</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="phone-number" className="block">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="amount" className="block">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="house-number" className="block">
            House Number:
          </label>
          <input
            type="text"
            id="house-number"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit Payment
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MakePayment;
