import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import AdminTenantManagement from '../components/AdminTenantManagement';
import AdminFinancialSummary from '../components/AdminFinancialSummary';
import AdminMessageList from '../components/AdminMessageList';
import PropertyManagement from '../components/PropertyManagement';
import ViewPayments from '../components/ViewPayments';
import PrivateRoute from '../components/PrivateRoute';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="tenant-management" className="hover:underline">Tenant Management</Link>
          </li>
          <li>
            <Link to="financial-summary" className="hover:underline">Financial Summary</Link>
          </li>
          <li>
            <Link to="messages" className="hover:underline">Messages</Link>
          </li>
          <li>
            <Link to="view-payments" className="hover:underline">Payment History</Link>
          </li>
          <li>
            <Link to="property-management" className="hover:underline">Property Management</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="tenant-management" />}
          />

          {/* Protected routes for admin only */}
          <Route
            path="tenant-management"
            element={
              <PrivateRoute role="admin">
                <AdminTenantManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="financial-summary"
            element={
              <PrivateRoute role="admin">
                <AdminFinancialSummary />
              </PrivateRoute>
            }
          />
          <Route
            path="messages"
            element={
              <PrivateRoute role="admin">
                <AdminMessageList />
              </PrivateRoute>
            }
          />
          <Route
            path="view-payments"
            element={
              <PrivateRoute role="admin">
                <ViewPayments />
              </PrivateRoute>
            }
          />
          <Route
            path="property-management"
            element={
              <PrivateRoute role="admin">
                <PropertyManagement />
              </PrivateRoute>
            }
          />

          {/* Catch-all for invalid URLs */}
          <Route
            path="*"
            element={<Navigate to="tenant-management" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
