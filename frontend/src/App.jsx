import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TenantDashboard from './pages/TenantDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage';
import LoginPage from './components/LoginPage'; 
import PrivateRoute from './components/PrivateRoute';
import UnauthorizedPage from './components/UnauthorizedPage';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    
        {/* Private Routes for Tenant */}
        <Route 
          path="/tenant-dashboard/*"
          element={
            <PrivateRoute role="tenant">
              <TenantDashboard />
            </PrivateRoute>
          }
        />    
        
        {/* Private Routes for Admin */}
        <Route 
          path="/admin-dashboard/*"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Catch-all for unmatched paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>

  );
};

export default App;
