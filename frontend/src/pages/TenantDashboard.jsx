import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import TenantProfile from '../components/TenantProfile';
import PaymentHistory from '../components/PaymentHistory';
import MaintenanceRequest from '../components/MaintenanceRequest';
import MakePayment from '../components/MakePayment';

const TenantDashboard = () => {
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Tenant Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link to="payment-history" className="hover:underline">Payment History</Link>
          </li>
          <li>
            <Link to="maintenance-request" className="hover:underline">Maintenance Request</Link>
          </li>
          <li>
            <Link to="make-payment" className="hover:underline">Make Payment</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="profile" />} />
          <Route path="profile" element={<TenantProfile />} />
          <Route path="payment-history" element={<PaymentHistory userId={userId} />} />
          <Route path="maintenance-request" element={<MaintenanceRequest />} />
          <Route path="make-payment" element={<MakePayment />} />
          
          {/* Catch-all for invalid URLs */}
          <Route path="*" element={<Navigate to="profile" />} />
        </Routes>
      </div>
    </div>
  );
};

export default TenantDashboard;
