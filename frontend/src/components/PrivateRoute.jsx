import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  let decodedToken;
  try {
    decodedToken = JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    console.error("Error decoding token:", error);

    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  console.log("Decoded Token:", decodedToken);
  if (decodedToken.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
