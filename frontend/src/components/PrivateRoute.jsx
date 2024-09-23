import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // No token, redirect to login
    return <Navigate to="/login" />;
  }

  let decodedToken;
  try {
    decodedToken = JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    console.error("Error decoding token:", error);
    // Invalid token, clear it from storage and redirect to login
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }

  console.log("Decoded Token:", decodedToken); // Check the decoded token

  if (decodedToken.role !== role) {
    // Role mismatch, redirect to unauthorized
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;